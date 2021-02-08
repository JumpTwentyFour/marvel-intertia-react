<?php

namespace Tests\Feature\Comics;

use App\Services\Comics;
use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Mockery\MockInterface;
use Tests\TestCase;

class ShowComicTest extends TestCase
{
    public function test_will_return_the_amazing_spider_man_number_one(): void
    {
        $response = $this->get('/comics/6482');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Comics/ShowComic', false)
                ->has('comic', function (Assert $page) {
                    $page->where('title', 'The Amazing Spider-Man (1963) #1')
                        ->has('description')
                        ->has('thumbnail')
                        ->etc();
                })
                ->has('errors');
        });
    }

    public function test_will_return_404_for_non_existing_comic(): void
    {
        $response = $this->get('/comics/1');
        $response->assertStatus(Response::HTTP_NOT_FOUND);
    }
}
