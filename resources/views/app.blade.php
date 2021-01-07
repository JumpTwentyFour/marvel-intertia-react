<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Marvel Tester - @yield('title')</title>
        @if (isset($meta))
            <meta name="description" content="{{ $meta }}">
        @endif
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
        <script src="{{ mix('js/app.js') }}" defer></script>
        @routes
    </head>
    <body class="antialiased">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            @inertia
        </div>
    </body>
</html>
