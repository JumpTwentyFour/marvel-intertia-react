<?php

namespace App\Http\Resources;

use App\DataTransferObjects\Character as CharacterDto;
use Illuminate\Http\Resources\Json\JsonResource;

class Character extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    public static $wrap = '';

    public function __construct(CharacterDto $characterDto)
    {
        parent::__construct($characterDto);
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $character = $this->resource->toArray();

        return [
            'id' => $character['id'],
            'name' => $character['name'],
            'description' => $character['description'],
            'thumbnail' => new Thumbnail($character['thumbnail']),
            'resourceURI' => $character['resourceURI'],
            'comics' => $character['comics'],
            'series' => $character['series'],
            'stories' => $character['stories'],
            'events' => $character['events'],
            'urls' => $character['urls'],
        ];
    }
}
