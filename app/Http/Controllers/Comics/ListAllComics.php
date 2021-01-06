<?php

namespace App\Http\Controllers\Comics;

use App\Http\Controllers\Controller;
use App\Http\Resources\Comics as ComicResourceCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Comics;

class ListAllComics extends Controller
{
    public function __invoke(Request $request, Comics $comicsClient): Response
    {
        $comics = $comicsClient->index(1, 100);

        return Inertia::render(
            'Comics',
            [
                'comics' => new ComicResourceCollection($comics->data),
            ]
        )->withViewData(['meta' => 'A list of marvel comics.']);
    }
}
