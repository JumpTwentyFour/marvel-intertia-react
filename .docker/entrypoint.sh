#!/bin/bash

cp -r /var/www/cache/node_modules /var/www/vhost/node_modules/
exec npm run watch
