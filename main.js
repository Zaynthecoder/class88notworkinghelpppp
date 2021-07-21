var canvas = new fabric.Canvas('myCanvas');
block_image_width = 50;

player_x = 200;
player_y = 300;

var player_object = "";

function player_update() {
    fabric.Images.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
            });
            canvas.add(player_object)
    })
}

function new_image(get_image) {
    fabric.Images.fromURL(get_image, function(Img) {
        block_image_object = Img;

        player_object.scaleToWidth(block_image_width);
        player_object.scaleToHeight(block_image_height);
        player_object.set({
            top:player_y,
            left:player_x
            });
            canvas.add(block_image_object)
    })
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed=='80') {
        console.log("p and shift keys pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }

    if(e.shiftKey == true && keyPressed =='77') {
        console.log("m and shift keys pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '87') {
        new_image('bricks.jpg');
        console.log("w (bricks)");
    }

    if(keyPressed == '84') {
        new_image('wood.jpg');
        console.log("t (wood)");
    }

    if(keyPressed == '87') {
        new_image('bricks.jpg');
        console.log("w (bricks)");
    }

    if(keyPressed == '68') {
        new_image('leaves.png');
        console.log("d (leaves)");
    }

    if(keyPressed == '89') {
        new_image('bricks.jpg');
        console.log("y (yellow bricks)");
    }

    if(keyPressed == '82') {
        new_image('roof.jpg');
        console.log("r (roof)");
    }

    if(keyPressed == '67') {
        new_image('stone.jpg');
        console.log("c (stone/clouds)");
    }

   






}

function up() {
    if(player_y>=0) {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When up arrow is pressed , x =" + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_y<=500) {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When down arrow is pressed , x =" + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if(player_x>=0) {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When left arrow is pressed , x =" + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function right() {
    if(player_x<=500) {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When right arrow is pressed , x =" + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}