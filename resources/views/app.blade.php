<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="base-title" content="{{ config('app.name', 'Laravel') }}" />

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <!-- Styles -->
    <link rel="icon" href="{{ asset('images/logo-32x32.png') }}">

    @viteReactRefresh
    @vite('resources/ts/app.ts')
</head>

<body>
    <div id="app">
    </div>
</body>

</html>
