


$(document).ready(function() {
	// $('#promptname').popup({ history: false }).popup("open");
	// $('#promptname-btn').on('click', function(){
	// 	$('#promptname').popup("close");
	// });
	// $('#myPopupDiv').popup("open")

	var openSafe = 0;
	fireyourself();

	var socket = io.connect('http://firebox.herokuapp.com/'); 
	socket.on('connect', function() {
		socket.emit('addme',{name : prompt('Who are you?')}); 
	});

	window.addEventListener('load',function() { 
		document.getElementById('sendtext').addEventListener('click',function() {
			if(openSafe == 1){
				socket.emit('sendchat', {message : 1000});
				// audio 
				var audio = document.getElementById('fire-audio');
				audio.volume = 1;
				audio.play();
				afterThrow();
			} else{
				$('#promptsafe').popup({ history: false }).popup("open");
			}
		}, false); 
	}, false);
 
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
	// document.getElementById("reset_box").addEventListener("touchstart", reset, false);

	//手機偵測速度
	window.addEventListener('devicemotion',deviceMotionHandler, false);
	function deviceMotionHandler(eventData) {
	  var acceleration =eventData.accelerationIncludingGravity;
	  var x = acceleration.x;
	  var y = acceleration.y;
	  var z = acceleration.z;
	  if(x > 20){
	  	if(openSafe == 1){
			socket.emit('sendchat', {message : 1000});
			// audio 
			var audio = document.getElementById('fire-audio');
			audio.volume = 1;
			audio.play();
			afterThrow();
		} else{
			$('#promptsafe').popup({ history: false }).popup("open");
		}
	  }
	}

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
			openSafe = 1;
			// $('.count').show('slow', function() {
			//     // Animation complete.
			//     window.navigator.vibrate([1000]);
			//     var time_count = 5;
			//     var time_count_interval = setInterval(counting, 1000);
			//     window.navigator.vibrate([1000]);
			// });
			startcounting();
		}
	}

	function touchEnd(event){
		// scrollTopVal=$("#touchBox").scrollTop();
		// alert('end');
	}

	function reset(event){
		$("#stable").css("left", 0);
	}

	function startcounting(){
		var time_count = 5;
		$('.count').fadeIn();
		var timecounter = setInterval(counting, 1000);
		function counting(){
			time_count = time_count - 1;
			if(time_count < 0){
				$('.count').fadeOut();
				clearInterval(timecounter);
				openSafe = 0;
				time_count = 5;
				$('.count span').html('5');

				$(".ring").animate({
					right: '+33',
					opacity: 1
				}, 500);

				fireyourself();
			}
			else{
				$('.count span').html(time_count);
				if(window.navigator){
					window.navigator.vibrate([500]);
				}
			}
		}
	}

	function afterThrow(){
		$('.count').fadeOut();
		clearInterval(timecounter);
		openSafe = 0;
		time_count = 5;
		$('.count span').html('5');

		$(".grenade").fadeOut('slow');
		$('#promptrestart').popup({ history: false }).popup("open");

		$(".ring").animate({
			right: '+33',
			opacity: 1
		}, 500);
	}

	function fireyourself(){
	}
});