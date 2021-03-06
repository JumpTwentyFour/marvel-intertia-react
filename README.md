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

It will then run a set of commands as defined in `App\Initializers\Install`. This contains a set of Enlightn checks
which will analyze your project for potential setup issues such as file permissions and an inaccessible database.

You will also want to update your `.env` so when Ziggy routes are generated it uses your domain.

```
APP_URL=https://marvel.test
```

Add it to your `/etc/hosts` file, for example:

```
127.0.0.1   marvel.test
```

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

Now you should be able to access the site by visiting: https://marvel.test



---


### Development

It is recommended whenever you start a new feature from main, or pull down a code from a colleague, that you also run
`php artisan app:update -v` this will again ensure your application is up to date with any changes made upstream
in the repository.


### Cypress

In order to run Cypress tests you must ensure the `cypress.json` file matches your local environment.
If it doesn't create a `cypress.env.json` file which any overrides you have. E.g.

```
{
    "baseUrl": "https://marvel.test"
}
```
Then run the following command:- `npx cypress open --config-file=cypress.env.json`

If you wish to not have your local database being overwritten by Cypress' setup process, please create an `.env.cypress` file locally.


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

##### composer run analyse

```
$ docker-compose exec php composer run analyse
```


#### Artisan Commands:

##### php artisan COMMAND

```
$ docker-compose exec php php artisan list
```

##### Clear Laravel cache

```
$ docker-compose exec php php artisan optimize:clear
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

##### npm run prod

```
$ docker-compose run --rm node npm run prod
```


#### Cypress:

##### Running Cypress In Browser

```
npx cypress open
```

##### Running Cypress in Headless Mode

```
npx cypress run --headless
```

##### Running Cypress with a different config file

```
npx cypress open --config-file=cypress.env.json
```


---


## Troubleshooting

### Ziggy is not defined

You may have an issue where you get an error "Ziggy is not defined" in the browser console, you will also see `@routes` as text on the page. I think this is because your Laravel views are cached. To clear your cache, run this command:

```
$ docker-compose exec php php artisan optimize:clear
```


---


## Links

Laravel Documentation: https://laravel.com/docs/8.x/

Inertia.js Documentation: https://inertiajs.com/

Marvel API Documentation: https://developer.marvel.com/docs

If you need to generate keys for the Marvel API: https://developer.marvel.com/account


---


## Danger JS

Documentation: https://danger.systems/js/


### Test Locally

Install Globally: `npm install -g danger`

Hookup to Bitbucket Cloud:

1. Add Oauth Consumer for Workspace called "DangerJS" https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud/
    - Grant read/write permissions for pull requests
    - Grant read permissions for accounts
    - Enable "This is a private consumer"

2. Get Key and use for local environment variable `DANGER_BITBUCKETCLOUD_OAUTH_KEY=<YOUR-KEY>`
3. Get secret and use for local environment variable `DANGER_BITBUCKETCLOUD_OAUTH_SECRET=<YOUR-SECRET>`
4. Run (Example) `danger --dangerfile "danger/dangerfile.ts" pr "https://bitbucket.org/jump24team/marvel-inertia-js/pull-requests/28"`


### Test On Bitbucket Pipelines

1. Add Key and Consumer to "Pipelines" > "Repository Variables" in Bitbucket
2. Setup `bitbucket-pipelines.yml` like in this project


## Enlightn

This application makes use of https://www.laravel-enlightn.com/ to analyse common Security, Performance and Reliability
issues in code. We have also extended upon this package as a company to provide our own rules that follow
standards we adhere to https://github.com/JumpTwentyFour/project-analysers.

Please note that enlightn is designed primarily to be run in a development pipeline
or on production as recommended by the creator. There are known issues to us of running this in Docker locally
where specific analyzers will fail such as HSTS and CSP headers as Enlightn is unable to make a request internally in
Docker. The analysers can be tested locally outside of Docker however the pipeline must always be used as the source of
truth.

All configuration can be found in `config/enlightn.php`
