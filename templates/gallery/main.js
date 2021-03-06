let gallery = document.querySelector('.gallery')

var txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam praesentium asperiores consequatur commodi corporis accusamus doloremque.";
var i=0;
function typing() {
    
    if(i < txt.length)
    {
    document.getElementById('type').innerHTML+=txt.charAt(i);
    i++;
    setTimeout(typing,150);
    }
}
typing();

function createHex(side_len,image_index){
    let hex = document.createElement('div')
    hex.className = 'hex'
    hex.style.width = `${1.732*side_len}px`
    hex.style.height = `${2*side_len}px`
    hex.style.clipPath = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"
    hex.style.backgroundImage = `url(./img/img${image_index}.jpeg)`
    return hex
}

function getPosArray(){
    arr = [
        [0,0,0,0,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,1,1,1],
        [0,0,1,1,1,0,0]
    ]
    return arr
}

function arrangeHex(side_len){
    let hex_width = 1.732*side_len + 10
    let hex_height = 2*side_len - 40
    let hex_count_x = Math.floor(screen.width/hex_width)
    let hex_count_y = Math.floor(screen.height/hex_height) 
    let pos_array = getPosArray()
    let index = 0
    for(let i=0;i<hex_count_x;i++){
        for(let j=0;j<hex_count_y;j++){
            hex = createHex(side_len,index)
            if(j%2 == 1){  
                hex.style.transform = `translateX(${i*hex_width + hex_width/2}px) translateY(${j*hex_height}px)`
            }else{
                hex.style.transform = `translateX(${i*hex_width}px) translateY(${j*hex_height}px)`
            }
            if(pos_array[j][i] == 1){
                gallery.appendChild(hex)
                index += 1
            }
        }
    }
}

arrangeHex(100)

document.querySelectorAll('.hex').forEach(hex => {  
    hex.addEventListener('mouseenter',() => {
        hex.style.transform += 'scale(1.1)'
    })
    hex.addEventListener('mouseleave',() => {
        hex.style.transform += 'scale(.91)'
    })
})