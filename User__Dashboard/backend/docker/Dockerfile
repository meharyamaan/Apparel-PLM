FROM node:20-alpine3.18 as dev

# Define environment variable
ENV PORT=8080

# Copy package.json and package-lock.json to the working directory
WORKDIR /app
COPY package*.json .
RUN npm install

# Run server.js
EXPOSE 8080
CMD ["node", "server.js"]
