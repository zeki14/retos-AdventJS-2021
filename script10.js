function getCoins(change) {
    // ¡No olvides compartir tu solución en redes!
    const amountOgChange = [0,0,0,0,0,0]
    while(change>0){
      if(change >=50){
        change -=50;
        amountOgChange[5] = amountOgChange[5] +1;
        
      }else if(change >=20){
         change -=20;
        amountOgChange[4]= amountOgChange[4] +1;
      }else if(change>=10){
         change -=10;
        amountOgChange[3]= amountOgChange[3] +1;
      }else if(change>=5){
         change -=5;
        amountOgChange[2]= amountOgChange[2] +1;
      }else if(change>=2){
         change -=2;
        amountOgChange[1]= amountOgChange[1] +1;
      }else{
         change -=1;
        amountOgChange[0]= amountOgChange[0] +1;
      }
  
    }
    return amountOgChange;
    }

    console.log(getCoins(51))