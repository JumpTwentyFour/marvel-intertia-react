<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Comic extends JsonResource
{
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
            'title' => $this['title'],
            'description' => (string)$this['description'],
            'thumbnail' => new Thumbnail($this['thumbnail']),
        ];
    }
}
