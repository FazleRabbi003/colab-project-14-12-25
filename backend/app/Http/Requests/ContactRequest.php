<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'    => ['required', 'string', 'min:2', 'max:100'],
            'email'   => ['required', 'email:rfc,dns', 'max:255'],
            'company' => ['nullable', 'string', 'max:150'],
            'phone'   => ['nullable', 'string', 'max:30'],
            'service' => ['required', 'string', 'max:100'],
            'budget'  => ['required', 'string', 'max:50'],
            'message' => ['required', 'string', 'min:20', 'max:2000'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required'    => 'Please enter your full name.',
            'email.required'   => 'Please enter your email address.',
            'email.email'      => 'Please enter a valid email address.',
            'service.required' => 'Please select the service you are interested in.',
            'budget.required'  => 'Please select a budget range.',
            'message.required' => 'Please tell us about your goals.',
            'message.min'      => 'Please give us a bit more detail (at least 20 characters).',
        ];
    }
}
