<?php

namespace App\Initializers;

use MadWeb\Initializer\Contracts\Runner;

class Update
{
    public function local(Runner $run)
    {
        $run
            ->external('composer', 'install')
            ->artisan('migrate')
            ->artisan('db:seed')
            ->artisan(
                'enlightn',
                ['analyzer' => [
                    'Enlightn\\Enlightn\\Analyzers\\Reliability\\EnvVariableAnalyzer',
                    'Enlightn\\Enlightn\\Analyzers\\Performance\\ConfigCachingAnalyzer',
                    'Enlightn\\Enlightn\\Analyzers\\Performance\\RouteCachingAnalyzer',
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
