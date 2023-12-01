var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
var elements=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function mix(elemnents){
    var new_elements=[]
    var ids=[]
    while (ids.length<elements.length){
        let id=Math.round(Math.random()*10)
        if (id>0 && id<elements.length && !(ids.includes(id))){
            ids.push(id)
        }
    }
    console.log(ids)
    
}
mix(elements)
