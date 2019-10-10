import GameState from './GameState';
import GameController from './GameController';
import {reaction} from 'mobx';

/**
 * Класс GameView описывает различные методы, которые занимаются получением данных, выводом их на экран, очисткой.
 */

export default class GameView {
	constructor(private gameState: GameState) {
		reaction(() => gameState.resultMessage, this.onResultMessageChange);
		reaction(() => gameState.inputNumberValStr, this.onInputNumberValStrChange);
		reaction(() => gameState.refreshButtonDisabled, this.onRefreshButtonDisabledChange);
	}

	/**
	 * getInputNumberValue: получение цифры, введенной пользователем в инпут.
	 */

	public getInputNumberValue(): number {
		const inputNumberElem = document.getElementById('input_number');

		// Если inputNumberElem не является экземлпяром класса HTMLInputElement, то показывать ошибку.
		// Т.о., избавилась от приведения типов.
		if (!(inputNumberElem instanceof HTMLInputElement)) {
			throw new Error('An element with id input_number is not HTMLInputElement');
		}

		return parseInt(inputNumberElem.value, 10);
	}

	/**
	 * getGuessButton: получение HTML-элемента c id button.
	 */

	public getGuessButton() {
		return document.getElementById('button');
	}

	/**
	 * getRefreshButton: получение HTML-элемента с id refresh_button.
	 */

	public getRefreshButton() {
		return document.getElementById('refresh_button');
	}

	private onResultMessageChange = (resultMessage: string) => {
		const resultMessageElem = document.getElementById('result_message');
		resultMessageElem.textContent = resultMessage;
	};

	private onInputNumberValStrChange = (inputNumberValStr: string) => {
		if (inputNumberValStr === '') {
			const inputNumberElem = document.getElementById('input_number');

			// Если inputNumberElem не является экземлпяром класса HTMLInputElement, то показывать ошибку.
			// Т.о., избавилась от приведения типов.
			if (!(inputNumberElem instanceof HTMLInputElement)) {
				throw new Error('An element with id input_number is not HTMLInputElement');
			}

			inputNumberElem.value = '';
		}
	};

	private onRefreshButtonDisabledChange = (refreshButtonDisabled: boolean) => {
		const refreshButtonDisabledElem = document.getElementById('refresh_button');

		if (!refreshButtonDisabled) {
			refreshButtonDisabledElem.removeAttribute('disabled');
		} else {
			refreshButtonDisabledElem.setAttribute('disabled', 'disabled');
		}
	};
}
