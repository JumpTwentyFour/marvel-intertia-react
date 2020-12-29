# Offical Docker Image for PHP
# https://hub.docker.com/_/php
FROM php:8.0-fpm

# Set Current Directory
WORKDIR /var/www/vhost/

# Install dependencies
RUN apt-get clean && apt-get update && apt-get upgrade -y && apt-get install -y \
    git \
    libcurl4-openssl-dev \
    libonig-dev \
    libpng-dev \
    libssl-dev \
    libxml2-dev \
    libzip-dev \
    unzip \
    wget \
    zip

# PHP Extensions
RUN docker-php-ext-install \
    bcmath \
    ctype \
    gd \
    mbstring \
    mysqli \
    opcache \
    pdo_mysql \
    tokenizer \
    xml \
    zip



# Install Composer from Official Docker Image
# https://hub.docker.com/_/composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
