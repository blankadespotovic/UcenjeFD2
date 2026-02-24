const korisnici = [
    {id: 1, ime: 'Ana', prezime: 'Kartek', godina: 25, admin: false},
    {id: 2, ime: 'Karlo', prezime: 'Totig', godina: 29, admin: false},
    {id: 3, ime: 'Marko', prezime: 'Ćutić', godina: 45, admin: true},
    {id: 4, ime: 'Nikolina', prezime: 'Ćutić', godina: 49, admin: true},
    {id: 5, ime: 'Žana', prezime: 'Đitko', godina: 18, admin: false},
];


for(let i=0; i<korisnici.length; i++){
    console.log(korisnici[i].ime);
}

console.log('************************************');

korisnici.forEach(korisnik => console.log(korisnik.ime));

console.log('************************************');

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`));

console.log('************************************');

korisnici.forEach(o => {
    let oslovi = 'Poštovan';
    if(o.ime.endsWith('a')){
        oslovi += 'a gospođo';
    }else{
        oslovi += 'i gospodine';
    }
    console.log(`${oslovi} ${o.ime} ${o.prezime}`);
});

console.log('************************************');

korisnici.forEach(o => console.log(`Poštovan${o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine'} ${o.ime} ${o.prezime}`));

console.log('************************************');

const samoImena = korisnici.map(o => o.ime);
console.table(samoImena);

const imePrezime = korisnici.map( o => o.ime + ' ' + o.prezime);
console.table(imePrezime);


const maliNiz = korisnici.map(({id,ime,prezime}) => ({sifra: id, osoba: ime + ' ' + prezime}));
console.table(maliNiz);

console.log('************************************');

console.log(korisnici.find(o => o.id === 10)?.ime);

console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id);

console.log(korisnici.findIndex(o => o.id === 10));

console.log('************************************');

console.table(korisnici.filter(o => o.godina > 40));

console.log(korisnici.reduce((suma,o) => suma + o.godina, 0));


console.log(korisnici.some(o => o.admin) ? 'Ima admin' : 'Nema admin' );

console.log(korisnici.every(o => o.godina >=18) ? 'Svi su punoljetni' : 'Nisu svi punoljetni');


