canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_height=60;
rover_width=60;

rover_x=100;
rover_y=100;

background_img="mars.jpg";
rover_img="rover.png";

function add(){
bi1=new Image();
bi1.onload=uploadbg;
bi1.src=background_img;

ri=new Image();
ri.onload=uploadbg1;
ri.src=background_img;
}

function uploadbg(){
    ctx.drawImage(bi1,0,0,canvas.width, canvas.height);
    
}

function uploadbg1(){
    ctx.drawImage(ri,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    key_pressed=e.keyCode;
    console.log(key_pressed);
    
   
    if(key_pressed=='38'){
        console.log("up");
        up();
    }

    if(key_pressed=='40'){
        console.log("down");
        down();
    }

    if(key_pressed=='37'){
        console.log("left");
        left();
    }

    if(key_pressed=='39'){
        console.log("right");
        right();
    }
}