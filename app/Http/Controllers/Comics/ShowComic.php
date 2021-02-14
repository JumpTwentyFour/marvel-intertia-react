<?php

namespace App\Http\Controllers\Comics;

use App\DataTransferObjects\Comic as ComicDto;
use App\Http\Controllers\Controller;
use App\Http\Resources\Comic;
use App\Services\Comics;
use Illuminate\Http\Response as HttpResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Spatie\DataTransferObject\DataTransferObjectError;

class ShowComic extends Controller
{
    public function __invoke(string $comicId, Comics $comicClient): InertiaResponse
    {
        try {
            $comic = ComicDto::fromApi((array)$comicClient->getComic($comicId));
        } catch (DataTransferObjectError $e) {
            abort(HttpResponse::HTTP_NOT_FOUND);
        }

        return Inertia::render(
            'Comics/ShowComic',
            [
                'comic' => new Comic($comic),
            ]
        )->withViewData([
            'meta' => $comic->description,
        ]);
    }
}
