<?php

namespace App\Services;

use Carbon\Carbon;
use Illuminate\Cache\CacheManager;
use Marvel\Client;
use Marvel\Comics as MarvelComics;

class Comics extends MarvelComics
{
    private CacheManager $cache;

    public function __construct(Client $client, CacheManager $cache)
    {
        $this->cache = $cache;

        parent::__construct($client);
    }

    public function getComic(string $id): ?array
    {
        $key = 'comics.' . $id;

        if ($this->cache->has($key)) {
            $comic = $this->cache->get($key);
        }

        if (!isset($comic['id'])) {
            $comic = array_except(get_object_vars($this->load($id)), ['cache', 'client']);
            $this->cache->put($key, $comic, Carbon::parse('+24 hours'));
        }

        return $comic;
    }
}
