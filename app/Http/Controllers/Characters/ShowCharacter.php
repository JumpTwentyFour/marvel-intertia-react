<?php

namespace App\Http\Controllers\Characters;

use App\Http\Controllers\Controller;
use App\Http\Resources\Character;
use App\Services\Characters;
use Inertia\Inertia;
use Inertia\Response;

class ShowCharacter extends Controller
{
    public function __invoke(string $characterId, Characters $characterClient): Response
    {
        $character = $characterClient->getCharacter($characterId);

        if (!isset($character['id'])) {
            abort(404);
        }

        return Inertia::render(
            'Characters/Show',
            [
                'character' => new Character($character),
            ]
        )->withViewData(['meta' => $character['description']]);
    }
}
