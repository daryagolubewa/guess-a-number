define(["require", "exports", "./listeners"], function (require, exports, listeners_1) {
    "use strict";
    exports.__esModule = true;
    exports.randomNumber = listeners_1.generateNumber(0, 10);
    console.log('random', exports.randomNumber);
    document.getElementById('button')
        .addEventListener('click', listeners_1.onGuessButtonClick);
    document.getElementById('refresh_button')
        .addEventListener('click', listeners_1.onRefreshClick);
});
//# sourceMappingURL=game.js.map