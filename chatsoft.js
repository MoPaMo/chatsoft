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
var text, reg, match
function test() {
    text = document.getElementById("demo").value; fetchJSONFile('aw.json', function (data) {
        data.forEach(function (item, index) {
            reg = new RegExp(item.q)
            if (reg.test(text)) {

                match = text.match(reg)
                var F = new Function(item.a);
                return (F());
            }
            else { }

        });return("Not found")
    


    });
}