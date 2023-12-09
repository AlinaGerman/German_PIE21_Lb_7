var canvas=document.getElementById('canvas')
var button=document.getElementById('start')

var ctx=canvas.getContext('2d')
var elements=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var help_matrix=[]
var matrix=[]
var win_matrix=[[1,5,9,13],[2,6,10,14],[3,7,11,15],[4,8,12,0]]

function mix(elements){
    let matrix=[]
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

function draw_tag(){
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[i].length;j++){
            draw_square(100*i, 100*j, matrix[i][j])
        }
    }
}

function find_positsion_empty(mat){
    var positsion_empty=[]
    for (let i=0;i<mat.length;i++){
        for (let j=0;j<mat[i].length;j++){
            if (mat[i][j]==0){
                positsion_empty[0]=i
                positsion_empty[1]=j
            }
        }
    }
    return positsion_empty
}
function move(x,y){
    let empty=find_positsion_empty(matrix)
    if (((empty[1]==y-1 || empty[1]==y+1) && (empty[0]==x)) || ((empty[0]==x-1 || empty[0]==x+1) && empty[1]==y)){
        matrix[empty[0]][empty[1]]=matrix[x][y]
        matrix[x][y]=0
    }
    if (win()){
        alert('win')
    }
}

function find_click(event){
    let line=Math.floor(event.clientX/100)
    let column=Math.floor(event.clientY/100)
    move(line,column)
    draw_tag()
    
    

}
function win(){
    /*if (matrix.toString()==win_matrix.toString()){
        alert('win')
    }*/
    return matrix.toString()==win_matrix.toString()
}
function start(){
    matrix = mix(elements)
    draw_tag()
}

button.addEventListener('click', start)
canvas.addEventListener('click', find_click)

var matrix=[[1,5,9,13],[2,6,11,10],[3,7,0,14],[4,8,12,15]]
draw_tag()
