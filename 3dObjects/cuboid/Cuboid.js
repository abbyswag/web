class Cuboid{
    constructor(length,width,height){
        this.length =  length
        this.width = width
        this.height = height
    }

    createSpace(){
        let space = document.createElement('div')
        space.className = 'space'
        return space
    }

    createSides(){
        let sidesTokens = ['front','back','left','right','top','bottom']
        let sides = []
        sidesTokens.forEach(token => {
            let side = document.createElement('div')
            side.className = `side ${token}`
            sides.push(side)
        })
        return sides
    }

    render(){
        let space = this.createSpace()
        let sides = this.createSides()
        sides.forEach((side,index) => {
            if(index == 0){
                side.style.transform = `translateZ(${this.height/2}px)`
                side.style.height = `${this.width}px`
                side.style.width = `${this.length}px`
                side.style.backgroundColor = 'blue'
            }
            else if(index == 1){
                side.style.transform = `translateZ(${-this.height/2}px)`
                side.style.height = `${this.width}px`
                side.style.width = `${this.length}px`
                side.style.backgroundColor = 'white'
            }
            else if(index == 2){
                side.style.transform = `rotateY(90deg) translateZ(${this.length/2}px)`
                side.style.height = `${this.width}px`
                side.style.width = `${this.height}px`
                side.style.backgroundColor = 'red'
            }
            else if(index == 3){
                side.style.transform = `rotateY(90deg) translateZ(${-this.length/2}px)`
                side.style.height = `${this.width}px`
                side.style.width = `${this.height}px`
                side.style.backgroundColor = 'yellow'
            }
            else if(index == 4){
                side.style.transform = `rotateX(90deg) translateZ(${this.width/2}px)`
                side.style.height = `${this.height}px`
                side.style.width = `${this.length}px`
                side.style.backgroundColor = 'green'
            }
            else{
                side.style.transform = `rotateX(90deg) translateZ(${-this.width/2}px)`
                side.style.height = `${this.height}px`
                side.style.width = `${this.length}px`
                side.style.backgroundColor = 'orange'
            }
            space.appendChild(side)
        })
        return space
    }
}

let cuboid = new Cuboid(100,100,100)
document.querySelector('.root').appendChild(cuboid.render())