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
        if (!$this->request->get('title')) {
            return null;
        }

        return trim($this->request->get('title'));
    }
}
