inputs = []
inputs2 = []
function getparagraph(){
for(var i = 1 ; i <=6 ; i++){
inputs.push(document.getElementById("t" + i).value);
inputs.join(". ")
document.getElementById("show").innerHTML = inputs.join(". ")
}
}
function getparagraph2(){
for(var i = 1 ; i <=6 ; i++){
    inputs2.push(document.getElementById("e" + i).value);
    inputs2.join(". ")
    document.getElementById("show2").innerHTML = inputs2.join(". ")
    }
}

