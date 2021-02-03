<?php

namespace App\Initializers;

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
                    'Enlightn\\Enlightn\\Analyzers\\Reliability\\DirectoryWritePermissionsAnalyzer',
                    'Enlightn\\Enlightn\\Analyzers\\Reliability\\DatabaseStatusAnalyzer',
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
