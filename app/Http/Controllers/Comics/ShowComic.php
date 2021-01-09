<?php

namespace App\Http\Controllers\Comics;

use App\DataTransferObjects\ComicData;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Comics;

class ShowComic extends Controller
{
    public function __invoke(Request $request, Comics $comicsClient): Response
    {
        $resource = $comicsClient->load($request->id);
        $comic = ComicData::fromMarvelComicsResource($resource);

        if ($comic === null) {
            abort(404, 'We couldn\'t find that comic');
        }

        return Inertia::render(
            'Comics/ShowComic',
            [
                'comic' => $comic,
            ]
        )->withViewData(['meta' => 'A marvel comic.']);
    }
}
