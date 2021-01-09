class Boll{
    constructor(size){
        this.size = size
        this.imgList = [
            './img1.jpeg',
            './img2.jpeg',
            './img3.jpeg',
            './img4.jpeg',
            './img5.jpeg',
            './img6.jpeg',
            './img7.jpeg',
            './img8.jpeg',
            './img9.jpeg',
            './img10.jpeg',
        ]
    }
    
    createHexagon(){
        let hex = document.createElement('div')
        hex.className = 'hex'
        return hex
    }
    
    createPentagon(){
        let pent = document.createElement('div')
        pent.className = 'pent'
        return pent
    }

    drawHex(hex,i){
        hex.style.clipPath = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"
        hex.style.background = `url(./img${i+1}.jpeg)`
    }

    drawPent(pent,i){
        pent.style.clipPath = "polygon(50% 0px, 100% 42%, 130.9px 100%, 30.9px 100%, 0px 42%)"
        pent.style.background = `url(./img${i+1}.jpeg)`
    }

    getRandomColor(){
        let i =  Math.floor(Math.random()*5)
        let list = ['blue','yellow','green','red','orange','brown','powderblue']
        return list[i]
    }

    arrangeHex(){
        let list = []
        for(let i=1;i<5;i++){
            for(let j=0;j<5;j++){
                let hex = this.createHexagon()
                this.drawHex(hex,((i-1)*5 + j))
                if(i == 1){
                    hex.style.transform = `rotateZ(${j*72}deg) rotateY(40deg) translateZ(210px)`
                }
                if (i == 2){
                    hex.style.transform = `rotateZ(${j*72}deg) rotateY(85deg) translateZ(210px)`
                }
                if (i == 3){
                    hex.style.transform = `rotateZ(${36*(2*j+1)}deg) rotateY(109deg) translateZ(214px)`
                }
                if (i == 4){
                    hex.style.transform = `rotateZ(${36*(2*j+1)}deg) rotateY(200deg) translateZ(210px)`
                }
                list.push(hex)
            }
        }
        return list
    }

    arrangePent(){
        let list = []
        for(let i=0;i<7;i++){
            let pent = this.createPentagon()
            this.drawPent(pent,i)
            if(i == 0){
                pent.style.transform = 'rotateZ(-17deg) translateZ(215px) translateY(10px)'
            }
            if(i>0 && i<6){
                pent.style.transform = `rotateZ(${i*72}deg) rotateY(40deg) translateZ(215px)`
            }
            list.push(pent)
        }
        return list
    }

    render(){
        let boll = document.createElement('div')
        boll.className = 'boll'
        this.arrangeHex().forEach(hex => {
            boll.appendChild(hex)
        })
        this.arrangePent().forEach(pent => {
            boll.appendChild(pent)
        })
        return boll
    }
}

b = new Boll()
gallery.appendChild(b.render())