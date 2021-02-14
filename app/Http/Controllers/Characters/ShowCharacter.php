<?php

namespace App\Http\Controllers\Characters;

use App\DataTransferObjects\Character as CharacterDto;
use App\DataTransferObjects\Collections\ComicCollection;
use App\Http\Controllers\Controller;
use App\Http\Resources\Character;
use App\Http\Resources\Comic;
use App\Services\Characters;
use Illuminate\Http\Response as LaravelResponse;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\DataTransferObject\DataTransferObjectError;

class ShowCharacter extends Controller
{
    public function __invoke(string $characterId, Characters $characterClient): Response
    {
        try {
            $character = CharacterDto::fromApi((array)$characterClient->getCharacter($characterId));
        } catch (DataTransferObjectError $e) {
            abort(LaravelResponse::HTTP_NOT_FOUND);
        }

        $comics = $characterClient->getComicsForCharacter($characterId);

        return Inertia::render(
            'Characters/Show',
            [
                'character' => new Character($character),
                'comics' => ComicCollection::create($comics['results'] ?? [])->toResource(Comic::class),
            ]
        )->withViewData([
            'meta' => $character->description,
        ]);
    }
}
