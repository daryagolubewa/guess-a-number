import GameView from './GameView';
import GameState from './GameState';

/**
 * Класс GameController содержит обработчики кликов двух кнопок GuessButton и RefreshButton.
 */

export default class GameController {
	public gameState = new GameState();
	public gameView = new GameView(this.gameState);

	constructor() {
		this.gameView.getInputNumberElem().addEventListener('change', this.onInputNumberElemChange);
		this.gameView.getGuessButton().addEventListener('click', this.onGuessButtonClick);
		this.gameView.getRefreshButton().addEventListener('click', this.onRefreshClick);
	}

	private onInputNumberElemChange = (event: Event) => {
		const inputNumberElem = event.target as HTMLInputElement;
		this.gameState.inputNumberValStr = inputNumberElem.value;
	};

	/**
	 * onGuessButtonClick: сверяет сгенерированное число и введенное пользователем; включает refreshButton
	 */

	private onGuessButtonClick = () => {
		this.gameState.refreshButtonDisabled = false;

		if (this.gameState.guessedNumber === this.gameState.inputNumberVal) {
			this.gameState.resultMessage = 'Hooray, you win!';
		} else if (this.gameState.guessedNumber > this.gameState.inputNumberVal) {
			this.gameState.resultMessage = 'Pick a greater number';
		} else if (this.gameState.guessedNumber < this.gameState.inputNumberVal) {
			this.gameState.resultMessage = 'Pick a smaller number';
		}
	};

	/**
	 * onRefreshClick: запускает очистку инпута и сообщения с результатом
	 */

	private onRefreshClick = () => {
		this.gameState.clearInputNumberValue();
		this.gameState.clearResultMessage();
	};
}
