<?php

namespace Tests\Feature\Comics;

use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Tests\TestCase;

class ListAllComicsTest extends TestCase
{
    public function test_comics_will_return_all_comics(): void
    {
        $response = $this->get('/comics');
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
        $response = $this->get('/comics?title=Marvel');
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

    public function test_will_return_comics_starting_with(): void
    {
        $response = $this->get('/comics?startsWith=W');
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
        $response = $this->get('/comics?page=10');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Comics', false)
                ->has('comics.data');
        });
    }

    public function test_will_return_no_comments_when_page_exceeds_limit(): void
    {
        $response = $this->get('/comics?page=1000');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Comics', false)
                ->has('comics.data', 0);
        });
    }
}
