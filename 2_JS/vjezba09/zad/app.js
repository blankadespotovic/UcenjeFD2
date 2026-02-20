let tajniBroj;
let pokusaji;
const rezultat = document.getElementById('rezultat');
const poljeB = document.getElementById('b');
const poljeA = document.getElementById('a');
const novaIgra = document.getElementById('newGame');

function ucitajBroj(b) {
  const b2 = Number(b);

  if (!b2) {
    rezultat.innerHTML = 'Nisi unio broj!';
    return false;
  }

  if (b2 < 2 || b2 > 1000) {
    rezultat.innerHTML = 'Broj mora biti veći od 2 i manji od 1000';
    return false;
  }
  return b2;
}


function unesiBoju(b) {
  const jeLiValidanHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(b);

  if (jeLiValidanHex) return b;
  else {
    rezultat.innerHTML = 'Nije dobar HEX, ponovite.';
    return;
  }
}


function dohvatiRezultat(a, b) {

  if (a && b) return `Polje A: ${a}<br/>Polje B: ${b}`;
  else if (a && !b) return a;
  else if (!a && b) return b;
  else return '🍻🍕';
}


function generirajLozinku(najmanji, najveci) {
  return Math.floor(Math.random() * (najveci - najmanji + 1)) + najmanji;
}


function provjeriPokusaj(uneseniBroj) {
  if (!tajniBroj) return null;
  if (uneseniBroj < tajniBroj) return -1;
  else if (uneseniBroj > tajniBroj) return 1;
  else return 0;

}

const zadaci = {
  z1: (a, b) => {
    //console.log('Zadatak 1');

    const a1 = ucitajBroj(a);
    if (!a1) return;
    const b1 = ucitajBroj(b);
    if (!b1) return;
    rezultat.innerHTML = Math.abs(a1 - b1);

  },
  z2: (a, b) => {
    //console.log('Zadatak 2');

    const a1 = ucitajBroj(a);
    if (!a1) return;
    const b1 = ucitajBroj(b);
    if (!b1) return;

    rezultat.innerHTML = a1 < b1 ? b1 : a1;

  },
  z3: (a, b) => {
    //console.log('Zadatak 3');

    const a1 = ucitajBroj(a);
    if (!a1) return;
    const b1 = unesiBoju(b);
    if (!b1) return;
    rezultat.innerHTML = ''

    for (let i = 1; i <= a1; i++) {
      if (i % 2 === 0) rezultat.innerHTML += `<div style="border: 1px solid black; min-width: 30vw; min-height: 10vh; background-color: ${b1}"></div>`
      else rezultat.innerHTML += `<div style="border: 1px solid black; min-width: 30vw; min-height: 10vh;"></div>`
    }
  },
  z4: (a, b) => {
    //console.log('Zadatak 4');


    rezultat.innerHTML = dohvatiRezultat(a, b);
    return;

  },
  z5: (a) => {
    //console.log('Zadatak 5');
    if (pokusaji > 0) {
      let opis = provjeriPokusaj(Number(a));
      if (opis !== null) {
        pokusaji--;
        poljeB.value = pokusaji;
        if (opis === -1) rezultat.innerHTML = 'Uneseni broj je manji';
        else if (opis === 1) rezultat.innerHTML = 'Uneseni broj je veći';
        else {
          rezultat.innerHTML = 'Bravo! To je točan broj 🎉';
          pokusaji = 0;
          poljeB.value = pokusaji;
          novaIgra.style.display = 'block'
        }
      }
    } else {
      rezultat.innerHTML = 'Nema više pokušaja 😢';
      novaIgra.style.display = 'block'
    }
  }
}
// ovdje dodajemo nove zadatke

novaIgra.addEventListener('click', () => {
  tajniBroj = generirajLozinku(1, 100);
  pokusaji = 10;
  poljeB.value = pokusaji;
  poljeA.value = '';
  rezultat.innerHTML = '—';
  novaIgra.style.display = 'none';
});

document.getElementById('zadatak').addEventListener('change', (e) => {
  const helpText = document.getElementById('help');
  const helpTextB = document.getElementById('helpB')
  if (e.target.value === '5') {
    poljeB.readOnly = true;
    helpText.innerHTML = 'Pogodi broj od 1-100';
    helpTextB.innerHTML = 'Preostali broj pokušaja';
    helpText.style.display = 'block';
    helpTextB.style.display = 'block';
    tajniBroj = generirajLozinku(1, 100);
    pokusaji = 10;
    poljeB.value = pokusaji;
  } else {
    poljeB.readOnly = false;
    helpText.innerHTML = ''
    helpTextB.innerHTML = ''
    helpText.style.display = 'none';
    helpTextB.style.display = 'none';
    tajniBroj = undefined;
    pokusaji = undefined;
    poljeB.value = '';
  }
});

document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if (!(('z' + zadatak) in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
