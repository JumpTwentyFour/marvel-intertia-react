<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class Thumbnail extends JsonResource
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
            'path' => $this->determinePath($this['path'] ?? ''),
            'extension' => $this['extension'] ?? '',
        ];
    }

    private function determinePath(string $path): string
    {
        if (Str::contains($path, 'image_not_available')) {
            return asset('images/marvel-placeholder');
        }

        return str_replace('http:', 'https:', $path . '/portrait_uncanny');
    }
}
