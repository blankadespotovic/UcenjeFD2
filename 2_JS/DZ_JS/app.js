document.getElementById('show').addEventListener('click', () => {
    const zadatak = document.getElementById('zadatak').value;
    const vrijednostA = document.getElementById('A').value;
    const vrijednostB = document.getElementById('B').value;
    const pogreskaA = document.getElementById('errorA');
    const pogreskaB = document.getElementById('errorB');

    if (zadatak === '1') {

        if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else pogreskaA.innerHTML = 'Upišite tekst u polje A';

        if (vrijednostB.trim()) {
            pogreskaB.innerHTML = '';
        } else pogreskaB.innerHTML = 'Upišite tekst u polje B';

        if (!vrijednostA.trim() || !vrijednostB.trim()) return;

        const niz = [vrijednostA, 20, 30, vrijednostB];
        const prvi = niz[0];
        const zadnji = niz[niz.length - 1];

        console.log(`Prvi: ${prvi}, Zadnji: ${zadnji}`);
        return;
    }

    if (zadatak === '2') {

        if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else pogreskaA.innerHTML = 'Upišite tekst u polje A';

        if (vrijednostB.trim()) {
            pogreskaB.innerHTML = '';
        } else pogreskaB.innerHTML = 'Upišite tekst u polje B';

        if (!vrijednostA.trim() || !vrijednostB.trim()) return;

        let index = vrijednostB.length;
        const niz = ["a", vrijednostA, "c"];

        if (!isNaN(vrijednostB)) {
            index = Number(vrijednostB);
        }
        if (index < 0 || index >= niz.length) {
            console.error(`Pogreška: index (${index}) je izvan duljine polja (${niz.length})`);
        } else console.log(niz[index]);
        return;
    }

    if (zadatak === '3') {

        if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else pogreskaA.innerHTML = 'Upišite tekst u polje A';

        if (vrijednostB.trim()) {
            pogreskaB.innerHTML = '';
        } else pogreskaB.innerHTML = 'Upišite tekst u polje B';

        if (!vrijednostA.trim() || !vrijednostB.trim()) return;

        const niz = [vrijednostA, vrijednostB, 3];

        if (niz.length >= 2) {
            [niz[0], niz[1]] = [niz[1], niz[0]];
        }

        console.log(niz);
    }

    if (zadatak === '4') {

        if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else pogreskaA.innerHTML = 'Upišite tekst u polje A';

        if (vrijednostB.trim()) {
            pogreskaB.innerHTML = '';
        } else pogreskaB.innerHTML = 'Upišite tekst u polje B';

        if (!vrijednostA.trim() || !vrijednostB.trim()) return;

        let niz = [vrijednostA, vrijednostB];

        if (typeof niz[0] === 'string' && niz[0].length < 3) {
            niz = [...niz, 'X'];
        } else {
            niz = ['Y', ...niz];
        }

        console.log(niz);
    }

    if (zadatak === '5') {

        if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else {
            pogreskaA.innerHTML = 'Upišite tekst u polje A';
            return;
        }

        let tipVrijednosti;

        switch (true) {
            case !isNaN(vrijednostA) && vrijednostA.trim() !== "":
                tipVrijednosti = "broj";
                break;
            case vrijednostA === "true" || vrijednostA === "false":
                tipVrijednosti = "boolean";
                break;
            default:
                tipVrijednosti = "string";
        }
        console.log(`Prvi element je ${tipVrijednosti}.`);
    }

    if (zadatak === '6') {

        if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else pogreskaA.innerHTML = 'Upišite tekst u polje A';

        if (vrijednostB.trim()) {
            pogreskaB.innerHTML = '';
        } else pogreskaB.innerHTML = 'Upišite tekst u polje B';

        if (!vrijednostA.trim() || !vrijednostB.trim()) return;


        const niz = [vrijednostA, vrijednostB, 'KRAJ']

        niz.length -= 1;

        console.log(niz);
    }


    if (zadatak === '7') {

        if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else pogreskaA.innerHTML = 'Upišite tekst u polje A';

        if (vrijednostB.trim()) {
            pogreskaB.innerHTML = '';
        } else pogreskaB.innerHTML = 'Upišite tekst u polje B';

        if (!vrijednostA.trim() || !vrijednostB.trim()) return;

        const niz1 = [vrijednostA, 2];
        const niz2 = [vrijednostB, 4];
        const niz3 = [...niz1, ...niz2];

        console.log(niz3);

    }

    if (zadatak === '8') {

        const z8 = ['A', , 'B'];

        if (z8[1] !== undefined) {
            console.log('Indeks 1 ima element');
        } else {
            console.log('Indeks 1 nema element');
        }
    }

    if (zadatak === '9') {
        if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else pogreskaA.innerHTML = 'Upišite tekst u polje A';

        if (vrijednostB.trim()) {
            pogreskaB.innerHTML = '';
        } else pogreskaB.innerHTML = 'Upišite tekst u polje B';

        if (!vrijednostA.trim() || !vrijednostB.trim()) return;

        const niz = [vrijednostA, vrijednostB, '6', '7'];

        const [first, ...rest] = niz;

        console.log(first);
        console.log(rest);

    }

    if (zadatak === '10') {

         if (vrijednostA.trim()) {
            pogreskaA.innerHTML = '';
        } else pogreskaA.innerHTML = 'Upišite tekst u polje A';

        if (vrijednostB.trim()) {
            pogreskaB.innerHTML = '';
        } else pogreskaB.innerHTML = 'Upišite tekst u polje B';

        if (!vrijednostA.trim() || !vrijednostB.trim()) return;

        switch (true) {

            case (vrijednostA === '' || vrijednostB === ''):
                niz = [];
                break;

            case (vrijednostA === vrijednostB):
                niz = [vrijednostA];
                break;

            case (Number(vrijednostB) === 2):
                niz = [vrijednostA, vrijednostB];
                break;

            default:
                niz = [vrijednostA, vrijednostB, 'x'];
        }

        console.log(niz);

    }




});