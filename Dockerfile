# Start with a Node.js base image that uses Node v13
FROM --platform=linux/amd64 node:18
WORKDIR /app

# Copy the package.json file to the container and install fresh node_modules
COPY package*.json tsconfig*.json ./
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Transpile typescript and bundle the project
RUN npm run build

# Remove the original src directory (our new compiled source is in the `dist` folder)
RUN rm -r src

EXPOSE 3000

# Assign `npm run start:prod` as the default command to run when booting the container
CMD ["npm", "run", "start:prod"]