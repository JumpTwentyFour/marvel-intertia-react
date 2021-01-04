<?php

namespace App\Http\Controllers;

use App\Http\Resources\Characters as CharactersResourceCollection;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Characters;

class HomeController extends Controller
{
    public function __invoke(Characters $characterClient): Response
    {
        $maxSupportedPage = 248;

        $characters = $characterClient->index(random_int(1, $maxSupportedPage), 6);

        return Inertia::render('Home', [
            'characters' => new CharactersResourceCollection($characters->data),
        ]);
    }
}
