<?php

namespace Tests\Feature;

use Illuminate\Http\Response;
use Tests\TestCase;

class AssembleTest extends TestCase
{
    public function test_assemble_page_will_return_the_avenger_characters(): void
    {
        $response = $this->get('/assemble');
        $response->assertInertia();

        $response->assertStatus(Response::HTTP_OK);
        $response->assertHasProp('characters');
        $response->assertPropCount('characters.data', 7);

        $response->assertPropValue('characters.data.0.name', 'Captain America');
        $response->assertPropValue('characters.data.1.name', 'Iron Man');
        $response->assertPropValue('characters.data.2.name', 'Thor');
        $response->assertPropValue('characters.data.3.name', 'Hulk');
        $response->assertPropValue('characters.data.4.name', 'Wasp');
        $response->assertPropValue('characters.data.5.name', 'Hank Pym');
        $response->assertPropValue('characters.data.6.name', 'Black Widow');
    }
}
