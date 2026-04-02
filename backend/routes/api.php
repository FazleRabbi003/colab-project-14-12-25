<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| GrowthFlux API Routes
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    // Health check
    Route::get('/health', fn() => response()->json([
        'status'  => 'ok',
        'service' => 'GrowthFlux API',
        'version' => '1.0.0',
    ]));

    // Contact form submission
    Route::post('/contact', [ContactController::class, 'store'])
        ->name('contact.store');
});

// Legacy (non-versioned) route for frontend compatibility
Route::post('/contact', [ContactController::class, 'store']);
