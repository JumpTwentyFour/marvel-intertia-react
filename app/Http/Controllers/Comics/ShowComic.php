<?php

namespace App\Http\Controllers\Comics;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Comics;

class ShowComic extends Controller
{
    public function __invoke(Request $request, Comics $comicsClient): Response
    {
        $comic = $comicsClient->load($request->id);

        if (!isset($comic->id)) {
            abort(404, 'We couldn\'t find that comic');
        }

        return Inertia::render(
            'Comics/ShowComic',
            [
                'comic' => [
                    'id' => $comic->id,
                    'title' => $comic->title,
                    'description' => $comic->description ?? '',
                    'thumbnail' => $comic->thumbnail,
                ],
            ]
        )->withViewData(['meta' => 'A marvel comic.']);
    }
}
