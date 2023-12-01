var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
var elements=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function mix(elements){
    for (let i=0;i<elements.length;i++){
        let id=Math.floor(Math.random()*(i+1))
        let current=elements[i]
        elements[i]=elements[id]
        elements[id]=current
    }
    return elements
}

function draw_square(x, y, number){
    ctx.fillStyle='black'
    ctx.fillRect(x, y, 100, 100)
    if (number==0){
        ctx.fillStyle='white'
        ctx.fillRect(x+5, y+5, 90, 90)
    }else{
        ctx.fillStyle='yellow'
        ctx.fillRect(x+5, y+5, 90, 90)
        ctx.font='60px Arial'
        ctx.fillStyle='black'
        ctx.fillText(number,x+35, y+70)
    }
    
}

draw_square(200, 200, 7)
