# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code.
COPY . .

# Run the web service on container startup.
CMD [ "node", "index.js" ]

# Expose the port the app runs on
EXPOSE 3000
