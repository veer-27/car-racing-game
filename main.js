canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

lanborgihini_width=120;
lamborghini_height=70;
lamborghini_image="lamborghini.jpg";
lamborghini_x=10;
lamborghini_y=10;

bugati_width=120;
bugati_height=70;
bugati_image="bugati.jpg";
bugati_x=10;
bugati_y=100;

function Add() {
    background_imgtag=new Image();
    background_imgtag.onload=uplodebackground;
    background_imgtag.src = background_image;
    background_image = "racing.jpg";

   lamborghini_imgtag=new Image();
    lamborghini_imgtag.onload=uplodelamborghini;
    lamborghini_imgtag.src = lamborghini_image;

    bugati_imgtag=new Image();
    bugati_imgtag.onload=uplodebugati;
    bugati_imgtag.src = bugati_image;
}

function uplodebackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uplodelamborghini() {
    ctx.drawImage(lamborghini_imgtag,lamborghini_x,lamborghini_y,lamborgini_width,lamborghini_height);
}
function uplodebugati() {
    ctx.drawImage(bugati_imgtag,bugati_x,bugati_y,bugati_width,bugati_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

keypressed=e.keyCode;
console.log(keypressed);
if(keypressed == '38'){
    up();
    console.log("up");
}
if(keypressed == '37'){
    left();
    console.log("left");
}
if(keypressed == '39'){
    right();
    console.log("right");
}
if(keypressed == '40'){
    down();
    console.log("down");
}

}
