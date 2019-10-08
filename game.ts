import {onGuessButtonClick, onRefreshClick, generateNumber} from "./listeners";

export let randomNumber: number = generateNumber(0, 10);

console.log('random', randomNumber);

document.getElementById('button')
    .addEventListener('click', onGuessButtonClick);

document.getElementById('refresh_button')
    .addEventListener('click', onRefreshClick);





