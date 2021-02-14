<?php

namespace Tests\Unit\Services;

use App\Services\Characters;
use Cache;
use Tests\TestCase;

class CharactersTest extends TestCase
{
    public function test_will_return_list_of_six_characters_for_homepage(): void
    {
        $characters = $this->app->make(Characters::class);

        $randomCharacters = $characters->randomCharactersForHomepage();

        $this->assertCount(6, $randomCharacters);

        $cachedRandomCharacters = $characters->randomCharactersForHomepage();

        $this->assertSame($randomCharacters, $cachedRandomCharacters);
    }

    public function test_will_return_single_character(): void
    {
        $characters = $this->app->make(Characters::class);

        $character = $characters->getCharacter('1009220');

        $this->assertEquals('Captain America', $character['name']);
    }

    public function test_will_cache_a_single_character_when_cache_is_enabled(): void
    {
        // First call cache is empty and stores to cache, second call cache has value so now accesses cache.
        Cache::shouldReceive('has')
            ->times(2)
            ->with('characters.1009220')
            ->andReturn(false, true);

        Cache::shouldReceive('put')->times(1);

        Cache::shouldReceive('get')->times(1)->andReturn([
            'id' => '1009220',
        ]);

        $characters = $this->app->make(Characters::class);

        $characters->getCharacter('1009220');

        $characters->getCharacter('1009220');
    }

    public function test_will_not_use_cache_for_single_character_if_cache_is_empty(): void
    {
        Cache::shouldReceive('has')
            ->once()
            ->with('characters.1009220')
            ->andReturn(true);

        Cache::shouldReceive('get')->times(1)->andReturn([]);

        Cache::shouldReceive('put')->times(1);

        $characters = $this->app->make(Characters::class);

        $characters->getCharacter('1009220');
    }

    public function test_will_use_cache_for_comic_retrieval_on_characters(): void
    {
        Cache::shouldReceive('has')
            ->times(2)
            ->with('characters.1009220.comics')
            ->andReturn(false, true);

        Cache::shouldReceive('put')->times(1);

        Cache::shouldReceive('get')->times(1);

        $characters = $this->app->make(Characters::class);

        $characters->getComicsForCharacter('1009220');

        $characters->getComicsForCharacter('1009220');
    }
}
