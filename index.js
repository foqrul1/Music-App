window.addEventListener("load", ()=>{
                        
const sound  = document.querySelectorAll(".music");                     
const pads  = document.querySelectorAll(".pads div");  
const visual = document.querySelector(".visual");
const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3"
];
console.log(sound[5]);
//console.log("Hello World");
//lets get going with the sound here
var count=0;
pads.forEach((pad, index)=>{
    pad.addEventListener('click', function(){
        sound[index].currentTime = 0;
        sound[index].play();
        
        createBuble(index);
        
    });
});
//Create a function that makes bubles
const createBuble = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("foqrul", function(){
       visual.removeChild(this); 
    });
};
});
/*Have to Learn
    1. How tot work animation
    2. add event listener
    3. style css frame key jump
    4. what is flex in css

*/