FROM node:18-alpine
WORKDIR /app
COPY build/ ./build
COPY package*.json ./
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
