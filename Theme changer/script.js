let b=document.getElementById("black");
let g=document.getElementById("green");
let y=document.getElementById("yellow");
let bl=document.getElementById("blue");
let dy=document.getElementById("bdy");
b.addEventListener('click',function1);
g.addEventListener('click',function2);
y.addEventListener('click',function3);
bl.addEventListener('click',function4);
ele = document.getElementById("row2");
txt_area = document.getElementById("text-area");

function function1(){
    dy.style.backgroundColor= "black";
    ele.style.backgroundColor= "black";
    txt_area.style.backgroundColor = "black";
    txt_area.style.color= "white";
    txt_area.style.border= "2px solid white";
}

function function2(){
    dy.style.backgroundColor= "#116530";
    ele.style.backgroundColor= "#116530";
    txt_area.style.backgroundColor = "#116530";
    txt_area.style.color= "black";
    txt_area.style.border= "2px solid black";
}

function function3(){
    dy.style.backgroundColor= "yellow";
    ele.style.backgroundColor= "yellow";
    txt_area.style.backgroundColor = "yellow";
    txt_area.style.color= "black";
    txt_area.style.border= "2px solid black";
}

function function4(){
    dy.style.backgroundColor= "#3cdfff";
    ele.style.backgroundColor= "#3cdfff";
    txt_area.style.backgroundColor = "#3cdfff";
    txt_area.style.color= "white";
    txt_area.style.border= "2px solid white";
}