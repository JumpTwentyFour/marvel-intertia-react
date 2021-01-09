# Inertia.js Test Project using the Marvel API

This is a test project to experiment with Laravel and Inertia.js

Documentation: https://inertiajs.com/


---


## Getting Started

Start Docker.

```
$ docker-compose up --build -d
```

This command will bring up Nginx and PHP containers that remain running to handle requests.

It will also launch a node container that will start, install our dependencies with `npm install`, and then shutdown.

We now need to install our PHP dependencies using composer:

```
$ docker-compose exec php composer run project-install-local
```

If your `.env` file doesn't exist, this will copy the `.env.example` file, and then install your PHP dependencies using composer.

It will then generate an `APP_KEY` using artisan.

You will need to get API keys for the Marvel API, they are saved in 1Password, or you can generate new ones here:
https://developer.marvel.com/account

You will need to set these variables in your `.env` file:

```
MARVEL_PUBLIC_API_KEY=
MARVEL_PRIVATE_API_KEY=
```

Finally, you will need to build the CSS and JavaScript.

```
docker-compose run --rm node npm run dev
```

Now you should be able to access the site by visiting: http://localhost


### Optional:

This step isn't required as only one project is running from the web server, but if you would like to set a domain to access this site from, add it to your `/etc/hosts` file, for example:

```
127.0.0.1   marvel.test
```

You will also want to update your `.env` so when Ziggy routes are generated it uses your domain.

```
APP_URL=http://marvel.test
```

You can also use `https://` if you prefer, but this means you won't be able to use Webpack Hot Module Replacement until I can figure out how to configure it to use WebSockets over `wss://` instead of `ws://`


---


## Commands

These are using `docker-compose exec SERVICE_NAME` not `docker exec CONTAINER_NAME`, this is intentional.

You will notice that the Node commands use `docker-compose run --rm SERVICE_NAME`, this is because the node container isn't running, so it launches it first.

You can run multiple commands at the same time, for example, you could run the command for `npm run watch` in one tab, and then the command for `npm run lint` in another tab, and it will just launch another container to run that command, and then shut it down when the command finishes running.

As with any other command, you can hit `ctrl` + `c` to exit and kill the container.


---


### PHP

```
$ docker-compose exec php COMMAND
```


#### Commands:

##### composer install

```
$ docker-compose exec php composer install
```

##### composer update

```
$ docker-compose exec php composer update
```

##### composer require PACKAGE

```
$ docker-compose exec php composer require guzzlehttp/guzzle
```

##### composer remove PACKAGE

```
$ docker-compose exec php composer remove guzzlehttp/guzzle
```


#### Composer Scripts:

##### PHP Linter

```
$ docker-compose exec php composer run lint
```

##### PHP Tests

```
$ docker-compose exec php composer run test
```


#### Artisan Commands:

##### php artisan COMMAND

```
$ docker-compose exec php php artisan list
```

##### Clear Laravel cache

```
$ docker-compose exec php php artisan optimise:clear
```

##### Re-generate Ziggy Routes

```
$ docker-compose exec php php artisan ziggy:generate
```


---


### Node

```
$ docker-compose run --rm node COMMAND
```


#### Commands:

##### npm install

```
$ docker-compose run --rm node npm install
```

##### npm update

```
$ docker-compose run --rm node npm update
```

##### npm audit

```
$ docker-compose run --rm node npm audit
```

##### npm install PACKAGE

```
$ docker-compose run --rm node npm install left-pad
```

##### npm remove PACKAGE

```
$ docker-compose run --rm node npm remove left-pad
```


#### NPM Scripts:

##### Build Development Dependencies

```
$ docker-compose run --rm node npm run dev
```

##### Build Development Dependencies and watch files to trigger a rebuild

```
$ docker-compose run --rm node npm run watch
```

##### Build Development Dependencies, watch files to trigger a rebuild and automatically update the browser using Webpack Hot Module Replacement.

This only works when you load the site over `http://localhost` not `https://localhost` due to websockets connecting over `ws://` and not `wss://`.

We have had to open port `8080` on the Docker container for the `webpack-dev-server` to be accessible. It is in the command below.

```
$ docker-compose run -p 8080:8080 --rm node npm run hot
```

##### Run Tests using Jest

```
$ docker-compose run --rm node npm run test
```


---


## Troubleshooting

### Ziggy is not defined

You may have an issue where you get an error "Ziggy is not defined" in the browser console, you will also see `@routes` as text on the page. I think this is because your Laravel views are cached. To clear your cache, run this command:

```
$ docker-compose exec php php artisan optimise:clear
```

---


## Links

Laravel Documentation: https://laravel.com/docs/8.x/

Inertia.js Documentation: https://inertiajs.com/

Marvel API Documentation: https://developer.marvel.com/docs
