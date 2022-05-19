<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\PersonalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('personal')->group(function () {

    Route::post('/ekle', [PersonalController::class, 'store']);
    Route::get('/list', [PersonalController::class, 'index']);

});
Route::prefix('address')->group(function () {

    Route::get('/index', [AddressController::class, 'index']);

});
