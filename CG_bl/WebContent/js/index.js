
console.log("windows11")

var imgSize = [

               {width:600,height:790},
               {width:1719,height:732},
               {width:935,height:971},
               {width:682,height:402},
             
               
               {width:994,height:357}
               
               ];

console.log(imgSize[0]);

$.ajax({
		type:"POST",
		data:{},
		url:"getJson.action",
		async: false
	}).done(function(data){
		console.log(data)
		var html="";
		var row = data.rows;
			$.each(row,function(i,index){
				var li = "<li class="+index.id+"></li>"
				html+=li;
			})
		console.log(html)
		$(".boald .wall").html(html);
	})
  var mark = false;
  var i=-1;
  // init();
  createImg()
  var index;
 function createImg(){
	 
	  $(".wall li").click(function(){
		 var _this = $(this);
		  index = $(this).index();
		  $.ajax({
			  type:"POST",
			  url:"getImg.action",
			  data:{index:index},
			  async: false
		  }).done(function(data){
			   var html="";
			  	console.log(data);
			  	var row = data.rows;
			  	console.log(row)
			  	console.log(index)
			  	var dataImg = data.rows[0];
			  	console.log(dataImg);
			  	console.log(dataImg.name)
			  	var li = "<img src="+dataImg.name+">"
			  	_this.html(li)
			  
			  	init(_this)
		  	})
		  
  });

 }
  

  
function init(_this){
  
    
   
    
    var screenImage = _this.find('img');
   
    setTimeout(function(){
    	
    	
    	
    	var imgSrc = screenImage.attr("src");
        var theImage = $("<img/>");

        theImage.attr({"id":"ImgID","src":imgSrc})
          var theImage2 = new Image();
         
          theImage2.src = imgSrc;

          var imageWidth = theImage2.width;
          var imageHeight = theImage2.height;
          console.log(imageHeight)

          var div = $('<div class="model"><div class="box"><img id="loading" src=img/fz.gif></div></div>');
          console.log($("#loading"))
         
          div.append(theImage);
         
          $('body').append(div);
         
          $(".box").bind("click", function(e) {
           
        	  
                if (e.currentTarget.className=="model") {
                 // $(".model").remove();

                }
           });
         
         
          changeSize0(imageWidth,imageHeight,div,theImage,$("#ImgID"))

    	
    },500)
}







function changeSize0(width,height,div,theImage,
		id
		) {
	// debugger;
	console.log("box")
  // console.log(id);
  var oWith=400;
  var oheight =0;
  var opa = 0.3;
  
  var time = setInterval(function(){
	  console.log("time")
      var flag = false;
        var widthFlag;
    // oWith = oWith+5;
      oheight = oheight+5;
      // console.log(oheight);
     // console.log(height);
      var percent = width/height;
      if(oheight>=height+40){
        oheight = height+40;
        clearInterval(time)
        flag = true;
        // console.log(flag);
        if (flag) {
        	console.log("flag")
          changeWidth(oWith,width,id)
          $(".box").append(theImage);
          // console.log(widthFlag);
        }

      }
      	console.log("oWith"+oWith)
       $(".box").css({"width":oWith,"height":oheight,"left":'50%',"marginLeft":-oWith/2,"top":'50%',"marginTop":-oheight/2})
     

  },1)

}
  
function changeWidth(oWith,width,id){
	  var time2 = setInterval(function(){
		  oWith+=5;
		  if(oWith>=width+40){
			  	clearInterval(time2)
		  	}
		  
		  $(".box").css({"width":oWith,"left":'50%',"marginLeft":-oWith/2,"top":'50%'})
		  },1)
		 
  }
	  
	  


function eventBindPre(){
  

// console.log("markæ§è¡");
 var turnDiv = $("<div class='turnPre turn'>PREV</div>");
 $("body").find(".model").find(".box").append(turnDiv)

 $(".turnPre").bind("click",function(){
	 
	 $("body").find(".model").find(".box").find("img").css({opacity:0});
	 debugger;
   index--;
   console.log("--"+index)
    if (index<0) {
      index=4;
    }
    
    $.ajax({
		  type:"POST",
		  data:{index:index},
		  url:"getImg.action",
		  async: false
	  }).done(function(data){
		   var html="";
		  	// console.log(data);
		  	var row = data.rows;
			var dataImg = data.rows[0];
		  	console.log(dataImg.name)
		  
		  	var li = "<img src="+dataImg.name+">";
		  	$(".wall li").eq(index).html(li)
		  	// debugger;
		  	 console.log($(".wall li").eq(index));
		  		init2(dataImg.name)
		  
	  	})
        // $(".model").remove();
	  	// debugger;
       // console.log("addindx:"+index);
       function init2(dataImg){
    	  var theImage = $("img");
           setTimeout(function(){
        	  // debugger;
        	   var imgUp = $(".wall li").eq(index).find("img")
        	   var imgSrc = dataImg;
        	   console.log(dataImg)
             
        	   theImage.attr("src",dataImg);
        	   console.log(theImage)
               // theImage.src = imgSrc;
                 var theImage2 = new Image();
                 // console.log(theImage2);
                 theImage2.src = dataImg;

                 var imageWidth = theImage2.width;
                 var imageHeight = theImage2.height;
               // console.log(imageWidth);

                // var div = $(".model")
                // var div2 = $('<div class="box"><img id="loading"
				// src=img/fz.gif></div>');
                // div.append(div2)
                // $("#ImgID").remove();
                // div.append(theImage);
                // debugger;
                /*
				 * $(".box").bind("click", function(e) { //console.log(2); //
				 * console.log(e.currentTarget.className);
				 * 
				 * if (e.currentTarget.className="model") { //
				 * $(".model").remove();
				 *  } });
				 */
                 var oWithSize = imgSize[index].width;
                 var oheightSize = imgSize[index].height;
                 var oWithSize2 = imgSize[index+1].width;
                 var oheightSize2 = imgSize[index+1].height;
                 // debugger;
                 changeSize(oWithSize2,oheightSize2,$("#ImgID"),oWithSize,oheightSize)
        	   
        	   
           },1000)
    	   
       }
 })

}

