<?php

namespace Tests\Feature;

use App\Models\User;
use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Tests\TestCase;

class CharacterTest extends TestCase
{
    public function test_will_return_characters_by_name(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/characters?name=Thor Girl');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(function (Assert $page) {
            $page->component('Characters', false)
                ->has('characters.data', 1)
                ->has('characters.data', function (Assert $page) {
                    $page->where('0.name', 'Thor Girl')
                        ->etc();
                })
                ->has('errors');
        });
    }
}
