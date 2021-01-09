<?php

namespace App\DataTransferObjects;

use Spatie\DataTransferObject\DataTransferObject;

class ThumbnailData extends DataTransferObject
{
    public string $path;
    public string $extension;
}
