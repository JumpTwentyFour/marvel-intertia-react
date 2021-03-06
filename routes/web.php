<?php

use App\Http\Controllers\Characters\AssembleCharacters;
use App\Http\Controllers\Characters\ListAllCharacters;
use App\Http\Controllers\Characters\ShowCharacter;
use App\Http\Controllers\Comics\ListAllComics;
use App\Http\Controllers\Comics\ShowComic;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, '__invoke'])->name('home');

Route::get('characters', [ListAllCharacters::class, '__invoke'])
    ->name('characters.list-all');

Route::get('characters/{character}', [ShowCharacter::class, '__invoke'])
    ->name('characters.view');

Route::get('assemble', [AssembleCharacters::class, '__invoke'])
    ->name('characters.assemble');

Route::get('comics', [ListAllComics::class, '__invoke'])
    ->name('comics.list-all');

Route::get('comics/{id}', [ShowComic::class, '__invoke'])
    ->name('comics.show');
