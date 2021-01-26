<?php

namespace Tests\Feature;

use App\Models\User;
use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Tests\TestCase;

class HomeTest extends TestCase
{
    public function test_homepage_will_return_six_random_characters(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Home', false)
                ->has('characters.data', 6, function (Assert $page) {
                    $page->hasAll([
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
                    ]);
                });
        });
    }
}
