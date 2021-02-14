<?php

namespace App\Services;

use Carbon\Carbon;
use Illuminate\Cache\CacheManager;
use Marvel\Characters as MarvelCharacters;
use Marvel\Client;

class Characters extends MarvelCharacters
{
    private CacheManager $cache;

    public function __construct(Client $client, CacheManager $cache)
    {
        $this->cache = $cache;

        parent::__construct($client);
    }

    public function getCharacter(string $id): ?array
    {
        $key = 'characters.' . $id;

        if ($this->cache->has($key)) {
            $character = $this->cache->get($key);
        }

        if (!isset($character['id'])) {
            $character = array_except(get_object_vars($this->load($id)), ['cache', 'client']);
            $this->cache->put($key, $character, Carbon::parse('+24 hours'));
        }

        return $character;
    }

    public function getComicsForCharacter(string $id, int $limit = 21): array
    {
        $key = 'characters.' . $id . '.comics';

        if ($this->cache->has($key)) {
            $comics = $this->cache->get($key);
        } else {
            $comics = $this->client->get('/v1/public/characters/' . $id . '/comics', [
                'limit' => $limit,
            ]);
            $this->cache->put($key, $comics, Carbon::parse('+24 hours'));
        }

        if (!isset($comics['data'])) {
            return [];
        }

        return $comics['data'];
    }

    public function randomCharactersForHomepage(int $limit = 6): array
    {
        $key = 'home.characters';

        $maxSupportedPage = 248;

        if ($this->cache->has($key)) {
            $characters = $this->cache->get($key);
        } else {
            $characters = (array)($this->index(random_int(1, $maxSupportedPage), $limit)->data ?? []);

            $this->cache->put($key, $characters, Carbon::parse('+24 hours'));
        }

        return $characters;
    }
}
