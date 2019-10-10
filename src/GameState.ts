import {observable, computed} from 'mobx';

/**
 * Класс GameState генерирует рандомное число от 0 до 10, хранит это число.
 */

export default class GameState {
	public static generateNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	@observable public guessedNumber: number = GameState.generateNumber(0, 10);
	@observable public resultMessage: string = '';
	@observable public inputNumberValStr: string = '';
	@computed get inputNumberVal() {
		return parseInt(this.inputNumberValStr, 10); // вычисляемое значение для сравнения в контроллере
	}

	@observable public refreshButtonDisabled: boolean = true;

	/**
	 * clearInputNumberValue: очищает инпут.
	 */

	public clearInputNumberValue() {
		this.inputNumberValStr = '';
	}

	/**
	 * clearResultMessage: стирает сообщение о результатах игры.
	 */

	public clearResultMessage() {
		this.resultMessage = '';
	}
}
