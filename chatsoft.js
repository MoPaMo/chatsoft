class chatsoft {

    fetchJSONFile(path, callback) {
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
    constructor(path) {
        this.text = "";
        this.reg = "";
        this.match = "";
        this.JSONanswer = fetchJSONFile('aw.json', function (data) { return data })

    }
    answer() {
        this.text = document.getElementById("demo").value;
        this.JSONanswer.forEach(function (item, index) {
            this.reg = new RegExp(item.q)
            if (this.reg.test(this.text)) {

                this.match = this.text.match(reg)
                var F = new Function(item.a);
                return (F());
            }
            else { }

        }); return ("Not found")




    }
}