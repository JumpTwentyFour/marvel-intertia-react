FROM node:15.5.0-buster

WORKDIR /var/www

# Create the directories we need
RUN mkdir -p /var/www/cache
RUN mkdir -p /var/www/vhost

# Copy over the package.json and lock into the cache directory ready to install
WORKDIR /var/www/cache
COPY package.json ./
COPY package-lock.json ./

# Ensure node user has all permissions
RUN chown node:node -R /var/www/cache
RUN chown node:node -R /var/www/vhost

# Switch to node user from root
USER node

# Install the application's dependencies into the node_modules's cache directory.
WORKDIR /var/www/cache
RUN npm install

# Change work directory to vhost folder where application code sits.
WORKDIR /var/www/vhost
