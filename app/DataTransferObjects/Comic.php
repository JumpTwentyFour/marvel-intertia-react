<?php

namespace App\DataTransferObjects;

use Spatie\DataTransferObject\FlexibleDataTransferObject;

class Comic extends FlexibleDataTransferObject
{
    public int $id;

    public string $title;

    public ?string $description;

    public Thumbnail $thumbnail;

    public static function fromApi(array $character): self
    {
        return new self($character);
    }
}
