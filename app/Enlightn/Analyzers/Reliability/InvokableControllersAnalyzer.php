<?php

namespace App\Enlightn\Analyzers\Reliability;

use App\Enlightn\Analyzers\Concerns\AnalyzesFiles;
use App\Http\Controllers\Controller;
use Enlightn\Enlightn\Analyzers\Reliability\ReliabilityAnalyzer;
use Illuminate\Filesystem\Filesystem;

class InvokableControllersAnalyzer extends ReliabilityAnalyzer
{
    use AnalyzesFiles;

    /**
     * The title describing the analyzer.
     *
     * @var string|null
     */
    public $title = 'Analyzes whether all controllers are single action controllers.';

    /**
     * The severity of the analyzer.
     *
     * @var string|null
     */
    public $severity = self::SEVERITY_MAJOR;

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
        return 'Please ensure all of your controllers are single action invokable controllers. See
        https://laravel.com/docs/8.x/controllers#single-action-controllers';
    }

    /**
     * Execute the analyzer.
     *
     * @param \Illuminate\Filesystem\Filesystem $files
     */
    public function handle(Filesystem $files): void
    {
        $controllerRootNamespace = 'app/Http/Controllers';

        $ignoreFiles = [Controller::class];

        $files = $this->getAllFilesInNamespace($files, $controllerRootNamespace);

        $files = array_filter($files, function (string $fileName) use ($ignoreFiles): bool {
            return !in_array($fileName, $ignoreFiles, true);
        });

        foreach ($files as $file) {
            if (!$this->classHasMethod($file, '__invoke')) {
                $this->markFailed();
            }
        }
    }
}
