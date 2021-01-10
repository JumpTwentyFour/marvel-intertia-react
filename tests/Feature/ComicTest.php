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

    public function test_will_return_comics_by_title(): void
    {
        $this->get('/comics?title=Marvel')
            ->assertStatus(Response::HTTP_OK)
            ->assertHasProp('comics')
            ->assertPropValue('comics.data', function ($comics) {
                foreach ($comics as $comic) {
                    $this->assertStringContainsString('Marvel', $comic['title']);
                }
            });
    }
}
