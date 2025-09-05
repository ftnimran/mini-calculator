document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

function add() {
    var a = parseInt(document.getElementById('val1').value);
    var b = parseInt(document.getElementById('val2').value);
    var c = a + b;
    document.getElementById('res').innerHTML = c;

}

function sub() {
    var a = parseInt(document.getElementById('val1').value);
    var b = parseInt(document.getElementById('val2').value);
    var c = a - b;
    document.getElementById('res').innerHTML = c;
}

function mul() {
    var a = parseInt(document.getElementById('val1').value);
    var b = parseInt(document.getElementById('val2').value);
    var c = a * b;
    document.getElementById('res').innerHTML = c;
}

function div() {
    var a = parseInt(document.getElementById('val1').value);
    var b = parseInt(document.getElementById('val2').value);
    var c = a / b;
    document.getElementById('res').innerHTML = c;
}