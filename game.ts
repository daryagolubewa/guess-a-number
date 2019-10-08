function generateNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let randomNumber: number = generateNumber(0, 10);

console.log('random', randomNumber);

let elem = document.getElementById('result_message');

document.getElementById('button')
    .addEventListener('click', () => {

        const inputNumberElem = document.getElementById('input_number');


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

    });

document.getElementById('refresh_button')
    .addEventListener('click', () => {
        elem.textContent = '';

        const inputNumberElem = document.getElementById('input_number');
        if (!(inputNumberElem instanceof HTMLInputElement)) {
            throw new Error('An element with id input_number is not HTMLInputElement')
        }

        inputNumberElem.value = '';
    });





