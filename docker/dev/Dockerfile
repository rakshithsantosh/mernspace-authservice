# Use the officcial Node.js image as the base image

FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container to leverage Docker cache
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5501

#The command to run the application
CMD ["npm", "run", "dev"]
