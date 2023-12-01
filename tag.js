var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
var elements=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var help_matrix=[]
var matrix=[]

function mix(elements){
    for (let i=0;i<elements.length;i++){
        let id=Math.floor(Math.random()*(i+1))
        let current=elements[i]
        elements[i]=elements[id]
        elements[id]=current
    }
    for (let i=0;i<elements.length;i+=4){
        help_matrix[i]=elements.slice(i, i+4)
    }
    for (let i=0;i<help_matrix.length;i++){
        if (help_matrix[i]!=undefined){
            matrix.push(help_matrix[i])
        }
    }
    return matrix
}
console.log(mix(elements))

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
        if (number<10){
            ctx.fillText(number,x+35, y+70)
        }else{
            ctx.fillText(number, x+15, y+70)
        }
    }    
}

//draw_square(200, 200, 4)
function draw_tag(elements){
    for (let i=0;i<elements.length;i++){
        
    }
}
