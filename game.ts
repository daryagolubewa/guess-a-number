function generateNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let randomNumber: number = generateNumber(0, 10);

console.log('random', randomNumber);

let elem = document.getElementById('result_message');

document.getElementById('button')
    .addEventListener('click', () => {
        let getUserNumber: number = parseFloat((<HTMLInputElement>document.getElementById('input_number')).value);
        document.getElementById('refresh_button').removeAttribute("disabled");

        if (randomNumber === getUserNumber) {
            elem.textContent = 'Hooray, you win!';
        } else if (randomNumber > getUserNumber) {
            elem.textContent = 'Pick a greater number'
        } else if (randomNumber < getUserNumber) {
            elem.textContent = 'Pick a smaller number'
        }


    })

document.getElementById('refresh_button')
    .addEventListener('click', () => {
        elem.textContent = '';
        (<HTMLInputElement>document.getElementById('input_number')).value = '';
    })




