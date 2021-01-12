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
