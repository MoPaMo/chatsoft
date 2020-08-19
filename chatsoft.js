function test(){text=document.getElementById("demo").value
var match = text.match(/search for (\w+)( |)/i) 
if(/search for (\w+)( |)/i.test(text))
open("https://wikipedia.org/wiki/"+match[1],"wiki");}