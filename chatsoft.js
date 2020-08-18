const regex = /^search for ([\w])+$/g
const str = `search for h`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        open("https://wikipedia.com/wiki/"+match)
    });
}