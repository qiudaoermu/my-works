
		/*送至开始*/
	
//				(function($){ 
//					$.fn.hoverDelay = function(options){ 
//						var defaults = { 
//							hoverDuring: 200, 
//							outDuring: 1000, 
//							hoverEvent: function(){ 
//								$.noop(); 
//							}, 
//							index : $(this).index(),
//							outEvent: function(){ 
//								$.noop(); 
//							} 
//						}; 
//						var sets = $.extend(defaults,options || {}); 
//						var hoverTimer, outTimer; 
//						return $(this).each(function(){ 
//							$(this).hover(function(){ 
//								clearTimeout(outTimer); 
//								hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring); 
//								},function(){ 
//									clearTimeout(hoverTimer); 
//									outTimer = setTimeout(sets.outEvent, sets.outDuring); 
//								}); 
//						}); 
//					} 
//			})(jQuery); 
//		
//
//		$('.nva-categary-r .sv-item ul.lay1 .hf').hoverDelay({ 
//				
//				hoverEvent: function(){ 
//					console.log("经过我！"); 
//					$('.nva-categary-r .sv-item .hide .hide-ul .li1').eq(2).css({'display':'block'}).siblings().css({'display':'none'})
//					
//					$('.lay1').animate({'top':'-31px'},'.1s','swing')
//					$('.nva-categary-r .sv-item .hide').animate({'top':'32px'},'.1s')
//					$('.nva-categary-r .sv-item .hide-line').css({'display':'block'})
//					$('.nva-categary-r .sv-item .hide-line').animate({'top':'0px'},'.1s')
//					$('.nva-categary-r .sv-item .hide-line').css({'left':""+64*index+"px"})
//					$('.nva-categary-r .sv-item .hide .hide-ul .li1').eq(index).css({'display':'block'}).siblings().css({'display':'none'})
//				} 
//		}); 




		$('.main-send').hover(function(){
			$('.login .main-send .address').css({'display':'block','z-index':'22'})
			$(this).find('li i s').css({'top':"-6px"})
			$('.main-send .hide-line').css({'z-index':'23'})
			
		},
		function(){
			$('.login .main-send .address').css({'display':'none'})
			$('.main-send li i s').css({'top':"-13px"})
			$('.main-send .hide-line').css({'z-index':'5'})
		});

		//		第一种方法
		//		$('.address li').click(function(){
		//				$(this).find('a').addClass('on')
		//				$(this).siblings().find('a').removeClass('on')
		//				//$(this).parent().find('a').removeClass('on')
		//		})
		//		第二种方法
		$('.address li a').click(function(){
				$(this).addClass('on')
				$(this).parent().siblings().find('a').removeClass('on')
				//$(this).parent().find('a').removeClass('on')
				var html = $(this).html()
				$('.send').html('送至: '+html+'')
				$('.login .main-send .address').css({'display':'none'})
		})
		/*送至结束*/
		
		$('.myjd').hover(function(){
				$(this).find('i s').css({'top':"-6px"})
				$(this).css({'background':'#fff'})
				$(this).css({'border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
				$('.myjd-hide').css({'display':'block','z-index':'22'})
				$('.myjd .hide-line').css({'z-index':'23'})
		},function(){
				$('.myjd .hide-line').css({'z-index':'5'})
			    $(this).find('i s').css({'top':"-13px"})
				$('.myjd-hide').css({'display':'none'})
				$(this).css({'background':'#F1F1F1'})
				$(this).css({'border-left':'1px solid #F1F1F1','border-right':'1px solid #F1F1F1'})
		})
		$('#jd2015img').hover(function(){
			$(this).css({'background':'#fff'})
			$(this).css({'border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
			$('.jd-h-img').css({'display':'block','z-index':'22'})
			$(this).find('i s').css({'top':"-6px"})
			$('#jd2015img .hide-line').css({'z-index':'23'})
		},function(){
			$('.jd-h-img').css({'display':'none'})
			$(this).css({'background':'#F1F1F1'})
			$(this).find('i s').css({'top':"-13px"})
			$(this).css({'border-left':'1px solid #F1F1F1','border-right':'1px solid #F1F1F1'})
			$('#jd2015img .hide-line').css({'z-index':'5'})
		})

		$('#care-jd').hover(function(){
			$(this).css({'background':'#fff'})
			$(this).css({'border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
			$('.care-jd-img').css({'display':'block','z-index':'22'})
			$(this).find('i s').css({'top':"-6px"})
			$('#care-jd .hide-line').css({'z-index':'23'})
		},function(){
			$('.care-jd-img').css({'display':'none'})
			$(this).css({'background':'#F1F1F1'})
			$(this).find('i s').css({'top':"-13px"})
			$(this).find('i s').css({'top':"-13px"})
			$(this).css({'border-left':'1px solid #F1F1F1','border-right':'1px solid #F1F1F1'})
			$('#care-jd .hide-line').css({'z-index':'5'})
		})
		$('#client-serve').hover(function(){
			$(this).css({'background':'#fff'})
			$(this).css({'border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
			$('.c-s-hide').css({'display':'block','z-index':'22'})
			$(this).find('i s').css({'top':"-6px"})
			$('#client-serve .hide-line').css({'z-index':'23'})
		},function(){
			$('.c-s-hide').css({'display':'none'})
			$(this).css({'background':'#F1F1F1'})
			$(this).find('i s').css({'top':"-13px"})
			$('.hide-line').css({'z-index':'5'})
			$(this).css({'border-left':'1px solid #F1F1F1','border-right':'1px solid #F1F1F1'})
			
		})

		$('.web-nva').hover(function(){
			$(this).css({'background':'#fff'})
			$(this).css({'border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
			$('.w-n-hide').css({'display':'block','z-index':'22'})
			$(this).find('i s').css({'top':"-6px"})
			$('.web-nva .hide-line').css({'z-index':'23'})
			
		},function(){
			$('.w-n-hide').css({'display':'none'})
			$(this).css({'background':'#F1F1F1'})
			$(this).find('i s').css({'top':"-13px"})
			$(this).css({'border-left':'1px solid #F1F1F1','border-right':'1px solid #F1F1F1'})
			$('.hide-line').css({'z-index':'5'})
		})
	
		$('.close-ad-img').click(function(){
			$('.ad-img').fadeOut('slow');
		
		})

		/*搜索开始*/
		$('.my-shop-car').hover(function(){
		
			$(this).css({'background':'#fff','box-shadow':'0px 0px 5px rgba(0,0,0,.2)'})
			$('.m-s-c-hide').css({'display':'block'})
			$('.my-shop-car .hide-line').css({'display':'block'})
			
		},function(){
			$('.m-s-c-hide').css({'display':'none'})
			$('.my-shop-car .hide-line').css({'display':'none'})
			$(this).css({'background':'#fff','box-shadow':''})
		})
		/*搜索结束*/

		$('.a-c-l-bottom ul li').hover(function(){
			$(this).css({'background':'#f7f7f7','width':'215px'})
			$(this).find('.item').css({'color':'#c81623'})
			
		},function(){
			
			$(this).css({'background':'#c81623 ','width':'209px'})
			$(this).find('.item').css({'color':'#fff'})
			
			})
		$('.a-c-l-left .chanel a').hover(function(){
				$(this).css({'background':'#c81623'})
				$(this).find('i').css({'background':'#B1191A'})
			
			},function(){
				$(this).css({'background':'#7C7171'})
				$(this).find('i').css({'background':'#5c5251'})
		})
		$('.item1').hover(function(){
				$('.a-c-l-b-hide1').css({'display':'block'})
			},function(){
				$('.a-c-l-b-hide1').css({'display':'none'})
			})
			
		/*顶部轮播开始*/
		$('.nva-categary-m .ul li').hover(function(){
			$(this).addClass('on').siblings().removeClass('on')
			var index = $(this).index();
			$('.nva-categary-m img').eq(index).fadeIn().siblings('.nva-categary-m img').fadeOut()
		})
		var q = 0;
		$('.nva-categary-m .click .right').click(function(){	
				q++;
				q = q%6
				console.log(q)
				$('.nva-categary-m img').eq(q).fadeIn().siblings('.nva-categary-m img').fadeOut()
				$('.nva-categary-m .ul li').eq(q).addClass('on').siblings().removeClass('on')	
		})
		$('.nva-categary-m .click .left').click(function(){
				q--;
				
				if (q<0)
				{
					q=5;
				}
				console.log(q)
				console.log($('.nva-categary-m img').eq(q))
				$('.nva-categary-m img').eq(q).fadeIn().siblings('.nva-categary-m img').fadeOut()
				$('.nva-categary-m .ul li').eq(q).addClass('on').siblings().removeClass('on')	
		})
	    /*顶部轮播结束*/
		//生活服务开始
		var lateTime = null;
		var nvaTime = new Date()
		var mart=1
		function aototimelate(i){
			  lateTime = setTimeout(function(){
					if (mart==1)
					{
						$('.nva-categary-r .sv-item .hide .hide-ul .li1').eq(i).css({'display':'block'}).siblings().css({'display':'none'})
						$('.lay1').animate({'top':'-32px'},'.1s','swing')
						$('.nva-categary-r .sv-item .hide').animate({'top':'32px'},'.1s')
						$('.nva-categary-r .sv-item .hide-line').css({'display':'block'})
						$('.nva-categary-r .sv-item .hide-line').animate({'top':'0px'},'.1s')
						$('.nva-categary-r .sv-item .hide-line').css({'left':""+64*i+"px"})
						$('.nva-categary-r .sv-item .hide .hide-ul .li1').eq(i).css({'display':'block'}).siblings().css({'display':'none'})
					}
				  },500)
		}
		$('.nva-categary-r .sv-item ul.lay1 .hf').each(function(i){
				$(this).hover(function(){
						
						clearInterval(lateTime)
						aototimelate(i)
				})
		})
		$('#hf1').hover(function(){
			mart=1
		})
		$('#hf2').hover(function(){
			mart=1
		})
		$('#hf3').hover(function(){
			mart=1
		})
		$('#hf4').mouseleave(function(){
				mart=1
				console.log(mark)
				clearInterval(lateTime)
			
		})	
		$('.nva-categary-r .sv-item .close').click(function(){
			$('.lay1').animate({'top':'1px'},'0.1s','swing')	
			$('.nva-categary-r .sv-item .hide').animate({'top':'212px'},'0.1s')	
			$('.nva-categary-r .sv-item .hide-line').animate({'top':'341px'},'.1s')
				mart=2
				
		})








	
		
		
		$('.sv-item .hide ul li.li1 .hf-li-zc .hf-li-zc-flul li').hover(function(){
			
				var index = $(this).index();
				$(this).find('a').addClass('on')
				$(this).siblings().find('a').removeClass('on')
				$('.nva-categary-r	.sv-item .hide ul li.li1 .num ul li').eq(index).css({'display':'block'}).siblings('li').css({'display':'none'})
		})


		$('.nva-categary-r	.sv-item .hide ul li.li1 .jp-title li').hover(function(){
				var index = $(this).index();
				$(this).find('a').addClass('on')
				$(this).siblings().find('a').removeClass('on');

				$('.nva-categary-r .sv-item .hide ul li.li1 .jp-content li').eq(index).addClass('on').siblings().removeClass('on')	
				
		})

		$('.nva-categary-r	.sv-item .hide ul li.li1 .hf-li-zc ul li').hover(function(){
				var index = $(this).index();
				
		$('.nva-categary-r	.sv-item .hide ul li.li1 .move-ul li').eq(index).addClass('on').siblings().removeClass('on')	
		
		})
		$('.nva-categary-r	.sv-item .hide ul li.li1 .game-title li').hover(function(){
			
				$(this).find('a').addClass('on').siblings().removeClass('on')
				$(this).siblings().find('a').removeClass('on')
				var index = $(this).index();
				$('.nva-categary-r	.sv-item .hide ul li.li1 .game-content li').eq(index).addClass('on').siblings().removeClass('on')
		
		})
//生活服务结束
		var hour = new Date().getHours()-12
		var rate = hour/12;
		var degree = rate*360;
		var $right = $('.recommend-main .recd .rr ul').css('right');
	
		$('.recommend-main .recd .rl .click .click-h').css({'transform':'rotate('+degree+'deg)'})

		


		/*今日推荐左右滚动开始*/
		var f = 1;
		var starTime = new Date();
		$('.recommend-main .recd .onclick div.left').click(function(){
				
					if ((new Date()-starTime)>=350)
					{
						
						f++;
						var $right = $('.recommend-main .recd .rr ul').css('right')
						var $liWidth = $('.recommend-main .recd .rr ul li').width()
						var moveWidth = f*$liWidth;
						$('.recommend-main .recd .rr ul').animate({'right':-moveWidth},'.1s',function(){
							if (f>4)
							{	
								f=1;
								$('.recommend-main .recd .rr ul').css({'right':'-1000px'})
							}
						})

					}
					starTime = new Date();
						
		})

		$('.recommend-main .recd .onclick div.right').click(function(){
			if ((new Date()-starTime)>=350){
			
						f--;
						var $right = $('.recommend-main .recd .rr ul').css('right')
						var $liWidth = $('.recommend-main .recd .rr ul li').width()
						var moveWidth = f*$liWidth
						$('.recommend-main .recd .rr ul').animate({'right':-moveWidth},'.1s',function(){
								if (f<=0)
								{	
									f=4;
									$('.recommend-main .recd .rr ul').css({'right':'-4000px'})
								}
						})
						console.log($right)
						
			}
			starTime = new Date();
		})
		/*今日推荐左右滚动结束*/
		//猜你喜欢
		$('.guess-u-l .guess-u-l-m').hover(function(){
				if (new Date() - starTime>1000)
					{
						$('.guess-u-l .guess-u-l-top .line').css({'right':'696px'})
						$('.guess-u-l .guess-u-l-top .line').animate({'right':'-8px'},500,function(){
							
						
						})
					
					}
					starTime = new Date();
				},function(){
					
					$('.guess-u-l .guess-u-l-top .line').stop();
					$('.guess-u-l .guess-u-l-top .line').css({'right':'-8px'})}
		)


	/*侧边导航栏*/

	$('.nva-left ul li').hover(function(){
	
		  $(this).addClass('hover')
		  
	},function(){
		
		$(this).removeClass('hover')
	})

   $('.nva-left ul li').click(function(){
	   
		$(this).find('span').addClass('active')
		$(this).siblings().find('span').removeClass('active')

   })
	var mark = 1;

    $('.nva-left ul li').click(function(){
	    mark = 2;
		var index = $(this).index();
		var _t  = $("#Main .Louti").eq(index).offset().top;
		$('body,html').animate({scrollTop:_t},500,function(){
			mark=1
		})
   })
	



	$(window).scroll(function(){
			
			var  _t = $(this).scrollTop();
			if (_t>1000)
			{
				$('.nva-left ul li').fadeIn();

			}else{
				$('.nva-left ul li').fadeOut();
			}
			if (mark==1)
			{	console.log(333)
				$(".Louti").each(function(i){

				var index = $(this).index()
				var _height = $(".Louti").eq(i).offset().top+$(".Louti").eq(i).height()/2;
				document.title = _t+ "__" +_height+'_'+index
					if (_t < _height)
					{	$('.nva-left ul li').find('span').removeClass('active')
						$('.nva-left ul li').eq(i).find('span').addClass('active')
						return false;
					}
				})	
			}

	})
			
	var lef = (parseInt($(window).width())-1210)/2-32+'px';
	site()
	$(window).resize(function(){
		lef = (parseInt($(window).width())-1210)/2-32+'px';
		site()
	})	
	
	function site(){
			$('.nva-left').css({'left':lef})
		
		}






	$('#L1 .mc ul li').each(function(i){
			$(this).hover(function(){
				$('#L1 .main-s .main li.fli').eq(i).addClass('on').siblings().removeClass('on');
				$(this).find('a').addClass('hide-line')
				$(this).siblings().find('a').removeClass('hide-line')
				$(this).find('span').addClass('hide')
				$(this).siblings().find('span').removeClass('hide')
			})
			
	})

		/*第一层滚动开始*/
		
	
	
//		var starTime = new Date();

		function Cousel(box,dotli,ul,distance2,distance1,left,right){
				this.starTime = new Date();
				this.n = 0;
				this.num = 1;
				this.dotli = $(dotli);
				this.$ul = $(ul)
				this.box = $(box);
				this.$liWidth = this.$ul.find('li').width();
				this.distance2 = distance2;
				this.distance1 = distance1;
				this.right = $(right);
				this.left = $(left);
				this.autoTime = null;
				
		}

		Cousel.prototype = {
				init : function(){
					this.hover()
					this.clock()
					this.autoplay();
					this.clearTime()
				
				},
				hover : function(){
					var This = this;	
					this.dotli.hover(function(){
						This.index = $(this).index();
						This.n = This.index;
						console.log(This.n);
						This.dotli.eq(This.n).addClass('on').siblings().removeClass('on');
						This.num  = This.index+1;
						if (This.n==3){n=-1}
						This.moveWidth = This.num*This.$liWidth;
						This.$ul.stop().animate({left:-This.moveWidth},'.1s')	
					})
				},
				autotimeR : function(){
						this.num++
						this.n++;
						var This = this;
						this.dotli.eq(this.n).addClass('on').siblings().removeClass('on')
						if (this.n>2){this.n=-1}
						this.moveWidth = this.num*this.$liWidth
						this.$ul.stop().animate({left:-this.moveWidth},'.1s',function(){
							if (This.num>4)
							{	
								This.num=1;
								This.$ul.css({left:This.distance2})
							}
						})
				},
				autotimeL : function(){
						this.n--;
						var This = this;
						this.dotli.eq(this.n).addClass('on').siblings().removeClass('on')
						if (this.n<0){this.n=3}
						this.num--;
						this.moveWidth= this.num*this.$liWidth
						this.$ul.animate({left:-this.moveWidth},'.1s',function(){
							if (This.num<1)
							{	
								This.num=4;
								This.$ul.css({left:This.distance1})
							}
						}) 
							
				},
				clock : function(){
					var This = this;	
					this.right.click(function(){
						if ((new Date()-This.starTime)>=350){
							 This.autotimeR();	
							
						}
						This.starTime = new Date();
					})

					this.left.click(function(){
						if ((new Date()-This.starTime)>=350){		
							 This.autotimeL(This.dotli,This.$ul,This.distance1);
						}
						This.starTime = new Date();
					})
				},
				autoplay : function(){
					var This = this;
					this.autoTime = setInterval(function(){
					
							This.autotimeR()
					
					},2000)	
				},
				clearTime : function(){
					var This = this;
					this.box.hover(function(){
					
						clearInterval(This.autoTime)
					},function(){
						This.autoplay()
						
					})
				}
		}
		var c1 = new Cousel('.banner-turn',
		'.f-l-side .banner-turn ul.dot li',
		'#L1 .main-s .f-l-side .banner-turn ul.img',
		'-440px','-1760px',
		'#L1 .main-s .f-l-side .banner-turn .left',
		'#L1 .main-s .f-l-side .banner-turn .right');
		var c2 = new Cousel('#L2 .sider .side-m',
		'#L2 .sider .side-m .dota li',
		'#L2 .sider .side-m .side-m-top-img',
		'-339px','-1356px',
		'#L2 .sider .side-m .left',
		'#L2 .sider .side-m .right'
		)
		
		c1.init()
		c2.init()

//		autoflash('.banner-turn','#L1 .main-s ul .f-l-side .banner-turn ul.dot li',
//		'#L1 .main-s .f-l-side .banner-turn ul.img',
//		'-440px','-1760px',
//		'#L1 .main-s .f-l-side .banner-turn .left',
//		'#L1 .main-s .f-l-side .banner-turn .right')




		function autoflash(box,dotli,ul,distance2,distance1,left,right){
			var cleartime = null,n = 0,num = 1,$box = $(box),$ul = $(ul), $dot = $(dotli),$liWidth = $ul.find('li').width();
			
			$box.hover(function(){
				clearInterval(cleartime)	
			},function(){
				timeAuto()
				
			})
			function timeAuto(){
				cleartime = setInterval(function(){
						autotimeR(dotli,ul,distance2)	
				},3000)
			}
			timeAuto()
				
			$(dotli).hover(function(){
							var index = $(this).index();
							n = index;
							$dot.eq(n).addClass('on').siblings().removeClass('on')
							num = $(this).index()+1;
							if (n==3){n=-1}
							var moveWidth = num*$liWidth;
							$ul.stop().animate({left:-moveWidth},'.1s')
						})	
			function autotimeR(dotli,ul,distance2){
						num++
						n++;
						$dot.eq(n).addClass('on').siblings().removeClass('on')
						if (n>2){n=-1}
						var moveWidth = num*$liWidth
						$ul.stop().animate({left:-moveWidth},'.1s',function(){
								if (num>4)
								{	
									num=1;
									$ul.css({left:distance2})
								}
						})
			}
			function autotimeL(dotli,ul,distance1){
						
						n--;
						var $dot = $(dotli)
						$dot.eq(n).addClass('on').siblings().removeClass('on')
						if (n<0){n=3}
						num--;
						var moveWidth = num*$liWidth
						$ul.animate({left:-moveWidth},'.1s',function(){
								if (num<1)
								{	
									num=4;
									$ul.css({left:distance1})
								}
						})
			}
			$(right).click(function(){
								
						if ((new Date()-starTime)>=350){
								autotimeR(dotli,ul,distance2);	
						}
						starTime = new Date();
			})//向右边点击
			
			$(left).click(function(){
						if ((new Date()-starTime)>=350){		
								autotimeL(dotli,ul,distance1);
						}
						starTime = new Date();
			})//向左点击
		}



//		autoflash('#L2 .sider .side-m','#L2 .sider .side-m .dota li',
//		'#L2 .sider .side-m .side-m-top-img',
//		'-339px','-1356px',
//		'#L2 .sider .side-m .left',
//		'#L2 .sider .side-m .right')

		autoflash('#L3 .side-m .side-m-t',' #L3 .side-m .side-m-t .dota li',
		'#L3 .side-m .side-m-t .img',
		'-439px','-1756px',
		'#L3 .side-m .side-m-t .left',
		'#L3 .side-m .side-m-t .right')

		autoflash('#L6 .le3','#L6 .le3 .dota li',
		'#L6 .le3 .img',
		'-339px','-1356px',
		'#L6 .le3 .left',
		'#L6 .le3 .right')
		//天天特价
		$('.ttdj .side-l').hover(function(){
			
			$('.ttdj .side-l a img').stop(true).animate({'left':'-10px'},'.1s')
		},function(){
			$('.ttdj .side-l a img').stop(true).animate({'left':'0px'},'.1s')
			})
		$('.ttdj .side-m ul li').each(function(){
				var index = $(this).index();
				$(this).hover(function(){
					$('.ttdj .side-m ul li .img img').eq(index ).stop(true).animate({'left':'-10px'},'.1s')
				},function(){
					$('.ttdj .side-m ul li .img img').eq(index ).stop(true).animate({'left':'0px'},'.1s')
				})
		})
		//侧边栏
		$('.right-side-main ul li').each(function(){
			var index = $(this).index();
			$(this).hover(function(){
				console.log('侧边栏')
				$(this).find('div').stop().animate({'right':'0px'},'.1s')
					$(this).find('div').addClass('hide')
					$(this).addClass('on')
				console.log(index)
			},function(){
				$('.right-side-main ul li div').stop().animate({'right':'-67px'},'.1s')	
				$(this).find('div').removeClass('hide')
				$(this).removeClass('on')
			})
		
		})
