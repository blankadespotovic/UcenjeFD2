
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    //console.log('1. zadatak');
    //console.log(a);
    
    //ovdje rješavam zadatak 1


    const x= Number(a)
    
    if(!x && x!=0){
      rezultat.innerHTML = 'Unesi broj u polje A'
      
      return
    }

    console.log(x)

    const y= Number(b)

    if(!y){
      rezultat.innerHTML = 'Unesi broj u polje B'

      return
    }



    if(x > y){
      rezultat.innerHTML = x;
    }else if(y > x){
       rezultat.innerHTML = y;
    } 
    else{
      rezultat.innerHTML = 'Brojevi su jednaki';
    }
    return;



    //ovdje je kraj zadatka 1
    
    return; // short curcuiting
  }

  // Ovdje će doći drugi zadatak
  if(zadatak === '2'){
    const x = Number(a);
    const y = Number(b)
    const z = Number(c);


    if(!x && x!=0){
      rezultat.innerHTML = 'Unesi broj u polje A'
      return;
    }

    if(!y && y!=0){
      rezultat.innerHTML = 'Unesi broj u polje B'
      return;
    }

    if(!z && z!=0){
      rezultat.innerHTML = 'Unesi broj u polje C'
      return;
    }
  

    if(x<y && x<z){
      rezultat.innerHTML = x
    }else if (y<x && y<z){
      rezultat.innerHTML= y
    }else{
      rezultat.innerHTML = z
    }
    return


  }

  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



