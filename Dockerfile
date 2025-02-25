# Build stage
FROM node:18-alpine
# Set the working directory in the container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g @angular/cli

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 4200

# Update your package.json start script
# Start the app allowing external connections
CMD ["npm", "start"]
