 // main document ready function to check if dom is loaded fully or not
$(document).ready(function() {
	$("#profile").hide();
	$("#post").hide();
	  
	$("#pro").click(function(){
        $("#profile").slideDown(1000);
	});

	$("#pos").click(function(){
        $("#post").fadeIn(1000);
	});
		
    var myToken = 'EAACEdEose0cBAMAjp8J3p8poZArUkY64dUr9sWkvTChbsMIZBAUWNYyEjZA4hSciLXiZAg9ADnJpaEEvsWnM4SD2NEfZCPIbhaxAILWpzn394KKHaNFBvlvsgxDvZAvycxlMR4096AHCmZBjJJugZAd5R796T9GjIJRNtOlKkHA4EHe9ftzj1GZATnTb2Ff9rM2AZD';

    function myInfo(){
		
        $.ajax('https://graph.facebook.com/me?fields=id,name,email,birthday&access_token='+myToken,{
				
					success : function(response){
					console.log(response);
					console.log(typeof(response));
					$("#myEmail").text(response.email);
					$("#dob").text(response.birthday);
					$("#myProfileId").html('<a target="blank" href="https://facebook.com/">https://facebook.com/'+response.id+'</a>');
					$("#myName").text(response.name);
                
				}
            }//end argument list 
		);// end ajax call 
		$("#post").fadeOut();
	}
	
       
    function getPosts(){
		
        $.ajax('https://graph.facebook.com/me?fields=id,name,email,posts&access_token='+myToken,{
					success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#posts").text(response.posts.data[0].story);
					$("#postsTime").text(response.posts.data[0].created_time);
				
				
				}
			}
		);
		$("#profile").hide();

	}


    $("#pos").click(getPosts);
	$("#pro").click(myInfo);
 });