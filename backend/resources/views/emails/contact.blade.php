<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — GrowthFlux</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f4f5; color: #111; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: #0A0A0A; padding: 32px; text-align: center; }
    .header-logo { font-size: 22px; font-weight: 700; color: #fff; letter-spacing: -0.5px; }
    .header-logo span { color: #C9A84C; }
    .header-tagline { font-size: 12px; color: #888; margin-top: 4px; text-transform: uppercase; letter-spacing: 2px; }
    .body { padding: 40px 32px; }
    .title { font-size: 20px; font-weight: 600; color: #0A0A0A; margin-bottom: 8px; }
    .subtitle { font-size: 14px; color: #666; margin-bottom: 32px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #999; margin-bottom: 4px; }
    .value { font-size: 15px; color: #111; background: #f8f8f8; padding: 10px 14px; border-radius: 8px; border-left: 3px solid #C9A84C; }
    .message-value { white-space: pre-wrap; line-height: 1.6; }
    .divider { height: 1px; background: #eee; margin: 28px 0; }
    .footer { background: #f9f9f9; padding: 24px 32px; text-align: center; font-size: 12px; color: #999; }
    .footer a { color: #C9A84C; text-decoration: none; }
    .badge { display: inline-block; background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3); color: #A07830; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.5px; margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="header-logo">Growth<span>Flux</span></div>
      <div class="header-tagline">Performance Marketing Agency</div>
    </div>
    <div class="body">
      <div class="badge">New Enquiry</div>
      <div class="title">You have a new contact form submission</div>
      <div class="subtitle">Received via growthflux.co.uk · {{ now()->format('j F Y, H:i') }} GMT</div>

      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">{{ $data['name'] }}</div>
      </div>

      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a></div>
      </div>

      @if (!empty($data['company']))
      <div class="field">
        <div class="label">Company</div>
        <div class="value">{{ $data['company'] }}</div>
      </div>
      @endif

      @if (!empty($data['phone']))
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:{{ $data['phone'] }}">{{ $data['phone'] }}</a></div>
      </div>
      @endif

      <div class="field">
        <div class="label">Service Interested In</div>
        <div class="value">{{ $data['service'] }}</div>
      </div>

      <div class="field">
        <div class="label">Monthly Budget</div>
        <div class="value">{{ $data['budget'] }}</div>
      </div>

      <div class="divider"></div>

      <div class="field">
        <div class="label">Message / Goals</div>
        <div class="value message-value">{{ $data['message'] }}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from the contact form at <a href="https://growthflux.co.uk">growthflux.co.uk</a></p>
      <p style="margin-top:6px">Reply directly to this email to respond to {{ $data['name'] }}.</p>
    </div>
  </div>
</body>
</html>
