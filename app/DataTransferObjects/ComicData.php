<?php

namespace App\DataTransferObjects;

use Marvel\Comics as MarvelComicsResource;
use Spatie\DataTransferObject\DataTransferObject;

class ComicData extends DataTransferObject
{
    public int $id;
    public string $title;
    public string $description;
    public ThumbnailData $thumbnail;

    public static function fromMarvelComicsResource(MarvelComicsResource $resource): ?self
    {
        if (!isset($resource->id)) {
            // Comic was not found from API request
            return null;
        }

        $thumbnail = new ThumbnailData($resource->thumbnail); /** @phpstan-ignore-line */

        return new self([
            'id' => $resource->id,
            'title' => $resource->title, /** @phpstan-ignore-line */
            'description' => $resource->description ?? '', /** @phpstan-ignore-line */
            'thumbnail' => $thumbnail,
        ]);
    }
}
