<?php

namespace App\Http\Controllers\Characters;

use App\DataTransferObjects\Collections\CharacterCollection;
use App\Http\Controllers\Controller;
use App\Http\Resources\Character;
use App\Services\Characters;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;
use Inertia\Response;

class ListAllCharacters extends Controller
{
    public function __invoke(Request $request, Characters $characterClient): Response
    {
        $perPage = 100;

        $characters = $characterClient->index(
            $request->get('page'),
            $perPage,
            [
                'nameStartsWith' => $request->get('name'),
            ]
        );

        $paginated = new LengthAwarePaginator($characters->data, $characters->total, $perPage, $request->get('page'));

        $characters = CharacterCollection::create($characters->data)->toPaginatedResource(Character::class, $paginated);

        return Inertia::render(
            'Characters/List',
            [
                'characters' => $characters,
            ]
        )->withViewData([
            'meta' => 'A list of marvel characters.',
        ]);
    }
}
