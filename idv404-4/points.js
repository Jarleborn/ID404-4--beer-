var prog = {
    countPoints: function(){
              
             document.getElementById("button2").onclick = function(){
                 prog.countPointsCLick();
             }
            
        },
        countPointsCLick: function(){
            var arrPoints = document.querySelectorAll(".points");
                 console.log(arrPoints[0].value);
                 var counter = 0;
                 for(var i = 0; i < arrPoints.length; i++){
                     
                     if(arrPoints[i].value !="")
                     {
                        counter += parseInt(arrPoints[i].value); 
                        if(i === 12){
                           if (confirm("Är du säker på att du vill skicka?") == true) {
                                prog.counterP(counter,arrPoints)
                            } 
                        }
                     }
                     else
                     {
                           if(i === 12){
                         if (confirm("Alla deltagare har inte fått poäng, säker på att du vill skicka ändå?") == true) {
                                prog.counterP(counter,arrPoints)
                                
                            } }
                        }
                     
                     console.log(counter,arrPoints);
                     
                 };
        },
        counterP: function(counter,arrPoints){
            var arrp = arrPoints.length;
            var completCount = counter/arrp
            console.log(completCount);
            var Ppoints = document.getElementById("points");
            Ppoints.innerHTML = "Lagets poäng är " + completCount;
        }
    
};