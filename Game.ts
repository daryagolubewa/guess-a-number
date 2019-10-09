
/**
 * Класс Game генерирует рандомное число от 0 до 10, хранит это число.
 */

export default class Game {

    generateNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomNumber: number = this.generateNumber(0, 10);

}