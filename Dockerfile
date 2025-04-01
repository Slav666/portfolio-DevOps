# Use an official Node.js runtime as a base image
FROM node:18-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 for Next.js
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
