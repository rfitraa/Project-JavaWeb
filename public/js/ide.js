let editor;

window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");
};

function changeLanguage() {
    let language = $("#languages").val();

    if (language == "c" || language == "cpp")
        editor.session.setMode("ace/mode/c_cpp");
    else if (language == "php") editor.session.setMode("ace/mode/php");
    else if (language == "python") editor.session.setMode("ace/mode/python");
    else if (language == "node") editor.session.setMode("ace/mode/javascript");
    else if (language == "java") editor.session.setMode("ace/mode/java");
}

function executeCode() {
    // $.ajax({
    //     url: "/app/compiler.php",

    //     method: "POST",

    //     data: {
    //         language: $("#languages").val(),
    //         code: editor.getSession().getValue(),
    //     },

    //     success: function (response) {
    //         $(".output").text(response);
    //     },
    // });

    fetch("https://godbolt.org/api/compiler/java1800/compile", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            source: editor.getSession().getValue(),
            options: {
                filters: {
                    execute: true,
                },
            },
        }),
    })
        .then(function (response) {
            if (response.status != 200) {
                console.log("error " + response.status);
                return;
            }
            //print into
            // console.log(response);
            // console.log(readReadableStream(response.body));
        })
        .catch(function (err) {
            console.log(err);
        });
}
