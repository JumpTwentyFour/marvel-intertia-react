<?php

namespace App\Http\Controllers\Characters;

use App\Http\Controllers\Controller;
use App\Http\Resources\Characters as CharactersResourceCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Characters;

class ListAllCharacters extends Controller
{
    public function __invoke(Request $request, Characters $characterClient): Response
    {
        $characters = $characterClient->index(1, 900);
        
        return Inertia::render(
            'Characters',
            [
                'characters' => new CharactersResourceCollection($characters->data),
            ]
        )->withViewData(['meta' => 'A list of marvel characters.']);
    }
}
