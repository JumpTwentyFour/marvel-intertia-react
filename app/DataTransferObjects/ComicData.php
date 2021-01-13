<?php

namespace App\DataTransferObjects;

use Marvel\Comics as MarvelComicsApi;
use Spatie\DataTransferObject\DataTransferObject;

class ComicData extends DataTransferObject
{
    public int $id;
    public string $title;
    public string $description;
    public ThumbnailData $thumbnail;

    public static function parseSingleResultFromMarvelComicsApi(MarvelComicsApi $api): ?self
    {
        if (!isset($api->id)) {
            // Comic was not found from API request
            return null;
        }

        $thumbnail = new ThumbnailData($api->thumbnail); /** @phpstan-ignore-line */

        return new self([
            'id' => $api->id,
            'title' => $api->title, /** @phpstan-ignore-line */
            'description' => $api->description ?? '', /** @phpstan-ignore-line */
            'thumbnail' => $thumbnail,
        ]);
    }
}
