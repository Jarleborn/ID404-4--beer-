var test = {

	testRegRight: function() {
		document.getElementById("inprename").setAttribute("value","Hampus")
		document.getElementById("inpastname").setAttribute("value","Jarleborn")
		document.getElementById("inepost").setAttribute("value","i.am.hampe@gmail.com")
		document.getElementById("inpnumb").setAttribute("value","941209-5177")
		document.getElementById("inusname").setAttribute("value","hj222hi")
		document.getElementById("inpass1").setAttribute("value","lösenord")
		document.getElementById("inpass2").setAttribute("value","lösenord")
		kor();
		

	},
	testRegFirstNameWrong: function() {
		document.getElementById("inprename").setAttribute("value","Hampus")
		document.getElementById("inpastname").setAttribute("value","Jarleborn")
		document.getElementById("inepost").setAttribute("value","hj222hi@.se")
		document.getElementById("inpnumb").setAttribute("value","941209-5177")
		document.getElementById("inusname").setAttribute("value","hj222hi")
		document.getElementById("inpass1").setAttribute("value","lösenord")
		document.getElementById("inpass2").setAttribute("value","lösenord")
		kor();
		// var inputs = document.querySelectorAll("input");
		// for (var i = 0; i < inputs.length; i++) {
		// 	inputs[i].value = "";
		// };

	},
	testRegSSnumberWrong: function() {
		document.getElementById("inprename").setAttribute("value","Hampus")
		document.getElementById("inpastname").setAttribute("value","Jarleborn")
		document.getElementById("inepost").setAttribute("value","hj222hi@gmail.se")
		document.getElementById("inpnumb").setAttribute("value","94")
		document.getElementById("inusname").setAttribute("value","hj222hi")
		document.getElementById("inpass1").setAttribute("value","lösenord")
		document.getElementById("inpass2").setAttribute("value","lösenord")
		kor();
		// var inputs = document.querySelectorAll("input");
		// for (var i = 0; i < inputs.length; i++) {
		// 	inputs[i].value = "";
		// };

	},
	testlogin: function() {
		console.error("Username did not validate")
		console.error("Password did not validate")

	},
	testJudgeLogin: function(){
		document.getElementById("judgenr").setAttribute("value","WRONG")
		judgelogin();
	},
	empty: function(){
		var inputs = document.querySelectorAll("input");
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].value = "";
		};
	},
	
	init: function(){
		console.log("hoj");
		
		
			document.getElementById("tknapp1").classList.remove("hidden");
			document.getElementById("tknapp2").classList.remove("hidden");
		
		document.getElementById("tknapp3").classList.remove("hidden");
		
		
		document.getElementById("tknapp1").addEventListener("click", function(){
			test.testRegRight();
		})

		document.getElementById("tknapp2").addEventListener("click", function(){
			test.testRegFirstNameWrong();
		})
		document.getElementById("tknapp3").addEventListener("click", function(){
			test.testRegSSnumberWrong();
		})
		document.getElementById("tknapp4").addEventListener("click", function(){
			test.testlogin();
		})

		document.getElementById("tknapp5").addEventListener("click", function(){
			test.testJudgeLogin();
		})


		
	},
	initTest: function(){
		document.getElementById("tknapp0").addEventListener("click", function(){
			test.testRegSSnumberWrong();
			test.testlogin();
			test.testJudgeLogin();

		})
	}

};

window.onLoad = test.initTest();



