<?php

namespace App\Exceptions;

use App\Domain\Flash\Facades\Flash;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register()
    {
    }

    /**
     * Prepare exception for rendering.
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|\Symfony\Component\HttpFoundation\Response
     * @throws \Throwable
     */
    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);

        if ($response->getStatusCode() === Response::HTTP_TOO_MANY_REQUESTS) {
            Flash::error('Too many requests please try again shortly.');
            return Inertia::location(url()->current());
        }

        return $response;
    }
}
