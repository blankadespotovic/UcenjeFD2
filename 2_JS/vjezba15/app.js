function dugiPoziv() {
    let i = 1;
    setTimeout(() => {
        console.log(i++);
        setTimeout(() => {
            console.log(i++);
            setTimeout(() => {
                console.log(i++);
            }, 1000);
        }, 2000);
    }, 5000);
}
console.log('Početak');
dugiPoziv();

async function cekaj(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Završio za ${ms / 1000} sekundi`);
        }, ms);
    });
}

async function izvedi(){
    let odgovor = await cekaj(5000);
    console.log(odgovor);

    for(let i=0; i<10; i++){
        const ms = (i+1)*1000;
        console.log(await cekaj(ms));
    }
}

izvedi();

(async ()=>{
    const url = 'https://dogapi.dog/api/v2/breeds';
    let li;
    await fetch(url)
    .then(res => res.json())
    .then(json => json.data.forEach(o =>{
        console.log(o.attributes.name);
        li = document.createElement('li');
        li.textContent = o.attributes.name;
        document.getElementById('podaci').appendChild(li);
    }))
    .catch(rej => console.log(`%c Nije dobar URL: ${url}`, 'color:red; font-size:20px'));
})();


(async ()=>{
    const url = 'https://dogapi.dog/api/v2/breeds';
    let li;
    await fetch(url)
    .then(res => res.json())
    .then(json => json.data.forEach(o =>{
        console.log(o.attributes.name);
        li = document.createElement('li');
        li.textContent = o.attributes.name;
        document.getElementById('podaci').appendChild(li);
    }))
    .catch(rej => console.log(`%c Nije dobar URL: ${url}`, 'color:red; font-size:20px'));
})();

