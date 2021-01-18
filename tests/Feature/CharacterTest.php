<?php

namespace Tests\Feature;

use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Tests\TestCase;

class CharacterTest extends TestCase
{
    public function test_will_return_characters_by_name(): void
    {
        $response = $this->get('/characters?name=Thor Girl');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(fn (Assert $inertia) => $inertia
            ->component('Characters', false)
            ->has('characters.data', 1)
            ->has('characters.data', fn (Assert $inertia) => $inertia
                ->where('0.name', 'Thor Girl')
                ->etc()
            )
            ->has('errors')
        );
    }
}
