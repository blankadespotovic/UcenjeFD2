const uvjet=true;

if(uvjet){
    console.log('Uvjet je true');
}

if(uvjet){
    console.log('true');
}else{
    console.log('false');
}

if(!uvjet)
    console.log('!false');
else
    console.log('!true');
    console.log('Ovo se izvodi uvijek, nije dio else');

const ocjena = 2;

if(ocjena===2){
    console.log('Dovoljan');
}else if(ocjena===3){
    console.log('Dobar');
}

else{
    console.log('Ocjena nije 2 niti 3');
}

if(ocjena>0 && ocjena<=5){
    console.log('Ocjena je valjana');
}else{
    console.log('Nije ocjena');
}

console.log(ocjena>0 && ocjena<=5 ? 'Ocjena je valjana' : 'Nije ocjena');

const ime='';
if(ime){
    console.log('Varijabla ime ima vrijednost');
}else{
    console.log('ime nema vrijednost');
}

const b = Number('aaaa');
console.log(b); 

if(!b){
    console.log('b nije broj');
}

if(ime==null){

}

if(ime){
    
}