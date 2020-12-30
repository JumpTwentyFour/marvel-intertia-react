<?php

namespace App\Http\Controllers\Characters;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Marvel\Characters;

class ListAllCharacters extends Controller
{
    public function __invoke(Request $request, Characters $characterClient): Response
    {
        $characters = $characterClient->index(1, 900);

        return response()->view('characters.list-all', ['characters' => $characters]);
    }
}
