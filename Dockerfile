# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json only (if they exist)
COPY package*.json ./

# Install dependencies
RUN npm install next@^14.1.3 react@^18.2.0 react-dom@^18.2.0

# Copy the rest of the code
COPY . .

# Expose the app port
EXPOSE 7700

# Command to run the app in development mode
CMD ["npm", "run", "dev", "--", "-p", "7700"]

