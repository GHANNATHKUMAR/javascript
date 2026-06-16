import { onSnake , expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
let food=getRnadomFoodPosition()
const Expansion_Rate=1;

export function update(){
    if(onSnake(food)){
        expandSnake(Expansion_Rate)
        food=getRnadomFoodPosition()
    }
}
export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    gameBoard.appendChild(foodElement);
}

function getRnadomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition==null || onSnake(newFoodPosition)){
        newFoodPosition=randomGridPosition()
    }
    return newFoodPosition
}

