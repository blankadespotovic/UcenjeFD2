
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


    const x = Number(a)

    if (!x && x != 0) {
      rezultat.innerHTML = 'Unesi broj u polje A'

      return
    }

    console.log(x)

    const y = Number(b)

    if (!y) {
      rezultat.innerHTML = 'Unesi broj u polje B'

      return
    }



    if (x > y) {
      rezultat.innerHTML = x;
    } else if (y > x) {
      rezultat.innerHTML = y;
    }
    else {
      rezultat.innerHTML = 'Brojevi su jednaki';
    }
    return;



    //ovdje je kraj zadatka 1

    return; // short curcuiting
  }

  // Ovdje će doći drugi zadatak
  if (zadatak === '2') {
    const x = Number(a);
    const y = Number(b)
    const z = Number(c);


    if (!x && x != 0) {
      rezultat.innerHTML = 'Unesi broj u polje A'
      return;
    }

    if (!y && y != 0) {
      rezultat.innerHTML = 'Unesi broj u polje B'
      return;
    }

    if (!z && z != 0) {
      rezultat.innerHTML = 'Unesi broj u polje C'
      return;
    }


    if (x < y && x < z) {
      rezultat.innerHTML = x
    } else if (y < x && y < z) {
      rezultat.innerHTML = y
    } else {
      rezultat.innerHTML = z
    }
    return


  }

  //---------------------------------------------------- ZADAĆA -----------------------------------------------------------------------

  //ZADATAK 3

  if (zadatak === '3') {

    if (!a || isNaN(a)) {
      rezultat.innerHTML = 'Unesi broj u polje A';

      return;
    }

    if (!b || isNaN(b)) {
      rezultat.innerHTML = 'Unesi broj u polje B';

      return;
    }

    if (!c || isNaN(c)) {
      rezultat.innerHTML = 'Unesi broj u polje C';

      return;
    }

    if (!d || isNaN(d)) {
      rezultat.innerHTML = 'Unesi broj u polje D';

      return;
    }


    const brA = Number(a);
    const brB = Number(b);
    const brC = Number(c);
    const brD = Number(d);

    const zbroj = brA + brB + brC + brD;

    rezultat.innerHTML = `${zbroj}`;

    return;

  }


  // ZADATAK 4

  if (zadatak === '4') {

    if (!a || isNaN(a)) {
      rezultat.innerHTML = 'Unesite godinu rođenja u polje A';

      return;
    }

    const godinaRodenja = Number(a);
    const trenutnaGodina = new Date().getFullYear();
    const dob = trenutnaGodina - godinaRodenja;

    if (dob >= 18) {
      rezultat.innerHTML = `Punoljetan/na si.`;
    } else {
      rezultat.innerHTML = `Nisi punoljetan/na.`;
    }

    return;
  }

  //ZADATAK 5

  if (zadatak === '5') {

    if (!a || isNaN(a)) {
      rezultat.innerHTML = 'Unesite broj u polje A';

      return;
    }

    const broj = Number(a);

    if (broj > 0) {
      rezultat.innerHTML = 'Pozitivan.';
    } else if (broj < 0) {
      rezultat.innerHTML = 'Negativan.';
    } else {
      rezultat.innerHTML = 'Nula.';
    }

    return;

  }

  //ZADATAK 6

  if (zadatak === '6') {

    if (!a || isNaN(a)) {
      rezultat.innerHTML = 'Unesite broj u polje A';

      return;
    }

    const broj = Number(a);

    if (broj % 2 === 0) {
      rezultat.innerHTML = 'Paran.';
    } else {
      rezultat.innerHTML = 'Neparan.';
    }

    return;

  }


  //ZADATAK 7

  if (zadatak === '7') {

    if (!a || isNaN(a)) {
      rezultat.innerHTML = 'Unesite broj bodova u polje A';

      return;
    }

    if (a < 0 || a > 100) {
      rezultat.innerHTML = 'Broj bodova mora biti od 0 do 100.';

      return;
    }

    const bodovi = Number(a);

    if (bodovi >= 90 && bodovi <= 100) {
      rezultat.innerHTML = 'Odličan (5)';
    } else if (bodovi >= 80 && bodovi < 90) {
      rezultat.innerHTML = 'Vrlo dobar (4)';
    } else if (bodovi >= 70 && bodovi < 80) {
      rezultat.innerHTML = 'Dobar (3)';
    } else if (bodovi >= 60 && bodovi < 70) {
      rezultat.innerHTML = 'Dovoljan (2)';
    } else {
      rezultat.innerHTML = 'Nedovoljan (1)';
    }
    return;

  }


  //ZADATAK 8

  if (zadatak === '8') {

    if (!a || isNaN(a)) {
      rezultat.innerHTML = 'Unesite broj u polje A';

      return;
    }

    if (!b || isNaN(b)) {
      rezultat.innerHTML = 'Unesite broj u polje B';

      return;
    }

    if (b === 0) {
      rezultat.innerHTML = 'Ne može se dijeliti s nulom.';

      return;
    }

    const brA = Number(a);
    const brB = Number(b);

    if (brA % brB === 0) {
      rezultat.innerHTML = 'Djeljiv je.';
    } else {
      rezultat.innerHTML = 'Nije djeljiv.';
    }
    return;

  }

  //ZADATAK 9

  if(zadatak === '9'){
   // Upisanu vrijednost u polje C ispiši u rezultat
    rezultat.innerHTML=c






  return;
  }

  //ZADATAK 10

  if(zadatak === '10'){
    const x = Number(a);
    const y = Number(b);
    const z = Number(c),k = Number(d);
    console.log(x,y,z,k)

    if(!x){
      rezultat.innerHTML='Unesi broj u polje A';
      return;
    }

    if(!y){
      rezultat.innerHTML='Unesi broj u polje B';
      return;
    }

    if(!z){
      rezultat.innerHTML='Unesi broj u polje C';
      return;
    }

    if(!k){
      rezultat.innerHTML='Unesi broj u polje D';
      return;
    }

    rezultat.innerHTML=(x+y)*(z+k);
    


    return;
  }


  //ZADATAK 11
  //Za upisano ime grada u polje B ispiši da li je sjedište Edunove ili ne
  if(zadatak === '11'){

    if(!b){
      rezultat.innerHTML= 'Obavezan unos u polje B'
      return;
    }

    // if(b.toLowerCase() === 'osijek'){
    //   rezultat.innerHTML= `${b} je sjedište Edunove`
    // }else{
    //   rezultat.innerHTML= `${b} nije sjedište Edunove`
    // } 




    rezultat.innerHTML= b.toLowerCase() === 'osijek'?`${b} je sjedište Edunove`:`${b} nije sjedište Edunove`

    return;
  }

  //ZADATAK 12

  if(zadatak === '12'){
//Za upisanu vrijednost u polju A ispiši kubikažu
    const x = Number(a)

    if(!x || x<=0){
      rezultat.innerHTML='Broj mora biti veći od 0'
      return;
    }
    rezultat.innerHTML= x*x*x


    return;
  }

  //ZADATAK 13
  //Za upisanu vrijednost decimalnog broja u polje D ispiši samo decimalni dio

  if(zadatak === '13'){

    const cijeliBroj = parseInt(d)

    const decimalniBroj = parseFloat(d)

    if(!decimalniBroj){
      rezultat.innerHTML= 'Niste unijeli broj'
      return;
    }

    console.log(cijeliBroj,decimalniBroj)
    rezultat.innerHTML= decimalniBroj - cijeliBroj


    return;
  }










  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});
