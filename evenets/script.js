console.log("hello");

const start = document.getElementById('start');
const end = document.getElementById('end');

const randomcolor= function(){
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let timeint=null; 
const startchangecolor = function(){
    const bgcolor= function(){
        document.body.style.backgroundColor=randomcolor();
    };

     if(!timeint)    timeint= setInterval(bgcolor,1000) ;
     
};
const stopchangingcolor=function(){
clearInterval(timeint);
timeint=null;
}
start.addEventListener('click' ,startchangecolor); 
end.addEventListener('click' ,stopchangingcolor); 
