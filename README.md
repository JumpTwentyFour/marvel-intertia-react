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

##### composer run lint

```
$ docker-compose exec php composer run lint
```


#### Artisan Commands:

##### php artisan COMMAND

```
$ docker-compose exec php php artisan list
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

##### npm run dev

```
$ docker-compose run --rm node npm run dev
```

##### npm run watch

```
$ docker-compose run --rm node npm run watch
```

##### npm run hot

```
$ docker-compose run -p 8080:8080 --rm node npm run hot
```

##### npm run test

```
$ docker-compose run --rm node npm run test
```

##### npm run prod

```
$ docker-compose run --rm node npm run prod
```

---


## Marvel API

Documentation: https://developer.marvel.com/docs

If you need to generate keys for the Marvel API: https://developer.marvel.com/account
