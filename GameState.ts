
/**
 * Класс GameState генерирует рандомное число от 0 до 10, хранит это число.
 */

export default class GameState {

    generateNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    guessedNumber: number = this.generateNumber(0, 10);
    resultMessage: string = '';
    inputNumberValStr: string = '';
    get inputNumberVal() {
        return parseInt(this.inputNumberValStr) // вычисляемое значение для сравнения в контроллере
    }

    refreshButtonDisabled: boolean = true;

    /**
     * clearInputNumberValue: очищает инпут.
     */

    clearInputNumberValue() {
        const inputNumberElem = document.getElementById('input_number');

        // Если inputNumberElem не является экземлпяром класса HTMLInputElement, то показывать ошибку.
        // Т.о., избавилась от приведения типов.
        if (!(inputNumberElem instanceof HTMLInputElement)) {
            throw new Error('An element with id input_number is not HTMLInputElement')
        }

        //inputNumberElem.value = '';
        this.inputNumberValStr = '';
    }

    /**
     * clearResultMessage: стирает сообщение о результатах игры.
     */

    clearResultMessage() {
        this.resultMessage = '';
    }

}