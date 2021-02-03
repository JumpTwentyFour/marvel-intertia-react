<?php

namespace App\Initializers;

use Enlightn\Enlightn\Analyzers\Reliability\DatabaseStatusAnalyzer;
use Enlightn\Enlightn\Analyzers\Reliability\DirectoryWritePermissionsAnalyzer;
use MadWeb\Initializer\Contracts\Runner;

class Install
{
    public function local(Runner $run)
    {
        $run->external('composer', 'install')
            ->artisan('key:generate')
            ->artisan('migrate')
            ->artisan('db:seed')
            ->artisan(
                'enlightn',
                ['analyzer' => [
                    DirectoryWritePermissionsAnalyzer::class,
                    DatabaseStatusAnalyzer::class,
                ]],
            )
            ->artisan('storage:link');
    }

    public function node(Runner $run)
    {
        $run
            ->external('nvm', 'use')
            ->external('npm', 'install')
            ->external('npm', 'run', 'development');
    }
}
