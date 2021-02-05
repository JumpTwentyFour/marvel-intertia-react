<?php

namespace App\Http\Controllers\Comics;

use App\DataTransferObjects\Collections\ComicCollection;
use App\Http\Controllers\Controller;
use App\Http\Resources\Comic;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Comics;

class ListAllComics extends Controller
{
    public function __invoke(Request $request, Comics $comicsClient): Response
    {
        $searchOptions = $this->gatherSearchOptionsFromRequest($request);

        $comics = $comicsClient->index($request->get('page'), 100, $searchOptions);

        $paginated = new LengthAwarePaginator($comics->data, $comics->total, 100, $request->get('page'));

        return Inertia::render(
            'Comics',
            [
                'comics' => ComicCollection::create($comics->data)->toPaginatedResource(Comic::class, $paginated),
            ]
        )->withViewData(['meta' => 'A list of marvel comics.']);
    }

    protected function gatherSearchOptionsFromRequest(Request $request): array
    {
        $searchOptions = [];

        if ($request->has('title')) {
            $searchOptions['title'] = $request->get('title');
        }

        if ($request->has('startsWith')) {
            $searchOptions['titleStartsWith'] = $request->get('startsWith');
        }

        return $searchOptions;
    }
}
