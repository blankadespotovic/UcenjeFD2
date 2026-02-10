console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');



console.log('===================================');

for(let i=0;i<10;i++){
    console.log('Edunova');
}

console.log('===================================');

for(let i=0;i<10;i++) console.log('Edunova');

console.log('===================================');


for(let i=0;i<10;i++){
    console.log(`i=${i+1}`);
}


console.log('===================================');

let suma=0;

for(let i=0;i<10;i++){
    suma += i+1;
   // debugger;
}
console.log(suma);
console.log((100*(100+1))/2);

console.log('===================================');

for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log((i+1)*(j+1));
    }
}

console.log('===================================');


for(let i=0;i<10;i++){
    if(i===3){
        continue;
    }

    if(i===7){
        break;
    }

    console.log(i);
}

console.log('===================================');

const niz = [1,2,3,4,5,6,7];

for(let i=0;i<niz.length;i++){
    console.log(niz[i]);
}

console.log('===================================');

for(let i=niz.length-1;i>=0;i--){
    console.log(niz[i]);
}

console.log('===================================');

for(const broj of niz){
    console.log(broj);
}

console.log('===================================');

const ime = 'Nina';
for(let i=0;i<ime.length;i++){
    console.log(ime[i]);
}

console.log('===================================');


let b=0;

for(;;){
    if(b>50){
        break;
    }
    console.log(b++);
}

