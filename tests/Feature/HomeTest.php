<?php

namespace Tests\Feature;

use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Tests\TestCase;

class HomeTest extends TestCase
{
    public function test_homepage_will_return_six_random_characters(): void
    {
        $response = $this->get('/');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(fn (Assert $inertia) => $inertia
            ->component('Home', false)
            ->has('characters.data', 6, fn (Assert $inertia) => $inertia
                ->hasAll([
                    'id',
                    'name',
                    'description',
                    'thumbnail',
                    'thumbnail.path',
                    'thumbnail.extension',
                    'resourceURI',
                    'comics',
                    'comics',
                    'comics.available',
                    'comics.collectionURI',
                    'comics.items',
                    'comics.returned',
                    'series',
                    'series.available',
                    'series.collectionURI',
                    'series.items',
                    'series.returned',
                    'stories',
                    'stories.available',
                    'stories.collectionURI',
                    'stories.items',
                    'stories.returned',
                    'events',
                    'events.available',
                    'events.collectionURI',
                    'events.items',
                    'events.returned',
                    'urls',
                    'urls.0.type',
                    'urls.0.url',
                ])
            )
        );
    }
}
