var isShow=true;
function change(){
	var img = document.getElementById("password-image");
	var text=document.getElementById("password");
	if (isShow) {
	    text.type="text";
	    isShow=false;
	    img.src = "show-password.png";
	}else{
	    text.type="password";
	    isShow=true;
	    img.src = "hidden-password.png"
	    }
};