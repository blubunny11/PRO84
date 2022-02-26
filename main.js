canvas= document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed alphabet key";
		console.log(aplhabetkey);
		img_image="Alpkey.png";
	    add();
		
		elseif((keyPressed <=48 && keyPressed>=57))
		numberkey();
		document.getElementById("d1").innerHTML="You pressed number key";
		console.log(numberkey);
		img_image="numkey.png";
		add();
		
		elseif((keyPressed <=37 && keyPressed>=40))
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed arrow key";
		console.log(arrowkey);
		img_image="Arrkey.png";
	    add();
		
		elseif((keyPressed == 17,18,27))
		specialkey();
		document.getElementById("d1").innerHTML="You pressed special key";
		console.log(specialkey);
		img_image="spkey.png";
	    add();

		elseif((keyPressed ==1,2,3,4 ))
		otherkey();
		document.getElementById("d1").innerHTML="You pressed random key";
		console.log(otherkey);
		img_image="otherkey.png";
	    add();


			
		

}


function aplhabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}	

function arrowkey()
{
	img_image="Arrkey.png"
	add();
}
function specialkey()
{
img_image="spkey.png";
add();
}

function otherkey()
{
	img_image="otherkey.png";
	add();
}

