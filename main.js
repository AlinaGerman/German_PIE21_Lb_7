var canvas=document.getElementById('canvas');
var button=document.getElementById('start');
var ctx=canvas.getContext('2d');

var win_matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];

function mix(){ //функция перемешивает одномерный массив и составляет из него матрицу
    let elements=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let matrix=[];
    let mixed_elements=[];
    
    while (elements.length>0){
        id=Math.floor(elements.length*Math.random());
        mixed_elements.push(elements[id]);
        elements.splice(id,1);
    }
    for (let i=0;i<mixed_elements.length;i+=4){
        if (mixed_elements.slice(i, i+4)!=undefined){
            matrix.push(mixed_elements.slice(i, i+4));
        }
    }
    return matrix;
}

function draw_square(x, y, number){ //функция рисует квадрат с числом внутри
    ctx.fillStyle='black';
    ctx.fillRect(x, y, 100, 100);
    if (number==0){
        ctx.fillStyle='white';
        ctx.fillRect(x+5, y+5, 90, 90);
    }else{
        ctx.fillStyle='paleturquoise';   //lightblue lightcyan paleturquoise
        ctx.fillRect(x+5, y+5, 90, 90);
        ctx.font='60px Arial';
        ctx.fillStyle='black';
        if (number<10){
            ctx.fillText(number,x+35, y+70);
        }else{
            ctx.fillText(number, x+15, y+70);
        }
    }
}

function draw_tag(){ //функция проходится по матрице и вызывает функцию рисования квадратов
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[i].length;j++){
            draw_square(100*j, 100*i, matrix[i][j]);
        }
    }
    setTimeout(win, 1500);
}

function find_position_empty(matr){ //функция находит координаты пустого элемента
    let position_empty={};
    for (let i=0;i<matr.length;i++){
        for (let j=0;j<matr[i].length;j++){
            if (matr[i][j]==0){
                position_empty.x=i;
                position_empty.y=j;
            }
        }
    }
    return position_empty;
}
function move(x,y){ //функция проверяет можно подвинуть квадрат, если можно, то меняет местами элементы в матрице
    let empty=find_position_empty(matrix);
    if (((empty.y==y-1 || empty.y==y+1) && empty.x==x) || ((empty.x==x-1 || empty.x==x+1) && empty.y==y)){
        matrix[empty.x][empty.y]=matrix[x][y];
        matrix[x][y]=0;
    }
    return matrix;
}

function find_click(event){ //функция находит ячецку, по которой был совершен "клик"
    let line=Math.floor(event.clientY/100);
    let column=Math.floor(event.clientX/100);
    move(line,column);
    draw_tag();
}
function win(){ // функция выводит сообщение о победе
    if (matrix.toString()==win_matrix.toString()){
        ctx.clearRect(5, 5, 90, 90);
        ctx.fillStyle='pink';
        ctx.fillRect(5, 5, 390, 390);
        ctx.font='50px Arial';
        ctx.fillStyle='black';
        ctx.fillText('Вы выиграли!', 40, 215);
    }
}
function restart(){ //функция начала игры заново
    matrix = mix();
    draw_tag();
}

button.addEventListener('click', restart);
canvas.addEventListener('click', find_click);

var matrix=[[1,2,3,4],[5,6,7,8],[9,11,0,12],[13,10,14,15]];
draw_tag();
