describe("BowlingGame", ()=>{
    let game;

    beforeEach(()=>{
        let Game = require('../src/BowlingGameKata');
        game = new Game();
    });

    it('has initial score equal to 0', ()=>{
        expect(game.score).toBe(0);
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
                expect(game.score).toBe(5);
            })
        });
    })
});
