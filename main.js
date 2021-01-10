canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
a = "mars.jpg";
b = "rover.png";
rWidth = 100;
rHeight = 90;
roverX = 10;
roverY = 10;
function rover(){
    a1 = new Image();
    a1.onload=mars;
    a1.src=a;
    b1 = new Image();
    b1.onload=rImage;
    b1.src=b;
}
function mars(){
    ctx.drawImage(a1,0,0,canvas.width,canvas.height);
}
function rImage(){
    ctx.drawImage(b1,roverX,roverY,rWidth,rHeight);
}
window.addEventListener("keydown", keydownfunction);
function keydownfunction(e) 
{ 
    keyPressed = e.keyCode; 
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
}
function up(){
    if(roverY>=0){
        roverY = roverY - 10;
        console.log("When up arrow is pressed , x position of rover=" + roverX + " | Y position of rover " + roverY);
        mars();
        rImage()
        }
        }
function down(){
 if(roverY<=500){
                roverY = roverY + 10;
                console.log("When up arrow is pressed , x position of rover=" + roverX + " | Y position of rover " + roverY);
                mars();
                rImage()
                }
                }
function left(){
                    if(roverX>=0){
                        roverX = roverX - 10;
                        console.log("When up arrow is pressed , x position of rover=" + roverX + " | Y position of rover " + roverY);
                        mars();
                        rImage()
                        }
                        }
                function right(){
                 if(roverX<=700){
                                roverX = roverX + 10;
                                console.log("When up arrow is pressed , x position of rover=" + roverX + " | Y position of rover " + roverY);
                                mars();
                                rImage()
                                }
                                }           