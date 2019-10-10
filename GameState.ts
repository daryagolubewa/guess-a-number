import { observable, computed } from 'mobx';

/**
 * Класс GameState генерирует рандомное число от 0 до 10, хранит это число.
 */

export default class GameState {

    static generateNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    @observable guessedNumber: number = GameState.generateNumber(0, 10);
    @observable resultMessage: string = '';
    @observable inputNumberValStr: string = '';
    @computed get inputNumberVal() {
        return parseInt(this.inputNumberValStr) // вычисляемое значение для сравнения в контроллере
    }

    @observable refreshButtonDisabled: boolean = true;

    /**
     * clearInputNumberValue: очищает инпут.
     */

    clearInputNumberValue() {
        this.inputNumberValStr = '';
    }

    /**
     * clearResultMessage: стирает сообщение о результатах игры.
     */

    clearResultMessage() {
        this.resultMessage = '';
    }

}