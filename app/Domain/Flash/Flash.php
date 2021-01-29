<?php

namespace App\Domain\Flash;

class Flash
{
    public string $key = 'inertia';

    public string $type;

    public string $message;

    public function success(string $message): self
    {
        $this->type = 'success';
        $this->message = $message;

        return $this->flash();
    }

    public function warning(string $message): self
    {
        $this->type = 'warning';
        $this->message = $message;

        return $this->flash();
    }

    public function error(string $message): self
    {
        $this->type = 'error';
        $this->message = $message;

        return $this->flash();
    }

    protected function flash(): self
    {
        session()->flash($this->key, [
            'type' => $this->type,
            'message' => $this->message,
        ]);

        return $this;
    }
}
