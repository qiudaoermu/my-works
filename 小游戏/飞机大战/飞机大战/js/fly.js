//通过字符类型获取元素节点
function $( para,obj ){
				var val = typeof para;
				typep = val.toLowerCase();
				if (typep == "string")
				{
					if (para.charAt(0)=='#')
					{para=para.substring(1)

					 return document.getElementById(para)

					}else if (para.charAt(0)=='.')
						{para=para.substring(1)
						var obj = obj||document;
						var all = obj.getElementsByTagName("*");
						var arrkk = [];
						for (var i=0;i<all.length;i++ )
						{
							var arr = all[i].className.split(" ");
							for (var j=0;j<arr.length; j++)
							{
								if (arr[j] == para)
								{
									arrkk.push(all[i]);
								}
							}
									
						}
						return arrkk[0];
					};
					
				}
				else if (typep == "function")
				{
					window.onload = para;
				}
}

	
			//运动框架


function getStyle(obj,attr){
		if (obj.currentStyle)
		{
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}

}
/*元素样式获取获取封装
	function getStyle(obj,attr){
					attr = attr.split(" ");
					attr = attr.join('');
						//alert(0)
					if (obj.currentStyle)
					{
					
						return obj.currentStyle[attr];
					}else{
						return getComputedStyle(obj,false)[attr]
					}
				
				
					//alert(333)
					// return attr .currentStyle? attr .currentStyle[value]: getComputedStyle(attr)[value]
			
			}*/
function move( obj , mJson , time , cv , fn ){
				
	if (typeof civ=='undefined')
	{	
		time = time||2000;
		civ="linear";
		
	}//time,civ,fn都不存在和time存在civ,fn不存在两种情况
	if (typeof time =='function')
	{
		time = 2000;
		fn= time;
		civ = "linear"
	}//time,civ都不存在，fn存在
	if (typeof time =='string')
	{
		civ = time;
		fn = civ;
	}//time不存在 civ fn存在
	if (typeof civ=='function')
	{
		
		fn = civ;
		civ="linear"
		
	}
	//civ不存在，time,fn存在
				 
				var iB = {};
				var startTime = (new Date()).getTime();
				for ( var attr in mJson )
				{
					iB[attr] = parseInt( getStyle(obj , attr) );
				};

				obj.timer = setInterval(function(){
					var nowTime = (new Date()).getTime();
					var t = Math.min( nowTime - startTime , time ); // 3980 4002
					for ( var attr in mJson )
					{
						var value = Tween[cv]( t , iB[attr] , parseInt( mJson[attr] ) - iB[attr] , time );
						obj.style[attr] = value + 'px';
					}
					if ( t == time )
					{
						clearInterval( obj.timer );
						fn && fn.call(obj);
					}
				},13);

				function getStyle( obj , attr ){
					return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
				};
				/*function now(){
					return 
				}*/

				var Tween = {
					linear: function (t, b, c, d){  //匀速
						return c*t/d + b;
					},
					easeIn: function(t, b, c, d){  //加速曲线
						return c*(t/=d)*t + b;
					},
					easeOut: function(t, b, c, d){  //减速曲线
						return -c *(t/=d)*(t-2) + b;
					},
					easeBoth: function(t, b, c, d){  //加速减速曲线
						if ((t/=d/2) < 1) {
							return c/2*t*t + b;
						}
						return -c/2 * ((--t)*(t-2) - 1) + b;
					},
					easeInStrong: function(t, b, c, d){  //加加速曲线
						return c*(t/=d)*t*t*t + b;
					},
					easeOutStrong: function(t, b, c, d){  //减减速曲线
						return -c * ((t=t/d-1)*t*t*t - 1) + b;
					},
					easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
						if ((t/=d/2) < 1) {
							return c/2*t*t*t*t + b;
						}
						return -c/2 * ((t-=2)*t*t*t - 2) + b;
					},
					elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
						if (t === 0) { 
							return b; 
						}
						if ( (t /= d) == 1 ) {
							return b+c; 
						}
						if (!p) {
							p=d*0.3; 
						}
						if (!a || a < Math.abs(c)) {
							a = c; 
							var s = p/4;
						} else {
							var s = p/(2*Math.PI) * Math.asin (c/a);
						}
						return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
					},
					elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
						if (t === 0) {
							return b;
						}
						if ( (t /= d) == 1 ) {
							return b+c;
						}
						if (!p) {
							p=d*0.3;
						}
						if (!a || a < Math.abs(c)) {
							a = c;
							var s = p / 4;
						} else {
							var s = p/(2*Math.PI) * Math.asin (c/a);
						}
						return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
					},    
					elasticBoth: function(t, b, c, d, a, p){
						if (t === 0) {
							return b;
						}
						if ( (t /= d/2) == 2 ) {
							return b+c;
						}
						if (!p) {
							p = d*(0.3*1.5);
						}
						if ( !a || a < Math.abs(c) ) {
							a = c; 
							var s = p/4;
						}
						else {
							var s = p/(2*Math.PI) * Math.asin (c/a);
						}
						if (t < 1) {
							return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
									Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
						}
						return a*Math.pow(2,-10*(t-=1)) * 
								Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
					},
					backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
						if (typeof s == 'undefined') {
						   s = 1.70158;
						}
						return c*(t/=d)*t*((s+1)*t - s) + b;
					},
					backOut: function(t, b, c, d, s){
						if (typeof s == 'undefined') {
							s = 3.70158;  //回缩的距离
						}
						return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
					}, 
					backBoth: function(t, b, c, d, s){
						if (typeof s == 'undefined') {
							s = 1.70158; 
						}
						if ((t /= d/2 ) < 1) {
							return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
						}
						return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
					},
					bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
						return c - Tween['bounceOut'](d-t, 0, c, d) + b;
					},       
					bounceOut: function(t, b, c, d){
						if ((t/=d) < (1/2.75)) {
							return c*(7.5625*t*t) + b;
						} else if (t < (2/2.75)) {
							return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
						} else if (t < (2.5/2.75)) {
							return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
						}
						return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
					},      
					bounceBoth: function(t, b, c, d){
						if (t < d/2) {
							return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
						}
						return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
					}
				}
			};
function gtime(){
	 var  time = new Date()
	 
		var year = time.getFullYear();
		var month = time.getMonth()+1;
		var date = time.getDate();
		var day = time.getDay();
		var hour = time.getHours();
		var minute = time.getMinutes();
		var  second = time.getSeconds();
		switch (day)
		{
			
		case 0:
			day="星期天";
			break;
		case 1:
			day="星期一";
			break;
		case 2:
			day="星期二";
			break;
		case 3:
			day="星期三";
			break;
		case 4:
			day="星期四";
			break;
		case 5:
			day="星期五";
			break;
		case 6:
			day="星期六";
			break;
		
		}
		function add(value){
			if (value<10)
			{
				value = "0"+value
			}
			return value;
		}

		add(hour);
		add(minute);
		add(second);
	document.body.innerHTML = year+"年"+month+"月"+date+"日"+day+add(hour)+":"+add(minute)+":"+add(second)

	}