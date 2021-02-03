<?php

namespace App\Initializers;

use Enlightn\Enlightn\Analyzers\Performance\ConfigCachingAnalyzer;
use Enlightn\Enlightn\Analyzers\Performance\RouteCachingAnalyzer;
use Enlightn\Enlightn\Analyzers\Reliability\EnvVariableAnalyzer;
use MadWeb\Initializer\Contracts\Runner;

class Update
{
    public function local(Runner $run)
    {
        $run->external('composer', 'install')
            ->artisan('migrate')
            ->artisan('db:seed')
            ->artisan(
                'enlightn',
                ['analyzer' => [
                    EnvVariableAnalyzer::class,
                    ConfigCachingAnalyzer::class,
                    RouteCachingAnalyzer::class,
                ]],
            )
            ->artisan('cache:clear');
    }

    public function node(Runner $run)
    {
        $run
            ->external('nvm', 'use')
            ->external('npm', 'install')
            ->external('npm', 'run', 'development');
    }
}
