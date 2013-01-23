$(document).ready(function() {
 
	function swing(){
	 $('.grenade').toggleClass('grenade-swing');
	}

	var swing_timer = self.setInterval(swing, 560);


	var startX,startY,endX,endY
	var scrollTopVal=0; //左右滑动请自行修改
	//假定接受手指触摸事件的Dom对象id是"touchring"
	document.getElementById("touchring").addEventListener("touchstart", touchStart, false);
	document.getElementById("touchring").addEventListener("touchmove", touchMove, false);
	document.getElementById("touchring").addEventListener("touchend", touchEnd, false);
	document.getElementById("reset_box").addEventListener("touchstart", reset, false);

	function touchStart(event){
		var touch = event.touches[0];
		startY = touch.pageY;
		startX = touch.pageX;
	}
	function touchMove(event){
		var touch = event.touches[0];
		var touch2 = event.targetTouches[0];
		endY = (startY-touch.pageY);
		endX = (touch.pageX-startX);
	
		if(endX > 45){
			// var left = $("#stable").offset().left;
			// $("#stable").css("left", left+50);
			$(".ring").animate({
				right: '-150',
				opacity: 0
			}, 1000);
		}
	}

	function touchEnd(event){
		// scrollTopVal=$("#touchBox").scrollTop();
		// alert('end');
	}

	function reset(event){
		$("#stable").css("left", 0);
	}


});