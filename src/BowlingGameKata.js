// http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
const random = require('lodash.random');

function Game() {
    this.pinsHit = ()=> {
        return random(0, 10)
    };

    this.roll = ()=> {
        this.score += this.pinsHit();
    };

    this.score = 0;
}

module.exports = Game;