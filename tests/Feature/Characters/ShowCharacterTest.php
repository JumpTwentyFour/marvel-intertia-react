<?php

namespace Tests\Feature\Characters;

use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Tests\TestCase;

class ShowCharacterTest extends TestCase
{
    public function test_will_return_captain_america(): void
    {
        $response = $this->get('/characters/1009220');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Characters/Show', false)
                ->has('character', function (Assert $page) {
                    $page->where('name', 'Captain America')
                        ->has('description')
                        ->has('thumbnail')
                        ->has('resourceURI')
                        ->has('comics')
                        ->has('series')
                        ->has('stories')
                        ->has('events')
                        ->has('urls')
                        ->etc();
                })
                ->has('errors');
        });
    }

    public function test_will_return_404_for_non_existing_character(): void
    {
        $response = $this->get('/characters/100922000000000');
        $response->assertStatus(Response::HTTP_NOT_FOUND);
    }
}
