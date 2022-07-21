<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Codeboard Online IDE</title>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <div class="header"> Codeboard Online IDE </div>
    <div class="control-panel">
        Select Language:
        &nbsp; &nbsp;
        <select id="languages" class="languages" onchange="changeLanguage()">
            <option value="java"> Java </option>
            <option value="c"> C </option>
            <option value="cpp"> C++ </option>
            <option value="php"> PHP </option>
            <option value="python"> Python </option>
            <option value="node"> Node JS </option>
        </select>
    </div>
    <div class="editor" id="editor"></div>

    <div class="button-container">
        <button class="btn" onclick="executeCode()"> Run </button>
    </div>

    <div class="output" id="output"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/lib/ace.js"></script>
    <script src="js/lib/theme-monokai.js"></script>
    <script src="js/ide.js"></script>

</body>
</html>