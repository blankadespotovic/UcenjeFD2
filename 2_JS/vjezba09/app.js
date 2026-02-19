const isDev=true;


pozdraviSvijet();

function pozdraviSvijet(){
    console.log('Hello world');
}

log('Pozdravljam svijet');
pozdraviSvijet();


function parniBrojevi(odBroja, doBroja){
    const min = odBroja<doBroja ? odBroja : doBroja;
    const max = odBroja>doBroja ? odBroja : doBroja
    for(let i=min; i<=max; i++){
        if(i % 2 ===0){
            console.log(i);
        }
    }
}

log('Prvi poziv parnih brojeva');
parniBrojevi(3,12);
log('Drugi poziv parnih brojeva');
parniBrojevi(48,25);

function log(poruka){
    if(!isDev){
        return;
    }
    console.log('\n');
    console.log('+---------------------------------+');
    console.log(poruka);
    console.log('+---------------------------------+');
}

function slucajniBroj(odBroja=0,doBroja=0){

    if(odBroja!=0 && doBroja!=0){
        return (Math.random()*(doBroja-odBroja)+odBroja).toFixed(0)
    }

    const broj = Math.random();
    const uvecano = broj * 1000;
    const cijeliBroj = parseInt(uvecano);
    return cijeliBroj;
}

log(slucajniBroj());

log((Math.random()*1000).toFixed(0));

log((Math.random()*(999-100)+100).toFixed(0));

log(slucajniBroj(100,999));

function zbrojPrimBrojeva(odBroja,doBroja){
    let suma = 0, prim = false;
    for(let i=odBroja; i<=doBroja; i++){
        if(i<=1){
            continue;
        }
        prim=true;
        for(let j=2; j<i; j++){
            if(i % j === 0){
                prim = false;
                break;
            }
        }
        if(prim){
            suma += i;
        }
    }
    return suma;
}

log(zbrojPrimBrojeva(-2,100));

//pozdravArrow();

const pozdravArrow = () => log('Hello arrow');

pozdravArrow();

const brojevi = {
    slucajniBroj: () => {
        return 7;
    },
    ime: 'Pero',
    nula: () => {return 0}
};

log(brojevi['nula']());