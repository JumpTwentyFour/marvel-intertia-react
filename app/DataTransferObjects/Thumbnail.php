<?php

namespace App\DataTransferObjects;

use Spatie\DataTransferObject\FlexibleDataTransferObject;

class Thumbnail extends FlexibleDataTransferObject
{
    public string $extension;

    public string $path;
}
