import {snake_speed, getsnakeHead, snakeIntersection} from './snake.js';
import {update as  updateSnake } from './snake.js';
import { draw as drawSnake } from './snake.js';
import {update as updateFood , draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js';
let gameOver=false
const gameBoard=document.getElementById('game-board');
let lastRenderTime=0;
function main(currentTime){
    if(gameOver) {
       if(confirm('You lost , press to restart.. ')){
        window.location='./'
       }
    }
    const secondSinceLastRenderTime=(currentTime-lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    if(secondSinceLastRenderTime<1/snake_speed) return ;
    console.log('Render');
    lastRenderTime=currentTime;
    update();
    draw();
    checkDeath()
}

window.requestAnimationFrame(main);


function update(){
    updateSnake()
    updateFood()
}
function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
    gameOver = outsideGrid(getsnakeHead()) || snakeIntersection()
}

