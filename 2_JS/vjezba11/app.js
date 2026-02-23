/*
console.log('Početak programa');
const i=7;

const rezultat = i + varijabla;

console.log(rezultat);

console.log('Kraj programa');
*/

try{
    console.log('Početak programa');
    const i = 7;
    const rezultat = i + varijabla;
    console.log(rezultat);
}catch(e){
    console.log('Greška', e.name, e.message, e);
}
console.log('Kraj programa');


console.log('Primjer 2');
const i = 7;
let rezultat = 0;
try{
    rezultat = i + varijabla;
}catch(e){
    rezultat = i + 1;
}finally{
    console.log(rezultat);
}
console.log('Kraj primjer 2');


function korijen(broj){
    if(broj <=0){
        throw new Error('Ne mogu izvaditi drugi korijen iz nule ili negativnog broja');
    }
    return Math.sqrt(broj);
}

try{
    console.log(korijen(9));
}catch(e){
    console.log(e);
}


console.log('Nakon korijena');

