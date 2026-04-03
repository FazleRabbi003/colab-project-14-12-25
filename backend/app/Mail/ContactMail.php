<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public readonly array $formData
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Enquiry from GrowthFlux.co.uk — ' . $this->formData['name'],
            replyTo: [$this->formData['email']],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact',
            with: ['data' => $this->formData],
        );
    }
}
