<?php

namespace App\Providers;

use App\Initializers\Install;
use App\Initializers\Update;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register()
    {
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind('app.installer', Install::class);
        $this->app->bind('app.updater', Update::class);
    }
}
