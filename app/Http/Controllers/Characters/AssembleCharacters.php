<?php

namespace App\Http\Controllers\Characters;

use App\Http\Controllers\Controller;
use App\Http\Resources\Characters as CharactersResourceCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Characters;

class AssembleCharacters extends Controller
{
    public function __invoke(Request $request, Characters $characterClient): Response
    {
        $characters = $characterClient->assemble();

        return Inertia::render(
            'Assemble',
            [
                'characters' => new CharactersResourceCollection($characters),
            ]
        )->withViewData(['meta' => 'Avengers, assemble!']);
    }
}
