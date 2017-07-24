<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    </head>
    <body>
      <div id="vue-app">
        <ul>
          <li v-for="language in languages" v-text="language"></li>
        </ul>
      </div>


      <script src="https://unpkg.com/vue"></script>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="/js/app.js"></script>

    </body>
</html>
