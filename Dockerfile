# Dockerfile

# Use a Node image to build the React app
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code and build the React app
COPY . .
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 3000 for the container
EXPOSE 3000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
