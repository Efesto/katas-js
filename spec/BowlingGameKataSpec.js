describe("BowlingGame", ()=>{
    let game;

    beforeEach(()=>{
        let Game = require('../src/BowlingGameKata');
        game = new Game();
    });

    describe('roll', ()=>{
        let Subject = ()=> {
            game.roll();
        };

        describe('when 5 pins are hit', ()=>{
            beforeEach(()=>{
                spyOn(game, 'pinsHit').and.returnValue(5);
            });

            it('increases score by 5', ()=>{
                Subject();
                expect(game.score()).toBe(5);
            })
        });

        describe('when a strike occurs', ()=>{
            beforeEach(()=>{
                game.pinsHit = ()=>{ return 10 };
            });

            it('score for current frame is 10 plus 2 next scores', ()=>{
                Subject();

                game.pinsHit = ()=>{ return 5 };
                game.roll();

                game.pinsHit = ()=>{ return 4 };
                game.roll();

                expect(game.score()).toBe(28);
            })
        });
    })
});
