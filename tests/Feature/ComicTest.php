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
                        'digitalId',
                        'title',
                        'issueNumber',
                        'variantDescription',
                        'description',
                        'modified',
                        'isbn',
                        'upc',
                        'diamondCode',
                        'ean',
                        'issn',
                        'format',
                        'pageCount',
                        'textObjects',
                        'resourceURI',
                        'urls',
                        'series',
                        'variants',
                        'collections',
                        'collectedIssues',
                        'dates',
                        'prices',
                        'thumbnail',
                        'images',
                        'creators',
                        'characters',
                        'stories',
                        'events',
                    ],
                    array_keys($comics[0])
                );

                $this->assertEquals(['type', 'url'], array_keys($comics[0]['urls'][0]));

                $this->assertEquals(['resourceURI', 'name'], array_keys($comics[0]['series']));

                $this->assertEquals(['resourceURI', 'name'], array_keys($comics[0]['variants'][0]));

                $this->assertEquals(['type', 'date'], array_keys($comics[0]['dates'][0]));

                $this->assertEquals(['type', 'price'], array_keys($comics[0]['prices'][0]));

                $this->assertEquals(['path', 'extension'], array_keys($comics[0]['thumbnail']));

                $this->assertEquals(
                    ['available', 'collectionURI', 'items', 'returned'],
                    array_keys($comics[0]['creators'])
                );

                $this->assertEquals(
                    ['available', 'collectionURI', 'items', 'returned'],
                    array_keys($comics[0]['characters'])
                );

                $this->assertEquals(
                    ['available', 'collectionURI', 'items', 'returned'],
                    array_keys($comics[0]['stories'])
                );

                $this->assertEquals(
                    ['available', 'collectionURI', 'items', 'returned'],
                    array_keys($comics[0]['events'])
                );
            });
    }

    public function test_will_return_comics_by_title(): void
    {
        $this->get('/comics?title=Marvel')
            ->assertStatus(Response::HTTP_OK)
            ->assertHasProp('comics')
            ->assertPropValue('comics.data', function ($comics) {
                foreach($comics as $comic) {
                    $this->assertStringContainsString('Marvel', $comic['title']);
                }
            });
    }

    public function test_can_search_comics_by_page(): void
    {
        $this->get('/comics?page=10')
            ->assertStatus(Response::HTTP_OK)
            ->assertHasProp('comics')
            ->assertPropValue('comics.data', function ($comics) {
                $this->assertNotEmpty($comics);
            });
    }

    public function test_will_return_no_comments_when_page_exceeds_limit(): void
    {
        $this->get('/comics?page=1000')
            ->assertStatus(Response::HTTP_OK)
            ->assertHasProp('comics')
            ->assertPropValue('comics.data', function ($comics) {
                $this->assertEmpty($comics);
            });
    }
}
