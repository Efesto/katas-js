// http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
function NewGame() {
    game = {};
    game.roll = ()=>{
        game.score += 5;
    };

    game.score = 0;

    return game;
}

module.exports.NewGame = NewGame;