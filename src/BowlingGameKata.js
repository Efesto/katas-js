"use strict";

// http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
const random = require('lodash.random');

function Game() {
    const maxPins = 10;
    let lastRollInFrame = false;

    this.pinsHit = () => {
        return this.random(0, this.standingPins());
    };

    this.standingPins = () => {
        if (lastRollInFrame) {
            let lastScore = this.pinsHitAtRoll[this.pinsHitAtRoll.length - 1];
            return maxPins - lastScore;
        }

        return maxPins;
    };

    this.random = (min, max) => {
        return random(min, max)
    };

    this.roll = () => {
        let pinsHit = this.pinsHit();
        lastRollInFrame = !(pinsHit === maxPins || lastRollInFrame);

        this.pinsHitAtRoll.push(pinsHit);
    };

    this.score = () => {
        let score = 0;
        let rScoreIndex = 0;
        let lastRollInFrame = false;

        this.pinsHitAtRoll.forEach((rScore) => {
                score += rScore;

                if (rScore === 10) {
                    score += this.scoreAtRoll(rScoreIndex + 1);
                    score += this.scoreAtRoll(rScoreIndex + 2);
                } else {
                    if (lastRollInFrame) {
                        if ((rScore + this.scoreAtRoll(rScoreIndex - 1)) === 10) {
                            score += this.scoreAtRoll(rScoreIndex + 1);
                        }
                    }
                    lastRollInFrame = !lastRollInFrame;
                }
                rScoreIndex += 1;
            }
        );

        return score;
    };

    this.scoreAtRoll = (rollIndex) => {
        let scoreAtRoll = this.pinsHitAtRoll[rollIndex];
        if (!scoreAtRoll) {
            scoreAtRoll = 0;
        }

        return scoreAtRoll;
    };

    this.pinsHitAtRoll = [];
}

module.exports = Game;