import GameUi from './GameUI';
import Game from './Game';

/**
 * Класс GameController содержит обработчики кликов двух кнопок GuessButton и RefreshButton.
 */


export default class GameController {

    gameUi = new GameUi();
    game = new Game();
    
    constructor() {
        this.gameUi.getGuessButton().addEventListener('click', this.onGuessButtonClick);
        this.gameUi.getRefreshButton().addEventListener('click', this.onRefreshClick);
    }

    /**
     * onGuessButtonClick: сверяет сгенерированное число и введенное пользователем; включает refreshButton
     */

    private onGuessButtonClick = () => {

        this.gameUi.enableRefreshButton();

        if (this.game.randomNumber === this.gameUi.getInputNumberValue()) {
            this.gameUi.printResultMessage('Hooray, you win!');
        } else if (this.game.randomNumber > this.gameUi.getInputNumberValue()) {
            this.gameUi.printResultMessage('Pick a greater number');
        } else if (this.game.randomNumber < this.gameUi.getInputNumberValue()) {
            this.gameUi.printResultMessage('Pick a smaller number');
        }
    };

    /**
     * onRefreshClick: запускает очистку инпута и сообщения с результатом
     */

    private onRefreshClick = () => {
        this.gameUi.clearInputNumberValue();
        this.gameUi.clearResultMessage();
    };

}
