<?php

namespace App\Http\Controllers\Comics;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Marvel\Comics;

class ShowComic extends Controller
{
    public function __invoke(Request $request, Comics $comicsClient): Response
    {
        $comic = $comicsClient->load($request->id);

        /*
            What is the best way of checking if a comic has been returned?

            $comic->count; // Always returns 0 even when there is a result.
            $comic->total; // Always returns 0 even when there is a result.
            $comic->count(); // Always returns an error: "Argument #1 ($value) must be of type Countable|array, string given"
            iterator_count($comic); // Always returns 0 even when there is a result.
            $comic->payload['code'] // Always returns ''
            $comic->payload['error'] // Always returns ''
            $comic->data // Always returns ''
        */

        if (!isset($comic->id)) {
            abort(404, 'We couldn\'t find that comic');
        }

        $comic = [
            'id' => $comic->id,
            'title' => $comic->title,
            'description' => $comic->description ?? '',
            'thumbnail' => $comic->thumbnail,
        ];

        return Inertia::render(
            'ShowComicPage',
            [
                'comic' => $comic,
            ]
        )->withViewData(['meta' => $comic->description ?? 'A marvel comic.']);
    }
}
