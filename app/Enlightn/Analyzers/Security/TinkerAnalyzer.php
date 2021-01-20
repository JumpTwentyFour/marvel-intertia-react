<?php

namespace App\Enlightn\Analyzers\Security;

use Enlightn\Enlightn\Analyzers\Security\SecurityAnalyzer;
use Enlightn\Enlightn\Composer;

class TinkerAnalyzer extends SecurityAnalyzer
{
    /**
     * The title describing the analyzer.
     *
     * @var string|null
     */
    public $title = 'Your application does not include tinker in production';

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
        return 'Your application contains Laravel tinker in the composer dependencies, which should be avoided in case
        it is accidentally deployed to production.';
    }

    /**
     * Execute the analyzer.
     *
     * @param \Enlightn\Enlightn\Composer $composer
     * @return void
     */
    public function handle(Composer $composer)
    {
        $dependencies = $composer->getDependencies();

        if (in_array('laravel/tinker', $dependencies, true)) {
            $this->markFailed();
        }
    }
}
