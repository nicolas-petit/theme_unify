// "tester" can be a regex or a string
function hasClass(elem, tester) {
    return getClass(elem, tester) !== null;
}

function getClass(elem, tester) {
    var classList = elem.className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
        if (classList[i].match(tester)) {
            return classList[i];
        }
    }
    return null;
}

