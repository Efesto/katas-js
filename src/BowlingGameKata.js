// http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
const random = require('lodash.random');

function Game() {
	this.pinsHit = () => {
		return random(0, 10);
	};

	this.roll = () => {
		let pinsHit = this.pinsHit();
		this.rollScores.push(pinsHit);
	};

	this.score = () => {
		let score = 0;
		let rScoreIndex = 0;
		let lastRollInFrame = false;

		this.rollScores.forEach((rScore) => {
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
		let scoreAtRoll = this.rollScores[rollIndex];
		if (!scoreAtRoll) {
            scoreAtRoll = 0;
        }

		return scoreAtRoll;
	};

	this.rollScores = [];
}

module.exports = Game;