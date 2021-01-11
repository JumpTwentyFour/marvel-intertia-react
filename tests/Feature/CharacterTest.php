<?php

namespace Tests\Feature;

use Illuminate\Http\Response;
use Tests\TestCase;

class CharacterTest extends TestCase
{
    public function test_will_return_characters_by_name(): void
    {
        $this->get('/characters?name=Thor Girl')
            ->assertStatus(Response::HTTP_OK)
            ->assertHasProp('characters')
            ->assertPropCount('characters.data', 1)
            ->assertPropValue('characters.data.0.name', 'Thor Girl');
    }
}
