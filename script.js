function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

document.getElementById('convert-btn').addEventListener('click', function() {
    let r = parseInt(document.getElementById('r').value) || 0;
    let g = parseInt(document.getElementById('g').value) || 0;
    let b = parseInt(document.getElementById('b').value) || 0;

    let hexColor = rgbToHex(r, g, b);
    document.getElementById('hex-result').textContent = hexColor;
});
