<?php

namespace Tests\Feature;

use App\Models\User;
use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Tests\TestCase;

class ComicTest extends TestCase
{
    public function test_comics_will_return_all_comics(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/comics');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Comics', false)
                ->has('comics.data', 100, function (Assert $page) {
                    $page->hasAll(['id', 'title', 'description', 'thumbnail']);
                })
                ->has('errors');
        });
    }

    public function test_will_return_comics_by_title(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/comics?title=Marvel');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Comics', false)
                ->has('comics.data.0', function (Assert $page) {
                    $page->has('title')
                        ->etc();
                })
                ->has('errors');
        });
    }

    public function test_can_search_comics_by_page(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/comics?page=10');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Comics', false)
                ->has('comics.data');
        });
    }

    public function test_will_return_no_comments_when_page_exceeds_limit(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/comics?page=1000');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Comics', false)
                ->has('comics.data', 0);
        });
    }
}
