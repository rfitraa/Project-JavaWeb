<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Java Online IDE</title>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <div class="header"> Java Online IDE </div>

    <div class="editor" id="editor"></div>

    <div class="button-container">
        <button class="btn" onclick="executeCode()"> Run </button>
        <button class="btn" type="reset" onclick="reset()">Reset</button>
    </div>

    <div class="output" id="output"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/lib/ace.js"></script>
    <script src="js/lib/theme-monokai.js"></script>
    <script src="js/ide.js"></script>
    <script src="js/lib/ext-language_tools.js"></script>
    <script src="js/lib/ext-emmet.js"></script>
    <script src="js/lib/ext-elastic_tabstops_lite.js"></script>

</body>
</html>