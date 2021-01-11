<?php

namespace App\Http\Controllers;

use App\Http\Resources\Characters as CharactersResourceCollection;
use App\Services\Characters;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(Characters $characterClient): Response
    {
        $characters = $characterClient->randomCharactersForHomepage();

        return Inertia::render('Home', [
            'characters' => new CharactersResourceCollection($characters),
        ]);
    }
}