function changeSize(width,height,id,oWithSize,oheightSize) {
	
	console.log("box")
  // console.log(id);
  var oWith=width;
  var oheight = height;
  var opa = 0.3;
  
  var time = setInterval(function(){

      var flag = false;
        var widthFlag;
    // oWith = oWith+5;
     
      // console.log(oheight);
     // console.log(height);
      var percent = width/height;
      
      if(oheight<oheightSize){
    	  oheight = oheight+3;
    	  if(oheight>=oheightSize+40){
    	        oheight = oheightSize+40;
    	        clearInterval(time)
    	        flag = true;
    	        // console.log(flag);
    	        if (flag) {
    	          changeWidth(oWith,oWithSize,id)
    	          // $(".box").append(theImage);
    	          // console.log(widthFlag);
    	        }

    	      }
    	  
      }else{
    	  
    	  oheight = oheight-3;
    	  if(oheight<=oheightSize+40){
    	        oheight = oheightSize+40;
    	        clearInterval(time)
    	        flag = true;
    	        // console.log(flag);
    	        if (flag) {
    	          changeWidth(oWith,oWithSize,id)
    	          // $(".box").append(theImage);
    	          // console.log(widthFlag);
    	        }

    	      }
    	  
      }
    
   
      $(".box").css({"width":oWith,"height":oheight,"left":'50%',"marginLeft":-oWith/2,"top":'50%',"marginTop":-oheight/2})
     

  },3)
  
}






	function changImgOpacity(id){
		// debugger;
	  var opa = 0;
	  var opaTime = setInterval(function(){
	        opa =  opa+0.01;
	      // console.log(opa);
	     // console.log(id);
	        id.css({"opacity":opa})
	        if (opa>=1) {
	          clearInterval(opaTime);
	          mark = true;
	          if (mark==true) {
	                // eventBindNext();
	                eventBindPre();
	          }
	        }
	  },1)
	}

 function eventBindNext(){
    var turnDiv = $("<div class='turnNext turn'>NEXT</div>");
    $("body").find(".model").find(".box").append(turnDiv)

    $(".turnNext").bind("click",function(){
       index++

       if (index>=5) {
         index=0;
       }
      
        
        $.ajax({
    		  type:"POST",
    		  data:{index:index},
    		  url:"getImg.action",
    		  async: false
    	  }).done(function(data){
    		   var html="";
    		  	// console.log(data);
    		  	var row = data.rows;
    			var dataImg = data.rows[0];
    		  	console.log(dataImg.name)
    		  
    		  	var li = "<img src="+dataImg.name+">";
    		  	$(".wall li").eq(index).html(li)
    		  	 console.log($(".wall li").eq(index));
    		  		init()
    		  	
    	  	})
            $(".model").remove();
           console.log("addindx:"+index);
           function init(){
        	   console.log($(".wall li").eq(index));
               setTimeout(function(){
            	   var imgSrc = $(".wall li").eq(index).find("img").attr("src");
            	   console.log(imgSrc)
                   var theImage = $("<img/>");

                   theImage.attr({"id":"ImgID","src":imgSrc})
                     var theImage2 = new Image();
                     // console.log(theImage2);
                     theImage2.src = imgSrc;

                     var imageWidth = theImage2.width;
                     var imageHeight = theImage2.height;
                   // console.log(imageWidth);

                     var div = $('<div class="model"><div class="box"><img id="loading" src=img/fz.gif></div></div>');
                     $("#ImgID").remove();
                     div.append(theImage);

                     $('body').append(div);
                     /*
						 * $(".box").bind("click", function(e) {
						 * //console.log(2); //
						 * console.log(e.currentTarget.className);
						 * 
						 * if (e.currentTarget.className=="model") {
						 * $(".model").remove(); } });
						 */
                     changeSize(imageWidth,imageHeight,div,theImage,$("#ImgID"))
               },500)   
           }   
     })
}
