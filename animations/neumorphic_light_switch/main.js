let base = document.querySelector('.base')
let toggle = document.querySelector('.toggle')

base.addEventListener('mousemove',move)

function move(e){
    toggle.style.top = `${e.offsetY}px`
}