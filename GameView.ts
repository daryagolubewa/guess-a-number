import GameState from "./GameState";
import GameController from "./GameController";



/**
 * Класс GameView описывает различные методы, которые занимаются получением данных, выводом их на экран, очисткой.
 */

export default class GameView {

    constructor(public controller: GameController) {
        this.getGuessButton().addEventListener('click', this.controller.onGuessButtonClick);
        this.getRefreshButton().addEventListener('click', this.controller.onRefreshClick);
    }
    
    
    /**
     * printResultMessage: выводит сообщение о результате игры.
     */

    printResultMessage(message: string) {
        let elem = document.getElementById('result_message');
        elem.textContent = message;
    }

    /**
     * enableRefreshButton: включает кнопку Refresh.
     */

    enableRefreshButton() {
        document.getElementById('refresh_button').removeAttribute("disabled");
    }

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

        inputNumberElem.value = '';
    }


    /**
     * clearResultMessage: стирает сообщение о результатах игры.
     */

    clearResultMessage() {
        this.printResultMessage('');
    }

    /**
     * getInputNumberValue: получение цифры, введенной пользователем в инпут.
     */

    getInputNumberValue(): number {
        const inputNumberElem = document.getElementById('input_number');

        // Если inputNumberElem не является экземлпяром класса HTMLInputElement, то показывать ошибку.
        // Т.о., избавилась от приведения типов.
        if (!(inputNumberElem instanceof HTMLInputElement)) {
            throw new Error('An element with id input_number is not HTMLInputElement')
        }

        return parseInt(inputNumberElem.value);
    }

    /**
     * getGuessButton: получение HTML-элемента c id button.
     */

    getGuessButton() {
        return document.getElementById('button');
    }

    /**
     * getRefreshButton: получение HTML-элемента с id refresh_button.
     */

    getRefreshButton() {
        return document.getElementById('refresh_button');
    }

}
