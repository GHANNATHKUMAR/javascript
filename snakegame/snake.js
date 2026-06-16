import { getInputDirection } from "./input.js";

export const snake_speed=1;
let newSegments=0
const snakeBody=[{x:10,y:11},{x:11,y:11},{x:12,y:11},{x:13,y:11}]
export function update(){
    addsegments()
    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]={...snakeBody[i]};
    }
    const inputDirection = getInputDirection();
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement=document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount){
    newSegments+=amount
}
export function onSnake(position,{ignoreHead=false}={}){
    return snakeBody.some((segment,index)=>{
        if(ignoreHead && index==0) return false
        return equalPositions(segment,position)
    })
}
function equalPositions(pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y
}

export function getsnakeHead(){
    return snakeBody[0]
}
export function snakeIntersection(){
    return onSnake(snakeBody[0],{ignoreHead:true})
}

function addsegments(){
    for(let i=0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegments=0
}