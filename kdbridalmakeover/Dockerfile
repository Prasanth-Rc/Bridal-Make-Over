# Step 1: Use Node to build the React app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy dependency files and install
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy all project files and build the app
COPY . ./
RUN npm run build

# Step 2: Use Nginx to serve the build
FROM nginx:alpine

# Copy the build folder into Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]

