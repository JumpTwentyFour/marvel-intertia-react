<?php

namespace App\Http\Controllers;

use App\DataTransferObjects\Collections\CharacterCollection;
use App\Http\Resources\Character;
use App\Services\Characters;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(Characters $characterClient): Response
    {
        $characters = CharacterCollection::create($characterClient->randomCharactersForHomepage());

        return Inertia::render('Home', [
            'characters' => $characters->toResource(Character::class),
        ]);
    }
}
