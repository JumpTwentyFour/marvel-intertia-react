<?php

namespace App\DataTransferObjects\Collections;

use App\DataTransferObjects\Character;

final class CharacterCollection extends BaseCollection
{
    public static function create(array $data): CharacterCollection
    {
        return new static(Character::arrayOf($data));
    }
}
