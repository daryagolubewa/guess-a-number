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
		this.gameState.checkInputNumber();
	};

	/**
	 * onRefreshClick: запускает очистку инпута и сообщения с результатом
	 */

	private onRefreshClick = () => {
		this.gameState.clearInputNumberValue();
		this.gameState.clearResultMessage();
	};
}
