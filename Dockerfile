# use node LTS image for version 22
FROM node:22-alpine

# set working directory inside container
WORKDIR /app

# copy package.json and the lock file into the container
COPY package.json package-lock.json ./

# install dependencies
RUN npm install

# copy the rest of the application files
COPY . .

# build the typescript code
RUN npm run build

# start the application
CMD ["npm", "run", "prod"]