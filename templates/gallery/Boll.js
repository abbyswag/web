class Boll{
    constructor(size){
        this.size = size
    }
    
    createSquare(color){
        let sq = document.createElement('div')
        sq.style.position = 'absolute'
        sq.style.backgroundColor = color
        sq.style.width = `${this.sideLen}px`
        sq.style.height = `${this.sideLen}px`
        return sq
    }
    
    createHexagon(color){
        let hex = document.createElement('div')
        hex.className = 'hex'
        for(let i=0;i<6;i++){
            let sq = this.createSquare(color)
            sq.style.transform = `rotateZ(${60*i}deg) translateY(${0.366*this.size}px)`
            hex.appendChild(sq)
        }
        return hex
    }
    
    createPentagon(color){
        let pent = document.createElement('div')
        pent.className = 'pent'
        for(let i=0;i<5;i++){
            let sq = this.createSquare(color)
            sq.style.transform = `rotateZ(${72*i}deg) translateY(${0.2*this.size}px)`
            pent.appendChild(sq)
        }
        return pent
    }

    drawHex(hex){
        hex.style.clipPath = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"
        hex.style.background = 'url(demo1.jpeg)'
        return hex
    }

    drawPent(pent){
        pent.style.clipPath = "polygon(50% 0px, 100% 42%, 130.9px 100%, 30.9px 100%, 0px 42%)"
        pent.style.background = 'url(demo1.jpeg)'
        return pent
    }

    getRandomColor(){
        let i =  Math.floor(Math.random()*5)
        let list = ['blue','yellow','green','red','orange','brown','powderblue']
        return list[i]
    }

    arrangeHex(){
        let list = []
        for(let i=1;i<4;i++){
            for(let j=0;j<5;j++){
                let hex = this.createHexagon('blue')
                this.drawHex(hex)
                if(i == 1){
                    hex.style.transform = `rotateZ(${j*72}deg) rotateY(40deg) translateZ(210px)`
                }
                if (i == 2){
                    hex.style.transform = `rotateZ(${j*72}deg) rotateY(85deg) translateZ(210px)`
                }
                if (i == 3){
                    hex.style.transform = `rotateZ(${36*(2*j+1)}deg) rotateY(108deg) translateZ(210px)`
                }
                list.push(hex)
            }
        }
        return list
    }

    render(){
        let boll = document.createElement('div')
        boll.className = 'boll'
        this.arrangeHex().forEach(hex => {
            boll.appendChild(hex)
        })
        return boll
    }
}

b = new Boll()
gallery.appendChild(b.render())

































// }

// // arrangeHex(n){
// //     let list = []
// //     for(let j=-1;j<2;j++){
// //         for(let i=0;i<n;i++){
// //             let hex = this.createHexagon(this.getRandomColor())
// //             hex.style.transform = `rotateZ(${j*60}deg) rotateX(${i*360/n}deg) translateZ(${2.1*this.sideLen}px)`
// //             list.push(hex)
// //         }
// //     }
// //     return list
// // }

// arrangeRestHex(){
//     let list = []
//     for(let i=0;i<6;i++){
//         for(let j=1;j<3;j++){
//             let hex = this.createHexagon(this.getRandomColor())
//             hex.style.transform = `rotateZ(${i*60}deg) rotateY(${45*(i+0.5)}deg) translateZ(${2.1*this.sideLen}px)`
//             list.push(hex)
//         }
//     }
//     return list
// }

// createBoll(){
//     let boll = document.createElement('div')
//     boll.className = 'boll'
//     this.arrangeHex(8).forEach(hex => {
//         boll.appendChild(hex)
//     })
//     this.arrangeRestHex().forEach(hex => {
//         //boll.appendChild(hex)
//     })
//     return boll
// }


// }