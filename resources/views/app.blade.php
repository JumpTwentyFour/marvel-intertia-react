<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="{{ asset('/images/favicon.ico') }}">
        <title>Marvel Tester - @yield('title')</title>
        @if (isset($meta))
            <meta name="description" content="{{ $meta }}">
        @endif
        @if (config('app.env') !== 'local')
            <script nonce="{{ csp_nonce() }}">
                // before React is loaded disable the devtools
                if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
                }
            </script>
        @endif
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
        <script src="{{ mix('js/app.js') }}" defer></script>
        @routes(false, csp_nonce())
    </head>
    <body class="antialiased">
        <div class="site">
            @inertia
        </div>
    </body>
</html>
