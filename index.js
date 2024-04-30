function rose(theta,n,d,amplitude){
    var k = n / d;
    var x = amplitude * Math.cos(k * theta) * Math.cos(theta);
    var y = amplitude * Math.cos(k * theta) * Math.sin(theta);
    return {"x":x,"y":y};
}

function point(x,y,canv){
    canv.beginPath();
    canv.arc(x,y,1,0,2*Math.PI,true);
    canv.stroke();
}

var t = 0;
var cont,width,height;
var n,d;
function loop(){
    window.requestAnimationFrame(loop);
    cont.translate(width/2,height/2);


    var p = rose(t,n,d,100.0);
    point(p.x,p.y,cont);

    cont.translate(-width/2, -height/2);

    t += 0.5;
}

function set(){
    var canv = document.getElementById("canva");
    cont = canv.getContext('2d');
    width = window.innerWidth;
    height = window.innerHeight;
    n = (document.getElementById('n').value);
    d = (document.getElementById('d').value);
    canv.width = width;
    canv.height = height;

    cont.strokeStyle = '#fff';
    loop();
}
