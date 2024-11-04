# Use a Node image to build the React app
FROM node:18-alpine AS builder

# Accept build arguments
ARG REACT_APP_RECAPTCHA_SITE_KEY

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code and build the React app with the environment variable
COPY . .
# Set the REACT_APP_RECAPTCHA_SITE_KEY environment variable for the build
ENV REACT_APP_RECAPTCHA_SITE_KEY=${REACT_APP_RECAPTCHA_SITE_KEY}
ENV REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID=${REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID}
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the container
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
