// http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
const random = require('lodash.random');

function Game() {
    this.pinsHit = ()=> {
        return random(0, 10)
    };

    this.roll = ()=> {
        let pinsHit = this.pinsHit();
        this.rollScores.push(pinsHit);
    };

    this.score = ()=> {
        return this.rollScores.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
    };

    this.rollScores = [];
}

module.exports = Game;