var canvas=document.getElementById('canvas')
var button=document.getElementById('start')

var ctx=canvas.getContext('2d')

var win_matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]]

function mix(){ //функция перемешивает одномерный массив и составляет из него матрицу
    let elements=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let matrix=[]
    let help_matrix=[]
    let mixed_elements=[]
    
    while (elements.length>0){
        id=(Math.floor(elements.length*Math.random()))
        mixed_elements.push(elements[id])
        elements.splice(id,1)
    }
    for (let i=0;i<mixed_elements.length;i+=4){
        help_matrix[i]=mixed_elements.slice(i, i+4)
    }
    for (let i=0;i<help_matrix.length;i++){
        if (help_matrix[i]!=undefined){
            matrix.push(help_matrix[i])
        }
    }
    return matrix
}

function draw_square(x, y, number){ //функция рисует квадрат с числами внутри
    ctx.fillStyle='black'
    ctx.fillRect(x, y, 100, 100)
    if (number==0){
        ctx.fillStyle='white'
        ctx.fillRect(x+5, y+5, 90, 90)
    }else{
        ctx.fillStyle='paleturquoise'   //lightblue lightcyan paleturquoise
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

function draw_tag(){ //функция проходится по матрице и вызывает функцию рисования квадратов
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[i].length;j++){
            draw_square(100*j, 100*i, matrix[i][j])
        }
    }
    setTimeout(win, 1800)
}

function find_positsion_empty(mat){ //функция находит координаты пустого элемента
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
function move(x,y){ //функция проверяет можно подвинуть квадрат, если можно, то меняет местами элементы в матрице
    let empty=find_positsion_empty(matrix)
    if (((empty[1]==y-1 || empty[1]==y+1) && (empty[0]==x)) || ((empty[0]==x-1 || empty[0]==x+1) && empty[1]==y)){
        matrix[empty[0]][empty[1]]=matrix[x][y]
        matrix[x][y]=0
    }
    
}

function find_click(event){ //функция наход ячецку, по которой был совершен "клик"
    let column=Math.floor(event.clientX/100)
    let line=Math.floor(event.clientY/100)
    move(line,column)
    draw_tag()
}
function win(){ // функция выводит сообщение о победе
    if (matrix.toString()==win_matrix.toString()){
        ctx.fillStyle='pink'
        ctx.fillRect(5, 5, 390, 390)
        ctx.font='50px Arial'
        ctx.fillStyle='black'
        ctx.fillText('Вы выйграли!',40, 215)
    }
}
function restart(){ //функция начало игры заново
    matrix = mix()
    draw_tag()
}

button.addEventListener('click', restart)
canvas.addEventListener('click', find_click)

var matrix=[[1,2,3,4],[5,6,7,8],[9,11,0,12],[13,10,14,15]]
draw_tag()
