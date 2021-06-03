<?php

namespace App\Http\Requests\Structure;

use Illuminate\Foundation\Http\FormRequest;

class ContentTypeRequest extends FormRequest
{
    /**
     * Define validation rules to create method for resource creation
     *
     * @return array
     *
     */
    public function createRules(): array
    {
        return [
            'title' => 'required',
            'slug'  => 'required_if:has_listing,1|unique:slugs,keyword,' . $this->slug . ',id,language_code,' . $this->language_code,
        ];
    }

    /**
     * Define validation rules to update method for resource update
     *
     * @return array
     *
     */
    public function updateRules(): array
    {
        return [
            'title' => 'required',
            'slug'  => 'required_if:has_listing,1|unique:slugs,keyword,' . $this->id . ',value,language_code,' . $this->language_code,
        ];
    }

    /**
     * Apply rules by request method
     *
     * @return array
     *
     */
    public function rules()
    {
        if ($this->isMethod('post')) {
            return $this->createRules();
        } elseif ($this->isMethod('put')) {
            return $this->updateRules();
        }
    }
}
