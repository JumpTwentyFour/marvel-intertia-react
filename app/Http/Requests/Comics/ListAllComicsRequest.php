<?php

namespace App\Http\Requests\Comics;

use Illuminate\Foundation\Http\FormRequest;

class ListAllComicsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [];
    }

    public function title()
    {
        $title = $this->request->get('title');

        if (!$title) {
            return null;
        }

        return trim($title);
    }

    public function page(): int
    {
        $page = trim($this->request->get('page'));

        if (!$page && !is_numeric($page)) {
            return 1;
        }

        return (int)$this->request->get('page');
    }
}
