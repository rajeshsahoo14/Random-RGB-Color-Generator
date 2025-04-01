let btn=document.querySelector('button');
let h1=document.querySelector('h1');
let div=document.querySelector('div');
btn.addEventListener("click",function(){
    let randomColour=randomColorGenerator();
    h1.innerText=randomColour;
    div.style.backgroundColor=randomColour;
    console.log("Hi,I m Pressed");
});
function randomColorGenerator(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);    
    let blue=Math.floor(Math.random()*256);
    
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
