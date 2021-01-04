<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Tests\Concerns\UsesInertiaResponses;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use UsesInertiaResponses;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setUpInertiaResponseMacros();
    }
}
