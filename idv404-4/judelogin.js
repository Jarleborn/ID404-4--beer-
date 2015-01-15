document.getElementById("knapp3").addEventListener("click",function(){ 
	document.getElementById("judgeinlogg").classList.remove("hidden");
	document.getElementById("knapp3").classList.add("hidden");
});

var judgeCode = "123456789"
document.getElementById("knapp5").addEventListener("click",function(){ 
	var tryJudgeCode = document.getElementById("judgenr").value;
	if( tryJudgeCode == judgeCode){
	document.getElementById("pointsPutt").classList.remove("hidden");
	document.getElementById("judgeinlogg").classList.add("hidden");
	prog.countPoints();
	}
	else
	{
		document.getElementById("judegstatus").classList.remove("hidden")
	}
});


