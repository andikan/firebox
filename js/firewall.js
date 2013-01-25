//////////////////////////
//
// Config
// Set your app id here.
//
//////////////////////////

if (window.location.host == 'andikan.in' || window.location.host == 'www.andikan.in') {
  var gAppID = '398440393580515';
}
//Add your Application ID here
else {
  var gAppID = '475868445804334';
}


//Initialize the Facebook SDK
//See https://developers.facebook.com/docs/reference/javascript/
window.fbAsyncInit = function() {
  FB.init({ 
    appId: gAppID,
    status: true,
    cookie: true,
    xfbml: true,
    frictionlessRequests: true,
    useCachedDialogs: true,
    oauth: true
  });
  // check user login or not
  FB.getLoginStatus(handleStatusChange);
};


// Load the SDK Asynchronously
(function(d){
 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "//connect.facebook.net/en_US/all.js";
 ref.parentNode.insertBefore(js, ref);
}(document));


// Handle status changes
function handleStatusChange(session) {
    console.log('Got the user\'s session: ', session);
    
   if (session.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    var uid = session.authResponse.userID;
    var accessToken = session.authResponse.accessToken;
    console.log('uid : ' + uid);
    console.log('accessToken : ' + accessToken);
  } else if (session.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
    window.location = "index.html";
  } else {
    // the user isn't logged in to Facebook.
    window.location = "index.html";
  }
}



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
			window.navigator.vibrate([1000]);       
		}
	}

	function touchEnd(event){
		// scrollTopVal=$("#touchBox").scrollTop();
		// alert('end');
	}

	function reset(event){
		
	}


});