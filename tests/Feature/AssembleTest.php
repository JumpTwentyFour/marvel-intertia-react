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
    }
}
