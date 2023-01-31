"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

const setBackgroundColor = function (color) {
    document.querySelector("body").style.backgroundColor = color;
};

const setScore = function (score) {
    document.querySelector(".score").textContent = score;
};

const setMysteryBox = function (mysteryBox) {
    document.querySelector(".number").textContent = mysteryBox;
};

const setBoxWidth = function (width) {
    document.querySelector(".number").style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        displayMessage("⛔ No Number!!! ⛔");
    } else if (guess === secretNumber) {
        displayMessage("🎉Great Guess!!!🎉");
        setMysteryBox(secretNumber);
        setBackgroundColor("#60b347");
        setBoxWidth("30rem");
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber
                    ? "Too High, guess a lower number"
                    : "Too Low, guess a Higher number"
            );
            score--;
            setScore(score);
        } else {
            displayMessage("You Lost the Game!!!");
            setScore(0);
            setBackgroundColor("red");
            setBoxWidth("30rem");
        }
    }
});

//again button
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    setScore(score);
    setMysteryBox("?");
    document.querySelector(".guess").value = "";
    setBackgroundColor("#222");
    setBoxWidth("15rem");
});
