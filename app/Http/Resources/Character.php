<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Character extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    public static $wrap = '';

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this['id'],
            'name' => $this['name'],
            'description' => $this['description'],
            'thumbnail' => new Thumbnail($this['thumbnail']),
            'resourceURI' => $this['resourceURI'],
            'comics' => $this['comics'],
            'series' => $this['series'],
            'stories' => $this['stories'],
            'events' => $this['events'],
            'urls' => $this['urls'],
        ];
    }
}
