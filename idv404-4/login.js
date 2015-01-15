 var login = {
	login: function(){

		var tryUname = document.getElementById("inloggn").value;
		var tryPword = document.getElementById("inloggl").value;

		for (var i = 0; i < pArray.length; i++) {
		console.log(pArray[i].uName);
			if(tryUname === pArray[i].uName){
				document.getElementById("status2").classList.add("hidden");
				console.log("Username Passed Test")
				if( tryPword === pArray[i].pWord){
					console.log("Password Passed Test")
					document.getElementById("status2").classList.add("hidden");
					
					document.getElementById("knapp3").classList.remove("hidden")
					// prog.countPoints();
				}
				else
				{
					document.getElementById("status2").classList.remove("hidden");
					console.error("Password did not validate")
				}

			}
			else
			{
				document.getElementById("status2").classList.remove("hidden");
				console.error("Username did not validate")
			}
		}
		
	},
		

	setKnapp2: function(){
		var knapp2 =  document.getElementById("knapp2");
		knapp2.addEventListener("click", function(){
			login.login();
		})
	}
}