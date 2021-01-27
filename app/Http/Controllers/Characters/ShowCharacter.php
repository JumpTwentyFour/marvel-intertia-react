<?php

namespace App\Http\Controllers\Characters;

use App\Http\Controllers\Controller;
use App\Http\Resources\Character;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Characters;

class ShowCharacter extends Controller
{
    public function __invoke(string $characterUuid, Characters $characterClient): Response
    {
        $character = get_object_vars($characterClient->load($characterUuid));

        if (empty($character['id'])) {
            abort(404);
        }

        return Inertia::render(
            'Characters/Show',
            [
                'character' => new Character($character)
            ]
        )->withViewData(['meta' => $character['description']]);
    }
}
