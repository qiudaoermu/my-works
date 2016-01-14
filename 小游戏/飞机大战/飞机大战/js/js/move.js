function move(obj,iTarget,attr){
	var iSpeed=0;
	var timer =setInterval(function(){
		var iCur = parseInt(getStyle(obj,attr));
		if (!(iCur==iTarget))
		{
			iSpeed=Math.ceil((iTarget-iCur)/3);
			
		}
		if (iCur==iTarget)
		{
			clearInterval(timer);
		}else{
			obj.style[attr]=iCur+iSpeed+"px";		
		}
	},30)

}