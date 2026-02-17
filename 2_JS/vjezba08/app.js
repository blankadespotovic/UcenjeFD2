while(true){
    console.log('Edunova');
    break;
}

let brojac = 0;
console.time('while petlja');
while(brojac++<100){
    // console.log(brojac);
    // if(brojac %50 ===0){
    //     console.timeLog('while petlja');
    //     }
}
console.timeEnd('while petlja');

let brojUnos = '1262';
console.time('ZB1');

let zbroj = 0;
for(let i=0; i<brojUnos.length; i++){
    zbroj += parseInt(brojUnos[i]);
}
console.log(zbroj);
console.timeEnd('ZB1');


console.time('ZB2');

let broj = parseInt(brojUnos);

zbroj = 0;
while(broj>0){
    zbroj += broj % 10;
    broj = broj - (broj % 10);
    broj /= 10;
}
console.log(zbroj);

console.timeEnd('ZB2');


let br = 5;

for(let i=0; i>br; i--){
    console.log('Ušao u petlju', i);
}

let podaciSAPI = [];
// [
//     {
//         ime: 'Pero'
//     },
//     {
//         ime: 'Marko'
//     }
// ];

while(podaciSAPI.length>0){
    console.log('Ušao u while petlju', podaciSAPI.pop()?.ime);
}

