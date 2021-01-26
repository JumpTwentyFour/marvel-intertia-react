<?php

namespace Tests\Feature;

use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    /**
     * @test
     *
     * @param string $route
     * @param string $method
     *
     * @dataProvider routesUnauthenticatedUserCannotAccessDataProvider
     */
    public function user_cannot_access_route_when_unauthenticated(string $route, string $method): void
    {
        $default_route = '/login';

        $response = $this->{$method}($route);

        $response->assertRedirect($default_route);

        $response->assertSessionHasNoErrors();
    }

    public function routesUnauthenticatedUserCannotAccessDataProvider(): array
    {
        return [
            ['/assemble', 'get'],
            ['/characters', 'get'],
            ['/comics', 'get'],
        ];
    }
}
