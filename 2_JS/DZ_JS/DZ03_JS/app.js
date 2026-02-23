function rekurzija(brojevi) {

    if (brojevi.length <= 2) {
        return brojevi.join("");
    }

    let noviNiz = [];

    for (let i = 0; i < Math.floor(brojevi.length / 2); i++) {
        let zbroj = brojevi[i] + brojevi[brojevi.length - 1 - i];

        if (zbroj >= 10) {
            noviNiz.push(1);
            noviNiz.push(zbroj % 10);
        } else {
            noviNiz.push(zbroj);
        }
    }

    if (brojevi.length % 2 === 1) {
        noviNiz.push(brojevi[Math.floor(brojevi.length / 2)]);
    }

    return rekurzija(noviNiz);
}


function izracunaj() {

    let ime1 = document.getElementById("ime1").value.toLowerCase();
    let ime2 = document.getElementById("ime2").value.toLowerCase();

    let tekst = ime1 + ime2;

    if (tekst.length === 0) {
        alert("Upiši imena!");
        return;
    }

    let brojevi = [];

    for (let i = 0; i < tekst.length; i++) {
        let slovo = tekst[i];
        let count = 0;

        for (let j = 0; j < tekst.length; j++) {
            if (tekst[j] === slovo) {
                count++;
            }
        }

        brojevi.push(count);
    }

    let rezultat = rekurzija(brojevi);

    let r = document.getElementById("rezultat");
    r.innerHTML = "💗 Ljubav: " + rezultat + "%";
    r.classList.add("show");
}
