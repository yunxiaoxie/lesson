function Clock(){
	var canvas = document.querySelector("#canvas");
	this.cxt = canvas.getContext('2d');
	this.cxt.fillStyle='#ddd';
	this.cxt.fillRect(0,0,700,100);
	this.r = canvas.height/20-1;
}

Clock.prototype.draw = function(num, idx){
	this.cxt.fillStyle='#000';
	for(var i=0;i<digit[num].length;i++){ //行
      for(var j=0;j<digit[num][i].length;j++) { //列
      	if (digit[num][i][j]===1) {
	      	this.cxt.beginPath();
	      	this.cxt.arc(70*idx+j*2*(this.r+1)+(this.r+1), i*2*(this.r+1)+(this.r+1), this.r, 0, Math.PI*2);
	      	this.cxt.closePath();
	      	this.cxt.fill();
	      }
      }
	}
}

Clock.prototype.timer = function(){
	var data = [];
	var timer = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
	data.push(timer[1],timer[2],10,timer[3],timer[4],10,timer[5],timer[6]);

	for(var i=0; i<data.length; i++) {
		this.draw(data[i], i);
	}
}

var clock = new Clock();
clock.timer();
// for(var i=0;i<9;i++) {
//   clock.draw(i);
// }