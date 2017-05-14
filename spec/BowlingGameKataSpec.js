describe("BowlingGame", ()=>{
    var Game;

    beforeEach(()=>{
        Game = require('../src/BowlingGameKata').NewGame();
    });

    it('has initial score equal to 0', ()=>{
        expect(Game.score).toBe(0);
    });

    describe('Roll', ()=>{
        Subject = ()=> {
            Game.roll();
        };

        describe('when 5 pins are hit', ()=>{
            // mock 5 hit pins

            it('increases score by 5', ()=>{
                Subject();
                expect(Game.score).toBe(5);
            })
        })
    })
});
