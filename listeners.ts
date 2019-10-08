import {randomNumber} from "./game";

export function generateNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export function onGuessButtonClick() {
    const inputNumberElem = document.getElementById('input_number'),
        elem = document.getElementById('result_message');

    // Если inputNumberElem не является экземлпяром класса HTMLInputElement, то показывать ошибку.
    // Т.о., избавилась от приведения типов.
    if (!(inputNumberElem instanceof HTMLInputElement)) {
        throw new Error('An element with id input_number is not HTMLInputElement')
    }

    let getUserNumber: number = parseFloat(inputNumberElem.value);
    document.getElementById('refresh_button').removeAttribute("disabled");

    if (randomNumber === getUserNumber) {
        elem.textContent = 'Hooray, you win!';
    } else if (randomNumber > getUserNumber) {
        elem.textContent = 'Pick a greater number'
    } else if (randomNumber < getUserNumber) {
        elem.textContent = 'Pick a smaller number'
    }
}

export function onRefreshClick() {
    let elem = document.getElementById('result_message');
    elem.textContent = '';

    const inputNumberElem = document.getElementById('input_number');
    if (!(inputNumberElem instanceof HTMLInputElement)) {
        throw new Error('An element with id input_number is not HTMLInputElement')
    }

    inputNumberElem.value = '';
}