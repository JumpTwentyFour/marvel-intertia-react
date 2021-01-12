<?php

namespace Tests\Unit\Services;

use App\Services\Characters;
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
}
