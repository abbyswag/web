let gallery = document.querySelector('.gallery')
let carousel = document.querySelector('.carousel')

function createHex(size,i){
    let hex = document.createElement('div')
    hex.style.position = 'absolute'
    hex.style.width = `${1.732*size}px`
    hex.style.height = `${2*size}px`
    hex.style.clipPath = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"
    hex.style.backgroundImage = `url(./img${i}.jpeg)`
    return hex
}

function arrangeHex(size){
    for(let i=0;i<9;i++){
        hex = createHex(size,i)
        hex.style.transform = `rotateY(${40*i}deg) translateZ(${470}px)`
        carousel.appendChild(hex)
    }
}

arrangeHex(200)

previousX = 0
gallery.addEventListener('mousemove',(e) => {
    if(e.offsetX - previousX < 0){
        carousel.style.transform += `rotateY(${-e.offsetX/500}deg)`
    }else{
        carousel.style.transform += `rotateY(${e.offsetX/500}deg)`
    }
    previousX = e.offsetX
})