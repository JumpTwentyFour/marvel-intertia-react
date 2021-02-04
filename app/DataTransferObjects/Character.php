<?php

namespace App\DataTransferObjects;

use Spatie\DataTransferObject\FlexibleDataTransferObject;

class Character extends FlexibleDataTransferObject
{
    public int $id;

    public string $name;

    public string $description;

    public Thumbnail $thumbnail;

    public string $resourceURI;

    public array $comics = [];

    public array $series = [];

    public array $stories = [];

    public array $events = [];

    public array $urls = [];

    public static function fromApi(array $character): self
    {
        return new self($character);
    }
}
