<?php

namespace App\Providers;

use App\Services\Characters;
use Illuminate\Support\ServiceProvider;
use Marvel\Client;

class MarvelClientServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Client::class, function (): Client {
            $publicKey = config()->get('marvel.public-key');

            $privateKey = config()->get('marvel.private-key');

            return new Client($publicKey, $privateKey);
        });

        $this->app->singleton(Characters::class, function (): Characters {
            $client = app()->make(Client::class);

            return new Characters($client, $this->app->make('cache'));
        });
    }
}
