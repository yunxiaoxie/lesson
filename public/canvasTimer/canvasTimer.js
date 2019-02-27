function Clock() {
    var canvas = document.getElementById('canvas');
    this.cxt = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 100;
    this.casW = canvas.width;
    this.casH = canvas.height;
    this.R = this.casH/20-1; //100=2(r+1)*10
    this.cxt.fillStyle = '#ddd';
    this.cxt.fillRect(0,0,500,100);
}
Clock.prototype.init = function(num, distance){
    this.cxt.fillStyle = "#000";
    for(var i=0; i<digit[num].length;i++) { //行数
        for(var j=0; j<digit[num][i].length; j++) {  //列数
            if(digit[num][i][j] == 1) {
                this.cxt.beginPath();
                this.cxt.arc(15*(this.R+1)*distance+j*2*(this.R+1)+(this.R+1), i*2*(this.R+1)+(this.R+1), this.R, 0, Math.PI*2, false);
                this.cxt.closePath();
                this.cxt.fill();
            }
        }
    }
}
Clock.prototype.getTime = function(){
    var data = [];
    var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
    //存储时间数字，由十位小时、个位小时、冒号、十位分钟、个位分钟、冒号、十位秒钟、个位秒钟这7个数字组成
    data.push(temp[1],temp[2],10,temp[3],temp[4],10,temp[5],temp[6]);
    //重置画布宽度，达到清空画布的效果
    canvas.height = 100;
    for(var i=0; i<data.length; i++) {
        clock.init(data[i], i);
    }
}
var clock = new Clock();
//for(var i=0;i<5;i++) {
//    clock.init(i, i);
//}
setInterval(()=>{
    clock.getTime();
}, 100);
