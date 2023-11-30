# Use the official Node.js 14 image as the base image
FROM node:18.15.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Set the command to run the Next.js application
CMD ["npm", "start"]
