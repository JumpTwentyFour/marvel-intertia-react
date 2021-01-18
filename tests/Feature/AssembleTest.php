<?php

namespace Tests\Feature;

use ClaudioDekker\Inertia\Assert;
use Illuminate\Http\Response;
use Tests\TestCase;

class AssembleTest extends TestCase
{
    public function test_assemble_page_will_return_the_avenger_characters(): void
    {
        $response = $this->get('/assemble');
        $response->assertStatus(Response::HTTP_OK);
        $response->assertInertia(fn (Assert $inertia) => $inertia
            ->component('Assemble', false)
            ->has('characters.data', 7)
            ->has('characters.data', fn (Assert $inertia) => $inertia
                ->where('0.name', 'Captain America')
                ->where('1.name', 'Iron Man')
                ->where('1.name', 'Iron Man')
                ->where('2.name', 'Thor')
                ->where('3.name', 'Hulk')
                ->where('4.name', 'Wasp')
                ->where('5.name', 'Hank Pym')
                ->where('6.name', 'Black Widow')
                ->etc()
            )
            ->has('errors')
        );
    }
}
