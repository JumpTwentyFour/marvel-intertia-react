<?php

namespace App\DataTransferObjects\Collections;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Spatie\DataTransferObject\DataTransferObjectCollection;

class BaseCollection extends DataTransferObjectCollection
{
    public function toResource(string $resourceClass): array
    {
        return [
            'data' => $this->mapIntoResource($resourceClass),
        ];
    }

    public function toPaginatedResource(string $resourceClass, LengthAwarePaginator $paginator): array
    {
        return [
            'data' => $this->mapIntoResource($resourceClass)->toArray(),
            'meta' => [
                'currentPage' => $paginator->currentPage(),
                'lastPage' => $paginator->lastPage(),
                'path' => $paginator->path(),
                'perPage' => $paginator->perPage(),
                'total' => $paginator->total(),
            ],
        ];
    }

    protected function mapIntoResource(string $resourceClass): Collection
    {
        if (!class_exists($resourceClass)) {
            return collect($this);
        }

        return collect($this)->mapInto($resourceClass);
    }
}
