describe("BowlingGame", () => {
    let game;

    beforeEach(() => {
        let Game = require('../src/BowlingGameKata');
        game = new Game();
    });

    describe('roll', () => {
        let Roll = () => {
            game.roll();
        };

        describe('when 5 pins are hit', () => {
            beforeEach(() => {
                game.pinsHit = () => {
                    return 5
                };
            });

            it('increases score by 5', () => {
                Roll();
                expect(game.score()).toBe(5);
            })
        });

        describe('when a strike occurs', () => {
            beforeEach(() => {
                game.pinsHit = () => {
                    return 10
                };
            });

            it('score for current frame is 10 plus 2 next scores', () => {
                Roll();

                game.pinsHit = () => {
                    return 5
                };
                Roll();

                game.pinsHit = () => {
                    return 4
                };
                Roll();

                expect(game.score()).toBe(28);
            });

            describe('and there are no successive rolls', () => {
                it('score for current frame is only strike', () => {
                    Roll();
                    expect(game.score()).toBe(10);
                })
            });
        });

        describe('when a spare occurs', () => {
            beforeEach(() => {
                game.pinsHit = () => {
                    return 5
                };
            });

            it('score for current frame is 10 plus the next score', () => {
                Roll();
                Roll();
                Roll();

                expect(game.score()).toBe(20);
            });

            describe('and there are no successive rolls', () => {
                it('score for current frame is only the spare', () => {
                    Roll();
                    Roll();
                    expect(game.score()).toBe(10);
                })
            })
        });

        describe('after 2 rolls without spare', () => {
            beforeEach(() => {
                game.pinsHit = () => {
                    return 2
                };
            });
        });

        it('rolls for pins range between 0 and previous pins hit', () => {
            spyOn(game, 'random').and.returnValue(8);
            Roll();
            expect(game.random).toHaveBeenCalledWith(0, 10);

            Roll();
            expect(game.random).toHaveBeenCalledWith(0, 2);
        })
    });

    describe('standingPins', () => {
        describe('when no rolls occurred', () => {
            it('returns maxPins', () => {
                expect(game.standingPins()).toBe(10);
            })
        });

        describe('when previous roll was a strike', () => {
            beforeEach(() => {
                game.pinsHit = () => {
                    return 10
                };
                game.roll();
            });

            it('returns maxPins', () => {
                expect(game.standingPins()).toBe(10);
            })
        });

        describe('when previous roll was 4', () => {
            beforeEach(() => {
                game.pinsHit = () => {
                    return 4
                };
                game.roll();
            });

            it('returns 6', () => {
                expect(game.standingPins()).toBe(6)
            })
        });

        describe('after two rolls', () => {
            beforeEach(() => {
                game.pinsHit = () => {
                    return 1
                };
                game.roll();
                game.roll();
            });

            it('returns maxPins', () => {
                expect(game.standingPins()).toBe(10);
            })
        })
    });

    describe('full games', () => {

    })
});
