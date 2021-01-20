<?php

namespace App\Enlightn\Analyzers\Reliability;

use Enlightn\Enlightn\Analyzers\Reliability\ReliabilityAnalyzer;
use Illuminate\Filesystem\Filesystem;

class NodeVersionAnalyzer extends ReliabilityAnalyzer
{
    /**
     * The title describing the analyzer.
     *
     * @var string|null
     */
    public $title = 'Your application contains a .nvmrc file to enforce a consistent node/npm version';

    /**
     * The severity of the analyzer.
     *
     * @var string|null
     */
    public $severity = self::SEVERITY_CRITICAL;

    /**
     * The time to fix in minutes.
     *
     * @var int|null
     */
    public $timeToFix = 2;

    /**
     * Get the error message describing the analyzer insights.
     *
     * @return string
     */
    public function errorMessage()
    {
        return 'Your application does not contain a .nvmrc file. Please create one to enforce a consistent node/npm
        version when developing locally. This can be achieved using `node -v > .nvmrc`';
    }

    /**
     * Execute the analyzer.
     *
     * @return void
     */
    public function handle(Filesystem $files)
    {
        if (! $files->exists(base_path('.nvmrc'))) {
            $this->markFailed();
        }
    }
}
