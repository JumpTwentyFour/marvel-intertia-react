<?php

namespace App\Http\Controllers\Characters;

use App\DataTransferObjects\Collections\CharacterCollection;
use App\Http\Controllers\Controller;
use App\Http\Resources\Character;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Characters;

class AssembleCharacters extends Controller
{
    public function __invoke(Characters $characterClient): Response
    {
        $characters = CharacterCollection::create($characterClient->assemble());

        return Inertia::render(
            'Assemble',
            [
                'characters' => $characters->toResource(Character::class),
            ]
        )->withViewData([
            'meta' => 'Avengers, assemble!',
        ]);
    }
}
