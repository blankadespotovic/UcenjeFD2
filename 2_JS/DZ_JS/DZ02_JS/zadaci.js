const rezultat = document.getElementById('rezultat')
document.getElementById('izvedi').addEventListener('click', () => {

    const vrijednostA = document.getElementById('A').value;
    const vrijednostB = document.getElementById('B').value;
    const zadatak = document.getElementById('zadatak').value;

    if (zadatak === '1') {

        const poljeB = Number(vrijednostB);
        if (poljeB < 2 || poljeB > 100) {
            rezultat.innerHTML = "Broj mora biti veći od 2 i manji od 100";
            return;
        }
        
        const znamenke = poljeB.toString();
        const eksponent = znamenke.length;

        let zbroj = 0;

        for(let i = 0; i < znamenke.length; i++){
            zbroj += Math.pow(Number(znamenke[i]), eksponent);
        }

        if (zbroj === poljeB) {
            rezultat.innerHTML = `${poljeB} je Armstrongov broj`;
        } else {
            rezultat.innerHTML = `${poljeB} nije Armstrongov broj`;
        }

        return;
    }

    if (zadatak === '2') {

        if (!vrijednostA) {
            rezultat.innerHTML = 'Unesite tekst.'
            return;
        }

        const normalno = vrijednostA.toLowerCase();
        const obrnuto = normalno.split("").reverse().join("");


        if (normalno === obrnuto) {
            rezultat.innerHTML = (`'${vrijednostA}' je palindrom.`);
        } else {
            rezultat.innerHTML = (`'${vrijednostA}' nije palindrom.`);
        }
        return;
    }


    if (zadatak === '3') {

        if(!vrijednostB || vrijednostB === '') {
            rezultat.innerHTML = 'Unesite jednu od stop riječi u polje B.';
            return;
        }

        const stopRijeci = [
            'a', 'ako', 'ali', 'bi', 'bih', 'bila', 'bili', 'bilo', 'bio', 'bismo',
            'biste', 'biti', 'bumo', 'da', 'do', 'duž', 'ga', 'hoće', 'hoćemo', 'hoćete',
            'hoćeš', 'hoću', 'i', 'iako', 'idemo', 'ideš', 'ide', 'iz', 'iza', 'iznad',
            'ja', 'jako', 'jer', 'jesmo', 'jeste', 'jesu', 'je', 'kad', 'kada', 'kao',
            'kroz', 'li', 'me', 'mene', 'meni', 'mi', 'mimo', 'mene', 'moj', 'moja',
            'moje', 'mu', 'na', 'nad', 'nakon', 'nam', 'nama', 'nas', 'naš', 'naša',
            'naše', 'našu', 'ne', 'nego', 'neka', 'neki', 'nekog', 'neko', 'nema', 'netko',
            'neće', 'nećemo', 'nećete', 'nećeš', 'neću', 'ni', 'nije', 'nijedan', 'nikad',
            'nismo', 'niste', 'nisu', 'njega', 'njegov', 'njegova', 'njegovo', 'njemu', 'njen',
            'njena', 'njeno', 'njih', 'njihov', 'njihova', 'njihovo', 'njim', 'njima', 'njoj',
            'nju', 'o', 'od', 'odmah', 'on', 'ona', 'onaj', 'onam', 'onamo', 'one',
            'oni', 'ono', 'onolika', 'onoliko', 'onoliki', 'onoliku', 'ova', 'ovaj', 'ovdje',
            'ove', 'ovi', 'ovo', 'ovuda', 'pa', 'pak', 'po', 'pod', 'pored', 'poslije',
            'povrh', 'preko', 'pri', 'pred', 'prema', 'sa', 'sam', 'samo', 'se', 'sebe',
            'sebi', 'si', 'smo', 'ste', 'su', 'sve', 'svi', 'svog', 'svoj', 'svoja',
            'svoje', 'ta', 'taj', 'tako', 'tamo', 'te', 'tebe', 'tebi', 'ti', 'to',
            'točno', 'u', 'uz', 'vam', 'vama', 'vas', 'vaš', 'vaša', 'vaše', 'već',
            'vi', 'vrlo', 'za', 'zar', 'će', 'ćemo', 'ćete', 'ćeš', 'ću', 'što', 'the',
            'and', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has',
            'had', 'do', 'does', 'did', 'but', 'if', 'or', 'because', 'as', 'until',
            'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between',
            'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to',
            'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again',
            'further', 'then', 'once'
        ];

        let postoji = false;
        for (let i = 0; i < stopRijeci.length; i++) {
            if (vrijednostB.toLowerCase() === stopRijeci[i]) {
                postoji = true;
                break;
            }
        }

        if (postoji) {
            rezultat.innerHTML = `${vrijednostB} postoji u nizu.`;
        } else {
            rezultat.innerHTML = `${vrijednostB} ne postoji u nizu.`;
        }
        return;


    }

    if (zadatak === '4') {

        let samoglasnici = 0;
        let suglasnici = 0;

        for (let i = 0; i < vrijednostA.length; i++) {
            if (vrijednostA[i] !== '') {
                if (vrijednostA[i].toLowerCase() === 'a' || vrijednostA[i].toLowerCase() === 'e' || vrijednostA[i] === 'i' || vrijednostA[i] === 'o' || vrijednostA[i] === 'u') {
                    samoglasnici++
                } else suglasnici++
            }
        }
        rezultat.innerHTML = (`Rečenica ${vrijednostA} ima ${samoglasnici} samoglasnika i ${suglasnici} suglasnika.`)
        return;
    }

    if (zadatak === '5') {

        const brojA = Number(vrijednostA);
        const brojB = Number(vrijednostB);

        let ispis = '';
        if (brojA <= brojB) {
            for (let i = brojA; i <= brojB; i++) {
                ispis += i + '\t';
            }
        } else {
            for (let i = brojA; i >= brojB; i--) {
                ispis += i + '\t';
            }
        }
        rezultat.innerHTML = ispis;
        return;
    }

    if (zadatak === '6') {

        const duljina = Number(vrijednostA);
        const sirina = Number(vrijednostB);

        if (isNaN(duljina) || isNaN(sirina) || duljina <= 0 || sirina <= 0) {
            rezultat.innerHTML = 'Molimo unesite ispravne pozitivne brojeve';
            return;
        }

        const povrsina = duljina * sirina;

        rezultat.innerHTML = `Površina pravokutnika iznosi ${povrsina} .`;
        return;
    }

    if (zadatak === '7') {

        if (!vrijednostA || isNaN(vrijednostA)) {
            rezultat.innerHTML = 'Unesite broj u polje A';

            return;
        }

        const broj = Number(vrijednostA);

        if (broj > 0) {
            rezultat.innerHTML = 'Pozitivan.';
        } else if (broj < 0) {
            rezultat.innerHTML = 'Negativan.';
        } else {
            rezultat.innerHTML = 'Nula.';
        }

        return;

    }

    if (zadatak === '8') {

        let niz = [7, 'Osijek', 3, 'Kutina', 9, 'Pula'];

        if (vrijednostA !== '') {
            niz[niz.length] = vrijednostA;
        }

        if (vrijednostB !== '') {
            niz[niz.length] = vrijednostB;
        }

        let rez = 0;

        for (let i = 0; i < niz.length; i++) {
            if (!isNaN(niz[i])) {
                rez += Number(niz[i])
            }
        }
        rezultat.innerHTML = `<p>${niz}</p> <p>${rez}</p>`;
        return;
    }

    if (zadatak === '9') {

        let brojOcjena = Number(vrijednostA);
        let ocjene = vrijednostB;

        if (vrijednostA.length > 1) brojOcjena = Number(vrijednostB);
        if (vrijednostB.length < 2) ocjene = vrijednostA;

        const nizOcjena = ocjene.trim().split(/[,\s]+/).map(Number);

        if (Number.isNaN(brojOcjena) || brojOcjena <= 0 || brojOcjena > 5) {
            rezultat.innerHTML = 'Unesite ispravan broj ocjena';
            return;
        }

        if (nizOcjena.length !== brojOcjena) {
            rezultat.innerHTML = 'Broj unesenih ocjena ne odgovara broju ocjena';
            return;
        }

        let suma = 0;
        for (let i = 0; i < nizOcjena.length; i++) {
            if (Number.isNaN(nizOcjena[i])) {
                rezultat.innerHTML = 'Sve ocjene moraju biti brojevi';
                return;
            }
            suma += nizOcjena[i];
        }

        const prosjek = suma / brojOcjena;

        rezultat.innerHTML = `Prosjek ocjena je ${prosjek.toFixed(2)}`;
        return;

    }


    if (zadatak === '10') {

        const n = Number(vrijednostA)

        if (Number.isNaN(n) || n <= 0) {
            rezultat.innerHTML = 'Unesite pozitivan cijeli broj.';
            return;
        }

        let fib = [];

        if (n >= 1) fib.push(0);
        if (n >= 2) fib.push(1);

        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        rezultat.innerHTML = `Prvih ${n} Fibonaccijevih brojeva: ${fib.join(', ')}`;
        return;
    }


    if (zadatak === '11') {

        let recenica;

        if (vrijednostA !== '' && vrijednostB === '') {
            recenica = vrijednostA;
        } else if (vrijednostB !== '' && vrijednostA === '') {
            recenica = vrijednostB;
        } else {
            rezultat.innerHTML = 'Unesite vrijednost u jedno od unosnih polja (A ili B)'
            return;
        }

        rezultat.innerHTML = '';

        for (let i = recenica.length - 1; i >= 0; i--) {
            rezultat.innerHTML += recenica[i];
        }
        return;

    }

    if (zadatak === '12') {

        const temperatura = Number(vrijednostA);
        const vrsta = vrijednostB;

        if (Number.isNaN(temperatura)) {
            rezultat.innerHTML = 'Unesite ispravnu temperaturu.';
            return;
        }

        const celzijus = (temperatura - 32) * 5 / 9;
        const fahrenheit = temperatura * 9 / 5 + 32;

        if (vrsta === 'C') {
            rezultat.innerHTML = `${temperatura}°C = ${fahrenheit}°F`
        } else if (vrsta === 'F') {
            rezultat.innerHTML = `${temperatura}°F = ${celzijus}°C`;

        } else {
            rezultat.innerHTML = 'U polje B unesite C (Celzijus) ili F (Fahrenheit).';
        }
        return;
    }

    if (zadatak === '13') {

        const unos = vrijednostA;

        if (unos.trim() === "") {
            rezultat.textContent = "Unesite vrijednosti niza.";
            return;
        }

        const niz = unos
            .trim()
            .split(/\s+/)
            .map(Number);

        for (let i = 0; i < niz.length; i++) {
            if (Number.isNaN(niz[i])) {
                rezultat.textContent = "Svi elementi moraju biti brojevi.";
                return;
            }
        }

        niz.sort((a, b) => a - b);

        rezultat.textContent = `Sortirani niz: ${niz.join(", ")}`;
        return;
    }

    if (zadatak === '14') {





    }

    if (zadatak === '15') {





    }
















































    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});