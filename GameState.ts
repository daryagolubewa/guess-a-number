
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

}