<?php

namespace App\Http\Controllers\Characters;

use App\Http\Controllers\Controller;
use App\Http\Resources\Characters as CharactersResourceCollection;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Characters;

class ListAllCharacters extends Controller
{
    public function __invoke(Request $request, Characters $characterClient): Response
    {
        $perPage = 100;

        $characters = $characterClient->index(
            $request->get('page'),
            $perPage,
            ['nameStartsWith' => $request->get('name')]
        );

        return Inertia::render(
            'Characters',
            [
                'characters' => new CharactersResourceCollection(
                    new LengthAwarePaginator(
                        $characters->data,
                        $characters->total,
                        $perPage,
                        $request->get('page')
                    )
                ),
            ]
        )->withViewData(['meta' => 'A list of marvel characters.']);
    }
}
