<?php

namespace App\Domain\Flash\Facades;

use App\Domain\Flash\Flash as FlashClass;
use Illuminate\Support\Facades\Facade;

/**
 * @method FlashClass success(string $message)
 * @method FlashClass warning(string $message)
 * @method FlashClass error(string $message)
 */
class Flash extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return FlashClass::class;
    }
}
