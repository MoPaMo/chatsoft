function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

// this requests the file and executes a callback with the parsed result once
//   it is available

function test() {
    let text = document.getElementById("demo").value; fetchJSONFile('aw.json', function (data) {
        data.forEach(function (item, index) {
            let reg = new RegExp(/^search for (\w+)( |)$/i)
            console.log(item.q)
            //if()    
        });


        var match = text.match(reg)
        if (reg.test(text))
            open("https://wikipedia.org/wiki/" + match[1], "wiki");
    });
}