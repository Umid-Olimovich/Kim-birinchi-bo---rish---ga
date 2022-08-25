document.querySelector('button').onclick = myClick;

function myClick() {
   let sum = document.getElementById('elementa').value - 0; 

   let piyoda = sum / 3.6 ; 
   let velo = sum / 20.1 ;
   let car = sum / 70 ;
   let sam = sum / 800 ;  
   document.querySelector('.a1').innerHTML = piyoda.toFixed(1) ;
   document.querySelector('.a2').innerHTML = velo.toFixed(1) ;
   document.querySelector('.a3').innerHTML = car.toFixed(1) ;
   document.querySelector('.a4').innerHTML = sam.toFixed(1) ;



}