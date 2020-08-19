function test() {
    let text = document.getElementById("demo").value
    let reg = new RegExp(/search for (\w+)( |)/i)
    var match = reg.test(text)
    if (reg.test(text))
        open("https://wikipedia.org/wiki/" + match[0], "wiki");
}