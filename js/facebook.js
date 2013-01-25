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


  // FB.getLoginStatus(handleStatusChange);
  // authUser();
  // checkForCredits();
  // updateAuthElements();
};


// Load the SDK Asynchronously
(function(d){
 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "//connect.facebook.net/en_US/all.js";
 ref.parentNode.insertBefore(js, ref);
}(document));
