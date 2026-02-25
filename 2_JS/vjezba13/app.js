
class Osoba {
    #ime;

    get ime() { return this.#ime; }
    set ime(s) { this.#ime = s; }

    constructor(ime = '') {
        if (ime.length > 0) {
            this.#ime = ime;
        }
    }
}

const osoba = new Osoba();
const datum = new Date();
osoba.ime = 'Pero';
osoba.prezime = 'Perić';
console.log(osoba.ime);

const o = new Osoba('Đurđica');
console.log(o.ime);

class Polaznik extends Osoba {
    #odradioObaveze;
    get odradioObaveze() { return this.#odradioObaveze; }
    set odradioObaveze(b) { this.#odradioObaveze = b; }

    constructor(ime = '', oo = false) {
        super(ime);
        this.#odradioObaveze = oo;
    }
}

const p = new Polaznik('Karlo', true);

console.log(p.ime, p.odradioObaveze);

class Predavac extends Osoba {
    #vrsta;
    get vrsta() { return this.#vrsta; }
    set vrsta(s) { this.#vrsta = s; }
    constructor(ime = '', vrsta = '') {
        super(ime);
        if (vrsta.length > 0) {
            this.#vrsta = vrsta;
        }
    }
    toString(){
        return `${this.vrsta} ${super.ime}`;
    }
}

const pr = new Predavac('Pero Perić', 'vanjski suradnik');

console.log(pr);
console.log(`${pr}`);

console.log(Math.random());

class Pomocno{
    static slucajniBroj(){
        return 7;
    }
}

console.log(Pomocno.slucajniBroj());