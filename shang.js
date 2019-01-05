/*
* @Author: lenovo
* @Date:   2018-12-16 17:48:54
* @Last Modified by:   lenovo
* @Last Modified time: 2019-01-04 23:08:42
*/
//轮播
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var box=document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right')
var index=1;
var timer;
var isMoving=false;
box.onmouseover=function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-800*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left='-800px';
			index=1;
		}
		isMoving=false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left='-4800px';
			index=6;
		}
		isMoving=false;
	});
}
function navmove(){
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].className = "";
	}
	if(index>6){
		oNavlist[0].className="active";
	}
	else if(index<=0){
		oNavlist[5].className="active";
	}
	else{
		oNavlist[index-1].className="active";
	}
}
timer=setInterval(next,3000);
//充值
var s1=document.getElementById('s1');
var num1=document.getElementById('num1');
num1.innerHTML=s1.children[1].innerHTML;
s1.onclick=function(){
	for(var i=0;i<s1.children.length;i++){
		if(i==this.value){
			num1.innerHTML=s1.children[i].innerHTML;
		}
	}
}
//顶部悬浮
window.onload=function(){
	var top=document.getElementById("toppp");
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>100){
			toppp.style.position="fixed";
		}
		else{
			toppp.style.position="static";
		}
	}
}


var float1=document.getElementById("float1");
var float2=document.getElementById("float2");
var float3=document.getElementById("float3");
var float4=document.getElementById("float4");
var img0=document.getElementById("img0");
float1.onmouseover=function(){
	animate(float1,{right:0,top:76,opacity:100},function(){
				console.log(1)
			});
}
float1.onmouseout=function(){
	animate(float1,{right:-83,top:76,opacity:100},function(){
				console.log(1)
			});
}
float2.onmouseover=function(){
	animate(float2,{right:0,top:185,opacity:100},function(){
				console.log(1)
			});
}
float2.onmouseout=function(){
	animate(float2,{right:-83,top:185,opacity:100},function(){
				console.log(1)
			});
}
float3.onmouseover=function(){
	img0.style.width="90px";
	img0.style.height="90px";
	img0.style.marginLeft="15px";
	img0.style.marginTop="0px";
	img0.src="images/erwei.png";
	animate(float3,{right:0,top:330,opacity:100},function(){
				console.log(1)
			});
}
float3.onmouseout=function(){

	img0.style.width="24px";
	img0.style.height="24px";
	img0.style.marginLeft="14px";
	img0.style.marginTop="50px";
    img0.src="images/serwei.png"
	animate(float3,{right:-83,top:330,opacity:100},function(){
				console.log(1)
			});
}
float4.onmouseover=function(){
	animate(float4,{right:0,top:485,opacity:100},function(){
				console.log(1)
			});
}
float4.onmouseout=function(){
	animate(float4,{right:-83,top:485,opacity:100},function(){
				console.log(1)
			});
}
var ul = document.getElementById("ul");
function show() {
    var top = ul.offsetTop - 2; 
    ul.style.top = top + "px"; 
    if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
        ul.style.top = 0;
    }
}
var t = setInterval(show, 20);
var li = document.getElementById("ul").getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            li[i].onmouseout = function () {
            	t = setInterval(show, 20);

            };
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }
var fangda=document.getElementById("fangda");
fangda.onclick=function(){
	window.open(name=" https://lxbcc.github.io/webbigwork/shang2.html","_self");
}

