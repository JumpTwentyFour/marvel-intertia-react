<?php

namespace App\Http\Controllers\Characters;

use App\Http\Controllers\Controller;
use App\Http\Resources\Character;
use App\Http\Resources\Comics;
use App\Services\Characters;
use Illuminate\Http\Response as LaravelResponse;
use Inertia\Inertia;
use Inertia\Response;

class ShowCharacter extends Controller
{
    public function __invoke(string $characterId, Characters $characterClient): Response
    {
        $character = $characterClient->getCharacter($characterId);

        if (!isset($character['id'])) {
            abort(LaravelResponse::HTTP_NOT_FOUND);
        }

        $comics = $characterClient->getComicsForCharacter($characterId);

        return Inertia::render(
            'Characters/Show',
            [
                'character' => new Character($character),
                'comics' => new Comics($comics['results'] ?? []),
            ]
        )->withViewData(['meta' => $character['description']]);
    }
}
