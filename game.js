function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
;
var randomNumber = generateNumber(0, 10);
console.log('random', randomNumber);
var elem = document.getElementById('result_message');
document.getElementById('button')
    .addEventListener('click', function () {
    var getUserNumber = parseFloat(document.getElementById('input_number').value);
    document.getElementById('refresh_button').removeAttribute("disabled");
    if (randomNumber === getUserNumber) {
        elem.textContent = 'Hooray, you win!';
    }
    else if (randomNumber > getUserNumber) {
        elem.textContent = 'Pick a greater number';
    }
    else if (randomNumber < getUserNumber) {
        elem.textContent = 'Pick a smaller number';
    }
});
document.getElementById('refresh_button')
    .addEventListener('click', function () {
    elem.textContent = '';
    document.getElementById('input_number').value = '';
});
