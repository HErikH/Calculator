function f(val) {
    document.getElementById('answer').value += val;
}
function c(){
    document.getElementById('answer').value = '';
}
function h(){
    document.getElementById('answer').value = eval(document.getElementById('answer').value.split(' ').join(''))
}