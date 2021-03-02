<?php

namespace App\Providers;

use App\Services\Characters;
use App\Services\Comics;
use Illuminate\Support\ServiceProvider;
use Marvel\Client;

class MarvelClientServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
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

        $this->app->singleton(Comics::class, function (): Comics {
            $client = app()->make(Client::class);

            return new Comics($client, $this->app->make('cache'));
        });
    }
}
