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
        $searchOptions = $this->gatherSearchOptionsFromRequest($request);

        $comics = $comicsClient->index($request->get('page'), 100, $searchOptions);

        return Inertia::render(
            'Comics',
            [
                'comics' => new ComicResourceCollection($comics->data),
            ]
        )->withViewData(['meta' => 'A list of marvel comics.']);
    }

    protected function gatherSearchOptionsFromRequest(Request $request): array
    {
        $searchOptions = [];

        if ($request->has('title')) {
            $searchOptions['title'] = $request->get('title');
        }

        if ($request->has('titleStartsWith')) {
            $searchOptions['titleStartsWith'] = $request->get('startsWith');
        }

        return $searchOptions;
    }
}
