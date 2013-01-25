$(document).ready(function() {
	function logorotate(){
		$('.logo').toggleClass('logo-rotate');
	}

	var logoMoveTimer = setInterval(logorotate, 4000);
	

    $('#fb-login').on("click", function(event){
        var permissions = ['publish_stream', 'email'];
        console.log('fb log');
        FB.login(function(response) {
          console.log('response'+JSON.stringify(response));
          if(response.status == 'connected'){
          	window.location = "firewall.html";
          }else if(response.status === 'not_authorized'){
          	console.log('status: '+response.status);
          }else{
          	console.log('status: '+response.status);
          }
        }, {scope: permissions.join()});     
    });
});