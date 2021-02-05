<?php

namespace App\Http\Resources;

use App\DataTransferObjects\Comic as ComicDto;
use Illuminate\Http\Resources\Json\JsonResource;

class Comic extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    public static $wrap = '';

    public function __construct(ComicDto $comicDto)
    {
        parent::__construct($comicDto);
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $comic = $this->resource->toArray();

        return [
            'id' => $comic['id'],
            'title' => $comic['title'],
            'description' => (string)$comic['description'],
            'thumbnail' => new Thumbnail($comic['thumbnail']),
        ];
    }
}
