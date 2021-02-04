<?php

namespace App\DataTransferObjects\Collections;

use App\DataTransferObjects\Comic;

final class ComicCollection extends BaseCollection
{
    public static function create(array $data): ComicCollection
    {
        return new static(Comic::arrayOf($data));
    }
}
