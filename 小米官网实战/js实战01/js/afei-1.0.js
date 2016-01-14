



//*版权所有 飞飞 2015,12/1
// Able插件1.0版

	
(function(){
		function Able(str){
			var type = (typeof str).toLowerCase()
			if (type=='function')
			{
				window.onload = str
			}else{
				return new Init(str)
				
			}
		}
		function Init(str){
			
			this.thisObj = this.init(str);
			
			this.length = this.thisObj.length;
		}

		
		Init.prototype = {
		
			init : function(str){
				var arr = []
				var lowstr = (typeof str).toLowerCase();
				if (lowstr=="string")
				{	
					var newstr
					var strarr = str.split(" ");
					if (strarr.length==1)//如果字符串的长度是1
					{
						if (str.charAt(0)=="#")
						{	
							newstr = str.substring(1)
							arr[0] = document.getElementById(newstr)
						
						}
						else if (str.charAt(0)==".")
						{	
							newstr = str.substring(1)
							if (document.getElementsByClassName)
							{
								arr =  document.getElementsByClassName(newstr)
								
							}else 
							{	
								var all = document.getElementsByTagName("*")
								var reg = new RegExp("\\b"+newstr+"\\b")
								for (var i=0;i<all.length;i++ )
								{		
									if (reg.test(all[i].className))
									{
										arr.push(all[i])
									}
								}
								
							}
						}else{
							arr = document.getElementsByTagName(str)
						}

					}else//如果字符串的长度大于1
					{		
						
					
							for (var i=0;i<strarr.length-1;i++ )//遍历字符串长度
							{	
								

								var last = this.init(strarr[strarr.length-1]);
								var macthParent = strarr[i]

								for (var k=0;k<this.init(macthParent).length;k++ )//遍历父元素
								{	
									
									
									for (var j=0;j<last.length;j++ )//遍历子元素
									{	
										var lastparet = last[j].parentNode;

										
										if (aa(this.init(strarr[i])[k],last[j]))
										{	
											arr.push(last[j]);
										}
										
										function aa( p , obj ){
										
												if ( obj.parentNode == p )
												{
													return true;
												}
												
												obj = obj.parentNode;
												
											
										}
									}
								}
							}	
					}
					
				}else if (lowstr=="object")
				{
					if (str.length==undefined)
					{	
						arr[0] = str
					
					}else{
					   arr = str
					}
				};
				for (var i=0;i<arr.length ;i++ )
				{
					if (!arr[i].AbleMoveArr)
					{
						arr[i].AbleMoveArr = []
					}
				}
				
				return arr
				
			},	
			//点击事件
			click : function(fn){
				this.each(function(){
					this.onclick = fn
				})	
			},
			//遍历 获得的每个节点

			//显示事件
			show : function(){
					this.each(function(){
						this.style.display = "block"
					
					})		
				},
			//隐藏事件
			hide :function(){
					this.each(function(){
						this.style.display = "none"
					
					})
			},
			//鼠标放置事件
			hover : function(fn1,fn2){
					this.each(function(){
						this.onmouseenter = fn1
					
					})
					this.each(function(){
						this.onmouseleave = fn2
					
					})
			},
			//焦点获取事件
			focus :function(fn){
				this.each(function(){
						this.onfocus = fn
				
				})
				return this

			},
			//失去焦点事件
			blur : function(fn){
				this.each(function(){
						this.onblur = fn
				
				})
				return this
			},
			//得到样式
			getStyle : function(attr){
					
					return this.thisObj[0].currentStyle?this.thisObj[0].currentStyle[attr]:getComputedStyle(this.thisObj[0])[attr];
			},

			find : function(str){
				var all = this.thisObj;
				var theSon = Able(str).thisObj;
				for (var i=0;i<theSon.length;i++ )
				{	 
				 var objparent = theSon[i].parentNode;
				 if (objparent!=document.body)
				   {
						for (var j=0;j<all.length;j++ )
						{
							if (all[j]==objparent)
							{
								return Able(str)
							}
						}
						
				   }		
					
				}	
				return this
			

			},
			//向下滑动
			slidedown :function(timer){
				timer = timer||400;
				this.each(function(){
					var display = (Able(this).getStyle("display")).toLowerCase();
					var target,startval,time = null,This=this;
					var startime = new Date();
					if (display=="none")
					{
							this.style.display = "block";
							this.style.overflow ="hidden";
							target = parseInt(Able(this).getStyle("height"))
							this.style.height = "0px";
						time = this.AbleMoveArr[this.AbleMoveArr.length] = setInterval(function(){
							var nowtime = new Date();
							
							var prop = (nowtime - startime)/timer;
							This.style.height= prop*target+"px";
							if (prop>=1)
							{
								clearInterval(time)
							}
						},10)
					}else{
						
						startval = parseInt(Able(this).getStyle('height'));
						Able(this).css({height:""});
						target = parseInt(Able(this).getStyle('height'));
						Able(this).css({height:startval+"px",overflow:"hidden"})
						time = this.AbleMoveArr[this.AbleMoveArr.length] = setInterval(function(){
							var nowtime = new Date();
							var prop = (nowtime - startime)/timer;
							This.style.height=prop*(target-startval)+startval+"px";
							if (prop>=1)
							{
								clearInterval(time)
							}
						},10)

					}
				});
				return this;
			},
			//清除动画
			stop :function(){
				this.each(function(){
					for (var i=0;i<this.AbleMoveArr.length ;i++ )
					{
						clearInterval(this.AbleMoveArr[i])
					}
					
				})	
				return this;
			},
			//向上滑动
			slideup : function(timer){
				timer=timer||400;
				this.each(function(){
					var height = parseInt(Able(this).getStyle("height"))
					
					var  This=this; 
					var startime = new Date();
					var time = this.AbleMoveArr[this.AbleMoveArr.length]  = setInterval(function(){
					
						var nowtime = new Date();
						var duration = (nowtime - startime);
						var prop = (nowtime - startime)/timer;
						var nowHeiht = (1-prop)*height;
						This.style.height=nowHeiht+"px";
						if (prop>=1)
						{	
							prop=1;
							nowHeiht = (1-prop)*height;
							This.style.height=nowHeiht+"px";
							clearInterval(time)
							This.style.display = "none";
							This.style.overflow = '';
							This.style.height = '';
						}else
						{
							This.style.height=(1-prop)*height+"px"
							
						}
						

					},10)
				
				
				})
			
			},
			//加class
			addClass : function(){
				var arg = arguments;
				this.each(function(){	
					for (var i=0;i<arg.length;i++ )
					{	
						var reg = new RegExp("\\b"+arg[i]+"\\b");
						if (!reg.test(this.className))
						{	
							this.className?this.className += " "+arg[i]:this.className +=arg[i]

						}												
					}
					
				})
				
			},
			//删class
			removeClass :function(){
				var arg = arguments;
				this.each(function(){
					if (arg.length)
					{
						for (var i=0;i<arg.length;i++ )
						{
							var reg = new RegExp("\\b"+arg[i]+"\\b");
							var newstr = this.className.split(" ");
							for (var j=0;j<newstr.length;j++)
							{	
								if (reg.test(newstr[j]))
								{
									newstr.splice(j,1)
								}
							}		
							this.className = newstr.join(" ");	
						}	

					}else
						
					{
						this.className = "";
					}
				
				})
			},
			//淡出事件
			fadeOut : function(timer){
				timer = timer||400;
				this.each(function(){
					var starvalO = Able(this).getStyle('opacity');
					var starvalF = starvalO*100;
					var target = 1;
					//filter:alpha(opacity=100);
					var startime = new Date();
					var This = this;
					var time = this.AbleMoveArr[this.AbleMoveArr.length]  = setInterval(function(){
						var nowtime = new Date();
						
						var prop = (nowtime - startime)/timer;
						This.style.opacity = (1-prop)*target;
						This.style.filter = 'alpha(opacity='+ (1-prop)*target*100+')'
						if (prop>=1)
						{

							clearInterval(time)
						}
					
					},30)
					
				})
			},
			//淡入事件
			fadeIn :function(timer){
				timer = timer||400;
				this.each(function(){
					var starvalO = Able(this).getStyle('opacity');
					var starvalF = starvalO*100;
					var target = 1;
					var startime = new Date();
					var This = this;
					var time = this.AbleMoveArr[this.AbleMoveArr.length]  = setInterval(function(){
						var nowtime = new Date();
						var prop = (nowtime - startime)/timer;
						This.style.opacity = prop*target;
						This.style.filter = 'alpha(opacity='+ prop*target*100+')'
						if (prop>=1)
						{

							clearInterval(time)
						}
					
					},30)
					
				})
				
			},
			eq : function(a){	
						
						var brr = []
						brr[0] = this.thisObj[a]
						this.thisObj.length = 0;
						this.thisObj = [];
						
						this.thisObj = brr
						return this
			},	
			each : function(fn){
			
				for (var i=0;i<this.thisObj.length;i++ )
				{	
					
					fn.call(this.thisObj[i],i) 
				}
			},
			//设置样式
			css : function(Mjson){
				this.each(function(){
					for (var attr in Mjson)
					{	
						this.style[attr] = Mjson[attr]
					}	
				})
				return this
			},
			constructor : 'Init'
			
		}
	
		Array.prototype = {
				//数组乱序取一
				shuffleone :function(){
					var arrl = this.length;
					for (var i=0;i<arrl ;i++ )
					{	
						if (i==(arrl-1))
						{
							break
						}

						function shuffle(array){
							return array.sort(function(a,b){return Math.random()>0.5})
						
						}
						shuffle(this);
						this.pop();
						console.log(arr)
					}
				},
				//数组去重
				uniqueArray :function(){
					
					var a = {};  
				   for (var i=0; i<this.length; i++) {  
					   var v = this[i];  
					   if (a[v] == undefined){  
						   a[v] = 1;  
					   }  
				   };  
				   this.length=0;  
				   for (var i in a){  
						this[this.length] = parseInt(i);
				   }  
				   return this; 
				},
				//连个数组中重复的元素,需要先concat()连个数组，a.concat(b)
				twomore :function(){
					var obj = {}
					var crr = []
					for (var i=0;i<this.length ;i++ )
					{
						for (var j=i+1;j<this.length ;j++ )
						{
							if (this[i]==this[j])
							{
								crr.push(this[i])
							}
						}
					}
					for (var i=0;i<crr.length ;i++ )
					{
						if (!obj[crr[i]])
						{
							obj[crr[i]] = 1
						}
					}
					crr = []
					for (var i in obj )
					{
						crr.push(parseInt(i))
					}
					return crr
				}
		}
		String.prototype = {
			//删除左边空格
			shiftLp : function(){
				return this.replace(/^\s+/,'')
			
			},
			//删除右边空格
			shiftRp :function(){
				return this.replace(/\s+$/,'')
			},
			//删除所有左右空格
			shiftAp :function(){
				return this.replace(/\s+$|^\s+/g,'');
			}
		}
		//正负数取整
		Function.prototype.method = function(name,func){
		
			this.prototype.name = func
		}
		Number.method('math',function(){
				
			  return Math[this>0?'floor':'ceil'](this)
				
		})
		
		window.Able = Able;
			

	})()