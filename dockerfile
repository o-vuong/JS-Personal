# Use the official Node.js 14 Alpine image as the base image
FROM node:14-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the /app directory
COPY package*.json ./

# Install the dependencies from the package.json file
RUN npm install

# Copy all the files from the current directory to the /app directory inside the container
COPY . .

# Expose port 3000 to allow incoming connections
EXPOSE 3000

# Set the default command to run when the container starts
CMD ["npm", "start"]