# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the build output to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration template for environment variable substitution
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose port 8080 (Matches default Cloud Run, but Nginx will now use $PORT)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
