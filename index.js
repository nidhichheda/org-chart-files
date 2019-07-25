function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  
    ctx.fillStyle = '#e85d6d';
    ctx.fillRect(525, 120, 200, 60);
    ctx.fillStyle = '#ad3240';
    ctx.fillRect(400, 225, 200, 60);
    ctx.fillRect(650, 225, 200, 60);
    
    //middle path
    ctx.beginPath();
    ctx.moveTo(623, 205);
    ctx.lineTo(623, 180);
    ctx.closePath();
    ctx.stroke();
    
    //left path
    ctx.beginPath();
    ctx.moveTo(523, 225);
    ctx.lineTo(523, 205);
    ctx.closePath();
    ctx.stroke();
    
    //right path
    ctx.beginPath();
    ctx.moveTo(723, 225);
    ctx.lineTo(723, 205);
    ctx.closePath();
    ctx.stroke();
    
    //join path
    ctx.beginPath();
    ctx.moveTo(523, 205);
    ctx.lineTo(723, 205);
    ctx.closePath();
    ctx.stroke();
    
    //add middle text
    ctx.fillStyle = 'black';
    ctx.font = '20px serif';
    ctx.fillText('Middle Node', 580, 155);
    
    //add left text
    ctx.fillStyle = 'black';
    ctx.font = '20px serif';
    ctx.fillText('Left Node', 450, 260);
    
    //add right text
    ctx.fillStyle = 'black';
    ctx.font = '20px serif';
    ctx.fillText('Right Node', 700, 260);
    
    
  }
}
