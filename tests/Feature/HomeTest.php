<?php

namespace Tests\Feature;

use Illuminate\Http\Response;
use Tests\TestCase;

class HomeTest extends TestCase
{
    public function test_homepage_will_return_six_random_characters(): void
    {
        $this->get('/')
            ->assertStatus(Response::HTTP_OK)
            ->assertHasProp('characters')
            ->assertPropCount('characters.data', 6)
            ->assertPropValue('characters.data', function ($characters) {
                $this->assertEquals(
                    [
                        'id',
                        'name',
                        'description',
                        'thumbnail',
                        'resourceURI',
                        'comics',
                        'series',
                        'stories',
                        'events',
                        'urls',
                    ],
                    array_keys($characters[0])
                );

                $this->assertEquals(['path', 'extension'], array_keys($characters[0]['thumbnail']));

                $this->assertEquals(
                    ['available', 'collectionURI', 'items', 'returned'],
                    array_keys($characters[0]['comics'])
                );

                $this->assertEquals(
                    ['available', 'collectionURI', 'items', 'returned'],
                    array_keys($characters[0]['series'])
                );

                $this->assertEquals(
                    ['available', 'collectionURI', 'items', 'returned'],
                    array_keys($characters[0]['stories'])
                );

                $this->assertEquals(
                    ['available', 'collectionURI', 'items', 'returned'],
                    array_keys($characters[0]['events'])
                );

                $this->assertEquals(['type', 'url'], array_keys($characters[0]['urls'][0]));
            });
    }
}
