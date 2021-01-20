<?php

namespace App\Enlightn\Analyzers\Concerns;
use Illuminate\Filesystem\Filesystem;
use ReflectionClass;
use ReflectionException;
use SplFileInfo;

trait AnalyzesFiles
{
    public function getAllFilesInNamespace(Filesystem $files, string $namespace): array
    {
        return array_map(function (SplFileInfo $fileInfo): string {
            return str_replace(
                ['app', '/'],
                ['App', '\\'],
                $fileInfo->getPath() . '/' . $fileInfo->getFilenameWithoutExtension()
            );
        }, $files->allFiles($namespace));
    }

    public function classHasMethod(string $className, string $method): bool
    {
        try {
            $mirror = new ReflectionClass($className);
            return $mirror->hasMethod($method);
        } catch (ReflectionException $e) {
            return false;
        }
    }
}
