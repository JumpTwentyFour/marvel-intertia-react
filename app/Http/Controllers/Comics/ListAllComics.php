<?php

namespace App\Http\Controllers\Comics;

use App\Http\Controllers\Controller;
use App\Http\Requests\Comics\ListAllComicsRequest;
use App\Http\Resources\Comics as ComicResourceCollection;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Comics;

class ListAllComics extends Controller
{
    public function __invoke(ListAllComicsRequest $request, Comics $comicsClient): Response
    {
        $comics = $comicsClient->index($request->page(), 100, ['title' => $request->title()]);

        return Inertia::render(
            'Comics',
            [
                'comics' => new ComicResourceCollection($comics->data),
            ]
        )->withViewData(['meta' => 'A list of marvel comics.']);
    }
}
