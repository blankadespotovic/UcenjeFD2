const a=2, b=3;
let rez;
rez = a + b;
console.log(rez);

console.log(9 % 2);
console.log(8 % 2);

rez = rez + 2;
console.log(rez);

rez += 2;
console.log(rez);

const x = 2;

rez -= x;
console.log(rez);

rez *= x;
console.log(rez);

rez /= x;
console.log(rez);

rez = rez + 1;
rez += 1;
rez++;

console.log(rez++);
console.log(rez);

console.log(++rez);

console.log(rez--);

console.log(--rez);

let i = 2, j = 1;
i = j++ - i;
j += --i - ++j;
console.log(i-j);

console.log('Osijek' === 'osijek');
console.log(5 === '5');

console.log(3 != 5);

let godine = 18;
console.log(godine > 18);
console.log(godine >= 18);

console.log(godine >= 18);
console.log(godine >= 21);

const i1 = godine >= 18;
const i2 = godine >= 21;
console.log (i1 && i2);

console.log(i1 || i2 );

console.log(!i1);

godine = 16;
console.log(godine >= 18 ? 'Punoljetan' : 'Maloljetan');

const skola = 'Edunova';
console.log('Najbolja škola je ' + skola);
console.log(`Najbolja škola je ${skola}`);
const razred = 4;
console.log('Idem u ' + razred + '. razred');
console.log(`Idem u ${razred}. razred`);

const niz = [2,2,1,1];
console.log(niz);
const noviNiz = [0, ...niz, 3];
console.log(noviNiz);

const osoba={
    ime: 'Pero',
    prezime: 'Perić'
};

console.table(osoba);

const polaznik = {
    ...osoba,
    edukacija: 'Frontend developer'
}

console.table(polaznik);

const [prvi, drugi] = [1,2];
console.log(prvi);
console.log(drugi);

const {prezime, ...objektBezPrezimena} = polaznik;
console.table(objektBezPrezimena);
console.log(prezime);

let sifra = null;
console.log(sifra ?? 'Šifra nije definirana');

sifra = '382c74c3-721d-4f34-80e5-57657b6cbc27'
console.log(sifra ?? 'Šifra nije definirana');

const korisnik ={
    adresa: {
        grad: 'Osijek',
    }
};

console.table(korisnik);
console.log(korisnik.adresa.grad);
console.log(korisnik?.adresa?.ulica?.toUpperCase());

const n = [2,3];
console.log(typeof n);
console.log(n instanceof Array);

console.log('prezime' in osoba);
console.log('prezime' in objektBezPrezimena);

const binarno = 5 | 3;
console.log(binarno);

console.log( 5 & 3);
