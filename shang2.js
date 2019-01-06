/*
* @Author: lenovo
* @Date:   2018-12-22 18:00:43
* @Last Modified by:   lenovo
* @Last Modified time: 2019-01-05 14:58:00
*/
var spanl=document.getElementById("spanl");
var spanr=document.getElementById("spanr");
var sp0=document.getElementById("sp0");
var sp1=document.getElementById("sp1");
var img=document.getElementById("img1");
var Bimg = document.getElementById("Bimg");
sp0.style.border="2px solid #ff9003";
spanl.onclick=function(){
	img1.src="images/pp0.jpeg";
	Bimg.src="images/pp0.jpeg";
	sp0.style.border="2px solid #ff9003";
	sp1.style.border="2px solid white";
}
spanr.onclick=function(){
	img1.src="images/pp1.jpeg";
	Bimg.src="images/pp1.jpeg";
	sp0.style.border="2px solid white";
	sp1.style.border="2px solid #ff9003";
}
sp0.onclick=function(){
	img1.src="images/pp0.jpeg";
	Bimg.src="images/pp0.jpeg";
	sp0.style.border="2px solid #ff9003";
	sp1.style.border="2px solid white";
}
sp1.onclick=function(){
	img1.src="images/pp1.jpeg";
	Bimg.src="images/pp1.jpeg";
	sp0.style.border="2px solid white";
	sp1.style.border="2px solid #ff9003";
}



var hua1p2=document.getElementById("hua1p2");
var hua1p3=document.getElementById("hua1p3");
var hua3p2=document.getElementById("hua3p2");
hua1p2.style.background="url(images/duigou.png)47px 15px no-repeat";
hua1p2.onclick=function(){
	hua1p3.style.background="";
	hua1p2.style.background="url(images/duigou.png)47px 15px no-repeat";
	hua1p2.style.border="1px solid red";
	hua1p3.style.border="1px solid white";
	hua3p2.innerHTML='"150ml"'
}
hua1p3.onclick=function(){
	hua1p2.style.background="";
	hua1p3.style.background="url(images/duigou.png)47px 15px no-repeat";
	hua1p2.style.border="1px solid white";
	hua1p3.style.border="1px solid red";
	hua3p2.innerHTML='"200ml"'
}

var jian=document.getElementById("jian");
var yi=document.getElementById("yi");
var jia=document.getElementById("jia");
jian.onclick=function(){
	var x=yi.innerHTML;
	jia.style.cursor="pointer";
	jian.style.cursor="pointer";
	if(x>1){
		x--;
	}
	if(x==1){
		jian.style.cursor="not-allowed";
	}
	yi.innerHTML=x;
}
jia.onclick=function(){
	var x=yi.innerHTML;
	console.log(x);
	jia.style.cursor="pointer";
	jian.style.cursor="pointer";
	if(x<5){
		x++;
	}
	if(x==5){
		jia.style.cursor="not-allowed";
	}
	yi.innerHTML=x;
}


var addp2=document.getElementById("addp2");
var jiaru=document.getElementById("jiaru");
var jiaru2=document.getElementById("jiaru2");
var jiaru21=document.getElementById("jiaru21");
var cha=document.getElementById("cha");
addp2.onclick=function(){
	jiaru.style.display="block";
	jiaru2.style.display="block";
}
cha.onclick=function(){
	jiaru.style.display="none";
	jiaru2.style.display="none";
}
jiaru21.onclick=function(){
	jiaru.style.display="none";
	jiaru2.style.display="none";
}

    var l011 = document.getElementById("l011");
	var img22 = document.getElementById("img22");
	var slider = document.getElementById("slider");
	var Bimg = document.getElementById("Bimg");
	var love = document.getElementById("love"); 
	love.onmouseover=function(){
	    slider.style.display='block';
		img22.style.display='block';
 	}
	love.onmouseout=function(){
	    slider.style.display='none';
		img22.style.display='none';
 	}
  
    love.onmousemove=function(ev){
		var ev=ev||event; 
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		var oL=ev.clientX-l011.offsetLeft-slider.offsetWidth/2;
		var oT=ev.clientY-l011.offsetTop-slider.offsetHeight/2+st;
		  
		var oMaxw=love.offsetWidth-slider.offsetWidth;
		var oMaxh=love.offsetHeight-slider.offsetHeight;
		  
		oL=oL>oMaxw?oMaxw:oL<0?0:oL;
		oT=oT>oMaxh?oMaxh:oT<0?0:oT;
		
		slider.style.left = oL+'px';
		slider.style.top = oT+'px' ;
		
		var oBmaxw = img22.offsetWidth - Bimg.offsetWidth; 
		var oBmaxh = img22.offsetHeight - Bimg.offsetHeight; 
		Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
		Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
	}
