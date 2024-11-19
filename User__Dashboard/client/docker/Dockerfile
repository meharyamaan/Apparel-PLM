FROM node:18-alpine as dev

# Define environment variable
ENV REACT_APP_API_URL=http://backend:8080
ENV PORT=3000


# Install app dependencies
WORKDIR /app
COPY package*.json .npmrc ./
RUN npm install

# Run Server
EXPOSE 3000
CMD ["npm", "start"]
