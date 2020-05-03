# Specify the base image, apline in docker world is the light weight version of the images.
FROM node:alpine

# Change working directory. It is not recommended to use default directory ( i.e. root).
WORKDIR /usr/app/visits

# Only package.json, bascially all the configuration files requerd for installing dependencies.
COPY ./package.json ./

# Install dependencies
RUN npm install

# Now copy rest of the code, this should done after installation of dependencies as if we change anything in our code docker will not use cachced version and will re-install all the dependencies.
COPY ./ ./

# Default command for the containter.
CMD ["npm", "start"]
