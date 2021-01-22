<?php

namespace Tests\Unit\Resources;

use App\Http\Resources\Thumbnail;
use Illuminate\Http\Request;
use Tests\TestCase;

class ThumbnailTest extends TestCase
{
    public function test_will_return_placeholder_image_when_no_image_exists(): void
    {
        $thumbnail = new Thumbnail([
            'path' => 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
            'extension' => '.jpg',
        ]);

        $this->assertEquals(
            [
                'path' => config('app.url') . '/images/marvel-placeholder',
                'extension' => '.jpg',
            ],
            $thumbnail->toArray(new Request()),
        );
    }

    public function test_correct_image_size_is_appended_to_path(): void
    {
        $thumbnail = new Thumbnail([
            'path' => 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/tester',
            'extension' => '.jpg',
        ]);

        $this->assertEquals(
            [
                'path' => 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/tester/portrait_uncanny',
                'extension' => '.jpg',
            ],
            $thumbnail->toArray(new Request()),
        );
    }

    public function test_thumnbnail_path_is_forced_to_https(): void
    {
        $thumbnail = new Thumbnail([
            'path' => 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/tester',
            'extension' => '.jpg',
        ]);

        $this->assertEquals(
            [
                'path' => 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/tester/portrait_uncanny',
                'extension' => '.jpg',
            ],
            $thumbnail->toArray(new Request()),
        );
    }
}
