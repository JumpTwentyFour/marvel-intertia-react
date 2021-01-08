<?php

namespace Tests\Feature;

use Illuminate\Http\Response;
use Tests\TestCase;

class ComicTest extends TestCase
{
    public function test_comics_will_return_all_comics(): void
    {
        $this->get('/comics')
            ->assertStatus(Response::HTTP_OK)
            ->assertHasProp('comics')
            ->assertPropCount('comics.data', 100)
            ->assertPropValue('comics.data', function ($comics) {
                $this->assertEquals(
                    [
                        'id',
                        'title',
                        'description',
                        'thumbnail',
                    ],
                    array_keys($comics[0])
                );
            });
    }
}
