function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
;
var randomNumber = generateNumber(0, 10);
console.log('random', randomNumber);
var elem = document.getElementById('result_message');
document.getElementById('button')
    .addEventListener('click', function () {
    var inputNumberElem = document.getElementById('input_number');
    // Если inputNumberElem не является экземлпяром класса HTMLInputElement, то показывать ошибку.
    // Т.о., избавилась от приведения типов.
    if (!(inputNumberElem instanceof HTMLInputElement)) {
        throw new Error('An element with id input_number is not HTMLInputElement');
    }
    var getUserNumber = parseFloat(inputNumberElem.value);
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
    var inputNumberElem = document.getElementById('input_number');
    if (!(inputNumberElem instanceof HTMLInputElement)) {
        throw new Error('An element with id input_number is not HTMLInputElement');
    }
    inputNumberElem.value = '';
});
//# sourceMappingURL=game.js.map