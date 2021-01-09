function createsquare() {
    const colors = ['#2196f3','#e91e63','#ffeb3b','#74ff1d'];
    const background = document.querySelector('.background');
    const square = document.createElement('span');

    var size=Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top= Math.random()* innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random()* colors.length)];
    square.style.background =bg;
    if(Math.random()*2 < 1)
    square.style.borderRadius="50%";

    background.appendChild(square);
    
    setTimeout(()=>{
        square.remove()
    },5000)
   // square.addEventListener("click",square.remove());
}
setInterval(createsquare,100)
var sp=document.getElementsByTagName('span');
//sp.addEventListener("click",sp.remove());