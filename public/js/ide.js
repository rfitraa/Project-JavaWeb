let editor;
let defaultCode; //tempat untuk menyimpat default code dengan read file.txt

window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.setOptions({
        // following options require ext-language_tools.js
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        // the following option requires ext-emmet.js and the emmet library
        enableEmmet: true,
        // the following option requires ext-elastic_tabstops_lite.js
        useElasticTabstops: true,
        //another
        enableMultiselect: true,
    });
    editor.session.setMode("ace/mode/java");
};

function reset() {
    editor = ace.edit("editor");
    editor.setValue("");
}

function executeCode() {
    async function readReadableStream(readableStream) {
        const reader = readableStream.getReader();
        const uint8 = (await reader.read()).value;
        const textDecoder = new TextDecoder();
        const resultString = textDecoder.decode(uint8);
        return resultString;
    }

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
    }).then(async (res) => {
        // console.log(await readReadableStream(res.body));
        $("#output").text(await readReadableStream(res.body));
    });
}
