"use strict";
let blockSize = 50;
let rows = 10;
let cols = 10;
let board;
let context;
let rolledNum;
let playerX = 0;
let playerY = 9;
let dir = "right";
window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    //document.addEventListener("keyup", roll);
    initialUpdate();
    document.addEventListener("keyup", update);
    // setInterval(() => update(), 2000);
};
function initialUpdate() {
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < 10; j++) {
                if (j % 2 == 0) {
                    context.fillStyle = "gray";
                    context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
                }
                else {
                    context.fillStyle = "blue";
                    context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
                }
            }
            let j = 0;
        }
        else {
            for (let j = 0; j < 10; j++) {
                if (j % 2 == 0) {
                    context.fillStyle = "blue";
                    context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
                }
                else {
                    context.fillStyle = "gray";
                    context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
                }
            }
            let j = 0;
        }
    }
    let playerX = 0;
    let playerY = 9;
    context.fillStyle = "lime";
    context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
    let snakeOneX = 3;
    let snakeOneY = 7;
    context.fillStyle = "red";
    context.fillRect(snakeOneX * blockSize, snakeOneY * blockSize, blockSize, blockSize);
    let snakeTwoX = 5;
    let snakeTwoY = 5;
    context.fillStyle = "red";
    context.fillRect(snakeTwoX * blockSize, snakeTwoY * blockSize, blockSize, blockSize);
    let snakeThreeX = 3;
    let snakeThreeY = 2;
    context.fillStyle = "pink";
    context.fillRect(snakeThreeX * blockSize, snakeThreeY * blockSize, blockSize, blockSize);
    let snakeFourX = 1;
    let snakeFourY = 7;
    context.fillStyle = "pink";
    context.fillRect(snakeFourX * blockSize, snakeFourY * blockSize, blockSize, blockSize);
    let snakeFiveX = 2;
    let snakeFiveY = 0;
    context.fillStyle = "purple";
    context.fillRect(snakeFiveX * blockSize, snakeFiveY * blockSize, blockSize, blockSize);
    let snakeSixX = 8;
    let snakeSixY = 8;
    context.fillStyle = "purple";
    context.fillRect(snakeSixX * blockSize, snakeSixY * blockSize, blockSize, blockSize);
    let stairOneX = 6;
    let stairOneY = 8;
    context.fillStyle = "black";
    context.fillRect(stairOneX * blockSize, stairOneY * blockSize, blockSize, blockSize);
    let stairTwoX = 4;
    let stairTwoY = 6;
    context.fillStyle = "black";
    context.fillRect(stairTwoX * blockSize, stairTwoY * blockSize, blockSize, blockSize);
    let stairThreeX = 4;
    let stairThreeY = 4;
    context.fillStyle = "brown";
    context.fillRect(stairThreeX * blockSize, stairThreeY * blockSize, blockSize, blockSize);
    let stairFourX = 6;
    let stairFourY = 0;
    context.fillStyle = "brown";
    context.fillRect(stairFourX * blockSize, stairFourY * blockSize, blockSize, blockSize);
    let stairFiveX = 0;
    let stairFiveY = 3;
    context.fillStyle = "Yellow";
    context.fillRect(stairFiveX * blockSize, stairFiveY * blockSize, blockSize, blockSize);
    let stairSixX = 8;
    let stairSixY = 6;
    context.fillStyle = "yellow";
    context.fillRect(stairSixX * blockSize, stairSixY * blockSize, blockSize, blockSize);
    let stairSevenX = 6;
    let stairSevenY = 2;
    context.fillStyle = "orange";
    context.fillRect(stairSevenX * blockSize, stairSevenY * blockSize, blockSize, blockSize);
    let stairEightX = 4;
    let stairEightY = 0;
    context.fillStyle = "orange";
    context.fillRect(stairEightX * blockSize, stairEightY * blockSize, blockSize, blockSize);
}
function update() {
    /*   context.fillStyle ="lime";
       context.fillRect(0, 0, blockSize, blockSize);
       context.fillStyle = "black";
       context.fillRect(0, blockSize , blockSize, blockSize);
       context.fillStyle ="lime";
       context.fillRect(0, 2*blockSize, blockSize, blockSize);
       context.fillStyle ="black";
       context.fillRect(1*blockSize, 0, blockSize, blockSize);
       context.fillStyle ="lime";
       context.fillRect(blockSize, blockSize, blockSize, blockSize);
       context.fillStyle ="black";
       context.fillRect(1*blockSize, 2*blockSize, blockSize, blockSize); */
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < 10; j++) {
                if (j % 2 == 0) {
                    context.fillStyle = "gray";
                    context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
                }
                else {
                    context.fillStyle = "blue";
                    context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
                }
            }
            let j = 0;
        }
        else {
            for (let j = 0; j < 10; j++) {
                if (j % 2 == 0) {
                    context.fillStyle = "blue";
                    context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
                }
                else {
                    context.fillStyle = "gray";
                    context.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
                }
            }
            let j = 0;
        }
    }
    let stairOneX = 6;
    let stairOneY = 8;
    context.fillStyle = "black";
    context.fillRect(stairOneX * blockSize, stairOneY * blockSize, blockSize, blockSize);
    let stairTwoX = 4;
    let stairTwoY = 6;
    context.fillStyle = "black";
    context.fillRect(stairTwoX * blockSize, stairTwoY * blockSize, blockSize, blockSize);
    let stairThreeX = 4;
    let stairThreeY = 4;
    context.fillStyle = "brown";
    context.fillRect(stairThreeX * blockSize, stairThreeY * blockSize, blockSize, blockSize);
    let stairFourX = 6;
    let stairFourY = 0;
    context.fillStyle = "brown";
    context.fillRect(stairFourX * blockSize, stairFourY * blockSize, blockSize, blockSize);
    let stairFiveX = 0;
    let stairFiveY = 3;
    context.fillStyle = "Yellow";
    context.fillRect(stairFiveX * blockSize, stairFiveY * blockSize, blockSize, blockSize);
    let stairSixX = 8;
    let stairSixY = 6;
    context.fillStyle = "yellow";
    context.fillRect(stairSixX * blockSize, stairSixY * blockSize, blockSize, blockSize);
    let stairSevenX = 6;
    let stairSevenY = 2;
    context.fillStyle = "orange";
    context.fillRect(stairSevenX * blockSize, stairSevenY * blockSize, blockSize, blockSize);
    let stairEightX = 4;
    let stairEightY = 0;
    context.fillStyle = "orange";
    context.fillRect(stairEightX * blockSize, stairEightY * blockSize, blockSize, blockSize);
    let snakeOneX = 3;
    let snakeOneY = 7;
    context.fillStyle = "red";
    context.fillRect(snakeOneX * blockSize, snakeOneY * blockSize, blockSize, blockSize);
    let snakeTwoX = 5;
    let snakeTwoY = 5;
    context.fillStyle = "red";
    context.fillRect(snakeTwoX * blockSize, snakeTwoY * blockSize, blockSize, blockSize);
    let snakeThreeX = 3;
    let snakeThreeY = 2;
    context.fillStyle = "pink";
    context.fillRect(snakeThreeX * blockSize, snakeThreeY * blockSize, blockSize, blockSize);
    let snakeFourX = 1;
    let snakeFourY = 7;
    context.fillStyle = "pink";
    context.fillRect(snakeFourX * blockSize, snakeFourY * blockSize, blockSize, blockSize);
    let snakeFiveX = 2;
    let snakeFiveY = 0;
    context.fillStyle = "purple";
    context.fillRect(snakeFiveX * blockSize, snakeFiveY * blockSize, blockSize, blockSize);
    let snakeSixX = 8;
    let snakeSixY = 8;
    context.fillStyle = "purple";
    context.fillRect(snakeSixX * blockSize, snakeSixY * blockSize, blockSize, blockSize);
    rolledNum = Math.floor(Math.random() * 6) + 1;
    console.log(rolledNum);
    if (dir === "right") {
        if (playerX + rolledNum <= 9) {
            playerX += rolledNum;
            context.fillStyle = "lime";
            context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
            let dir = "right";
        }
        else {
            playerY -= 1;
            playerX = (playerX + rolledNum) - 9;
            playerX = 9 - playerX + 1;
            dir = "left";
            context.fillStyle = "lime";
            context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
        }
    }
    else if (dir == "left") {
        if (playerX - rolledNum >= 0) {
            playerX -= rolledNum;
            context.fillStyle = "lime";
            context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
        }
        else {
            playerY -= 1;
            playerX = playerX - rolledNum;
            playerX = (-1 * playerX) - 1;
            dir = "right";
            context.fillStyle = "lime";
            context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
        }
    }
    if (playerX === snakeTwoX && playerY === snakeTwoY) {
        playerX = snakeOneX;
        playerY = snakeOneY;
        dir = "right";
        context.fillStyle = "lime";
        context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
    }
    else if (playerX === snakeThreeX && playerY === snakeThreeY) {
        playerX = snakeFourX;
        playerY = snakeFourY;
        dir = "right";
        context.fillStyle = "lime";
        context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
    }
    else if (playerX === snakeFiveX && playerY === snakeFiveY) {
        playerX = snakeSixX;
        playerY = snakeSixY;
        dir = "left";
        context.fillStyle = "lime";
        context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
    }
    if (playerX === stairOneX && playerY === stairOneY) {
        playerX = stairTwoX;
        playerY = stairTwoY;
        dir = "left";
        context.fillStyle = "lime";
        context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
    }
    if (playerX === stairThreeX && playerY === stairThreeY) {
        playerX = stairFourX;
        playerY = stairFourY;
        dir = "left";
        context.fillStyle = "lime";
        context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
    }
    if (playerX === stairSixX && playerY === stairSixY) {
        playerX = stairFiveX;
        playerY = stairFiveY;
        dir = "left";
        context.fillStyle = "lime";
        context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
    }
    if (playerX === stairSevenX && playerY === stairSevenY) {
        playerX = stairEightX;
        playerY = stairEightY;
        dir = "left";
        context.fillStyle = "lime";
        context.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
    }
}
/* function roll(e:any) {
    if(e.code === "ArrowUp"){
        rolledNum = Math.floor(Math.random() * 6) + 1;
 }
} */
