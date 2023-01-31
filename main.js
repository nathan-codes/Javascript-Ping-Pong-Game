// Selecting Buttons
const resetButton = $(".resetButton");


// Selecting Scores 
const p2Score = $(".p2Score");

// Player Score Count which will be updated based on click events
let scoreLimit = 7;
let isGameOver = false;

//Score Limit
$("select").change(function () {
    scoreLimit = parseInt($("select").children("option:selected").val());
    console.log(scoreLimit);
    reset();
})




const p1 = {
    score: 0,
    button: $(".p1Button"),
    scoreText: $(".p1Score")
}


const p2 = {
    score: 0,
    button: $(".p2Button"),
    scoreText: $(".p2Score")
}





function upDateScores(player, opponent) {
    if (!isGameOver) {
        if (player.score !== scoreLimit) {
            player.score++;
            player.scoreText.text(player.score);
        }
        else {
            player.scoreText.addClass("failure");
            opponent.scoreText.addClass("success");
            isGameOver = true;
            $(".btn-success,.btn-primary").addClass("disable");
        }
    }
}






p1.button.click(function () {
    upDateScores(p1, p2);
})

p2.button.click(function () {
    upDateScores(p2, p1);
})








resetButton.click(reset);




function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.scoreText.text(p1.score);
    p2.scoreText.text(p2.score);
    $(".btn-success,.btn-primary").removeClass("disable");

    p1.scoreText.removeClass("success");
    p2.scoreText.removeClass("failure");
}



