import GameView from './GameView';
import GameState from './GameState';

/**
 * Класс GameController содержит обработчики кликов двух кнопок GuessButton и RefreshButton.
 */


export default class GameController {

   gameView = new GameView(this);
   gameState = new GameState();

    /**
     * onGuessButtonClick: сверяет сгенерированное число и введенное пользователем; включает refreshButton
     */

     onGuessButtonClick = () => {

        this.gameView.enableRefreshButton();

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

   onRefreshClick = () => {
        this.gameView.clearInputNumberValue();
        this.gameView.clearResultMessage();
    };

}
