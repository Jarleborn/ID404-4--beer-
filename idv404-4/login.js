function login(){

	var tryUname = document.getElementById("inloggn").value;
	var tryPword = document.getElementById("inloggl").value;

	for (var i = 0; i < pArray.length; i++) {
	
		if(tryUname == pArray[i].uName){
			console.log("Username Passed Test")
			if( tryPword == pArray[i].pWord){
				console.log("Password Passed Test")
				alert("inloggad")
			}
			else
			{
				document.getElementById("status2").classList.remove("hidden");
			}

		}
		else
		{
			document.getElementById("status2").classList.remove("hidden");

		}
	}
	
};
	


var knapp2 = document.getElementById("knapp2");
knapp2.addEventListener("click",function(){
	login();
});