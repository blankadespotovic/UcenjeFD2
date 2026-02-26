function* primjerGenerator(){
    console.log('Početak rada generatora');
    yield true; 
    yield 2.8;
    yield 1;
    return 'Gotov';
}

 const generator = primjerGenerator();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

let g;
do{
    g = generator.next();
    console.log(g.value);
}while(!g.done);

function* sljedeciID(){
    let id = 1;
    while(true){
        yield `ID_${id++}`;
    }
}

const id = sljedeciID();

console.log(`Sljedeći ID: ${id.next().value}`);

for(let i = 0; i<10; i++){
    console.log(`Sljedeći ID u petlji: ${id.next().value}`);
}

function* razgovor(){
    let odgovor; 
    while(true){
        odgovor = yield 'Kako se zoveš?';
        console.log(`generator kaže: Drago mi je, ${odgovor}`);
    }
}

const chat = razgovor();

let pitanje = chat.next().value;
console.log(pitanje);
pitanje = chat.next('Marko').value;
console.log(pitanje);

console.log(chat.next('Marija').value);