<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;

class ContactController extends Controller
{
    public function store(ContactRequest $request): JsonResponse
    {
        $ip  = $request->ip();
        $key = 'contact:' . $ip;

        // Rate limit: 3 submissions per IP per 10 minutes
        if (RateLimiter::tooManyAttempts($key, 3)) {
            $seconds = RateLimiter::availableIn($key);

            return response()->json([
                'success' => false,
                'message' => "Too many requests. Please try again in {$seconds} seconds.",
            ], 429);
        }

        RateLimiter::hit($key, 600);

        $data = $request->validated();

        try {
            $recipient = config('mail.contact_recipient', env('CONTACT_RECIPIENT', 'hello@growthflux.co.uk'));
            Mail::to($recipient)->send(new ContactMail($data));

            Log::info('Contact form submitted', [
                'name'    => $data['name'],
                'email'   => $data['email'],
                'service' => $data['service'],
                'ip'      => $ip,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Thank you! We will be in touch within 24 hours.',
            ]);
        } catch (\Exception $e) {
            Log::error('Contact form mail failed', [
                'error' => $e->getMessage(),
                'email' => $data['email'],
            ]);

            return response()->json([
                'success' => false,
                'message' => 'We could not send your message right now. Please email us directly at hello@growthflux.co.uk.',
            ], 500);
        }
    }
}
