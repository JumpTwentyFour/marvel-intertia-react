<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecureHeaders
{
    private array $unwantedHeaderList = [
        'X-Powered-By',
        'Server',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $this->removeUnwantedHeaders($this->unwantedHeaderList);

        $response = $next($request);

        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-Frame-Options', 'DENY');

        /**
         * Currently unsure the best approach for setting this. See:-
         * https://github.com/OWASP/CheatSheetSeries/issues/376
         * https://github.com/helmetjs/helmet/issues/230
         * https://github.com/github/secure_headers/issues/439
         */
         // $response->headers->set('X-XSS-Protection', 0);

        /**
         * You can register your websites domain https://hstspreload.org/ so it is always preloaded via HTTPS
         * .app, .dev and .page extensions are preloaded by default.
         */
        $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
        return $response;
    }

    private function removeUnwantedHeaders(array $headerList): void
    {
        foreach ($headerList as $header) {
            header_remove($header);
        }
    }
}
