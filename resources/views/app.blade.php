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
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
        <script src="{{ mix('js/app.js') }}" defer></script>
        @routes
    </head>
    <body class="antialiased">
        <div class="site">
            @inertia
        </div>
    </body>
</html>
