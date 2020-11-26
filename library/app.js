var el_hitarea = document.getElementById('hitarea');
let canvas;
let scrx,scry;

canvas = document.getElementById('sample');
getScreenSize();
canvas.width = scrx-20;
canvas.hright = scry-20;

var ctx = canvas.getContext('2d');
let x = canvas.width/2;
let y = canvas.height/2;

let part;
let partView =[];

window.onload = ()=>{
	part = canvas.width/10;
	
	for(let i=0;i<10;i++){
		if(i==0){
			partView[i] = 0 + part;
		}else{
			partView[i] = partView[i-1] + part;
		}
	}
  let timer = null;
  
  function event(){
	  
	  let chara = new Image();
	  if(x <= partView[0]){
		chara.src = "image/picture1/Movie141.jpg"; 
	  }else if(partView[0] > x && x <= partView[1]){
		chara.src = "image/picture1/Movie131.jpg"; 	  
	  }else if(partView[1] > x && x <= partView[2]){
		chara.src = "image/picture1/Movie121.jpg";
	  }else if(partView[2] > x && x <= partView[3]){
		chara.src = "image/picture1/Movie111.jpg"; 	  
	  }else if(partView[3] > x && x <= partView[4]){
		chara.src = "image/picture1/Movie101.jpg";
	  }else if(partView[4] > x && x <= partView[5]){
		chara.src = "image/picture1/Movie091.jpg"; 	  
	  }else if(partView[5] > x && x <= partView[6]){
		chara.src = "image/picture1/Movie081.jpg";
	  }else if(partView[6] > x && x <= partView[7]){
		chara.src = "image/picture1/Movie071.jpg"; 	  
	  }else if(partView[7] > x && x <= partView[8]){
		chara.src = "image/picture1/Movie061.jpg";
	  }else if(partView[8] > x && x <= partView[9]){
		chara.src = "image/picture1/Movie051.jpg"; 	  
	  }
	  
	  chara.onload = () => {

	  let imgWid = chara.width;
	  let imgHgt = chara.height; 

	  let canvasWid = canvas.width;
	  let canvasHgt = canvas.height;
	  let canvasRate = canvasHgt / canvasWid;
	  
	  let imgRate = imgHgt / imgWid;
	  
	  if(imgRate <= canvasRate){
		var reWidth = canvasWid;
		var reRate =  canvasWid / imgWid;
		var reHeight = reRate * imgHgt;
	  }else{
		reHeight =  canvasHgt;
		reRate = canvasHgt / imgHgt;
		reWidth = reRate * imgWid;
	  }
		ctx.drawImage(chara, 0, 0, reWidth, reHeight);
	  };
  }
  
  timer = setInterval(event, 10);

};
function MouseMoveFunc(e){
    x = e.clientX - canvas.getBoundingClientRect().left;
    y = e.clientY - canvas.getBoundingClientRect().top;
	x　=　Math.round(x);
	//console.log("x:" + x);
	//console.log("y:" + y);
}
function TouchEventFunc(e){
    x = e.clientX - canvas.getBoundingClientRect().left;
    y = e.clientY - canvas.getBoundingClientRect().top;
	x　=　Math.round(x);
	//console.log("x:" + x);
	//console.log("y:" + y);	
}	
function getScreenSize() {

  console.log(" 画面サイズの横幅 ");
  scrx = window.parent.screen.width;
  //console.log(scrx);

  console.log(" 画面サイズの高さ ");
  scry = window.parent.screen.height;
  //console.log(scry);
}
if(canvas.addEventListener){
	canvas.addEventListener("mousemove" , MouseMoveFunc, false);
	canvas.addEventListener("touchmove", TouchEventFunc, false);
}
