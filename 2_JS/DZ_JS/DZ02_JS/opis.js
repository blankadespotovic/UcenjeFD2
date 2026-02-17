document.getElementById("zadatak").addEventListener("change", (e) => {
    const rezultat = document.getElementById('rezultat');
    rezultat.innerHTML = '—';
    const opis = document.getElementById("opis");
    opis.style = "display: block;"
    switch (e.target.value) {
        case "1": {
            opis.innerHTML = "Za uneseni cijeli broj u polje B veći od 2 i manji od 100 ispiši da li je Armstrongov broj ili ne.";
            break;
        }
        case "2": {
            opis.innerHTML = "Za unesenu riječ u polje A provjerite da li je palindrom ili ne";
            break;
        }
        case "3": {
            opis.innerHTML = "Provjeri da li u nizu stopRijeci postoji riječ pronađena u polju B";
            break;
        }
        case "4": {
            opis.innerHTML = "Za unesenu riječ u polju A ispiši koliko ima samoglasnika i koliko suglasnika";
            break;
        }
        case "5": {
            opis.innerHTML = "Ispiši sve brojeve odvojeno znakom tab (\t) između A i B ili B i A.";
            break;
        }
        case "6": {
            opis.innerHTML = "Napiši program koji od korisnika traži da unese duljinu i širinu pravokutnika, a zatim izračunava i ispisuje površinu pravokutnika.";
            break;
        }
        case "7": {
            opis.innerHTML = "Napiši program koji od korisnika traži da unese broj i ispisuje je li broj pozitivan, negativan ili nula";
            break;
        }
        case "8": {
            opis.innerHTML = "Napiši program koji deklarira niz, traži od korisnika da unese vrijednosti u niz, a zatim izračunava i ispisuje zbroj svih elemenata niza koji su brojčanog tipa.";
            rezultat.innerHTML = "7,Osijek,3,Kutina,9,Pula";
            break;
        }
        case "9": {
            opis.innerHTML = "Napiši program koji od korisnika traži da unese broj ocjena, a zatim i same ocjene. Program treba izračunati i ispisati prosjek ocjena.";
            break;
        }
        case "10": {
            opis.innerHTML = "Ispis Fibonaccijevog niza: napiši program koji od korisnika traži da unese broj n, a zatm ispisuje prvih n brojeva Fibonaccijevog niza (0, 1, 1, 2, 3, 5, 8...)";
            break;
        }
        case "11": {
            opis.innerHTML = "Napiši program koji od korisnika traži da unese string, a zatim ispisuje taj string naopako (npr. zdravo postaje ovardz";
            break;
        }
        case "12": {
            opis.innerHTML = "Napiši program koji od korisnika traži da unese temperaturu u Celzijusima i pretvara je u Fahrenheit (°F = °C * 9/5 + 32) ili obrnuto, ovisno o odabiru korisnika.";
            break;
        }
        case "13": {
            opis.innerHTML = "Napiši program koji deklarira niz, traži od korisnika da unese vrijednosti u niz, a zatim sortira niz uzlazno i ispisuje sortirani niz.";
            break;
        }
        case "14": {
            opis.innerHTML = "Napiši program koji od korisnika traži da unese dva broja i operaciju (+, -, *, /), a zatim izračunava i ispisuje rezultat. Koristi switch za odabir operacije.";
            break;
        }
        case "15": {
            opis.innerHTML =
                "Napiši Program od korisnika traži unos podataka:" +
                "<ul>" +
                "<li>Dužina lozinke</li>" +
                "<li>Uključena / isključena velika slova</li>" +
                "<li>Uključena / isključena mala slova</li>" +
                "<li>Uključeni / isključeni brojevi</li>" +
                "<li>Uključeni / isključeni interpunkcijski znakovi</li>" +
                "<li>Lozinka počinje ili ne s brojem</li>" +
                "<li>Lozinka počinje ili ne s interpunkcijskim znakom</li>" +
                "<li>Lozinka završava ili ne s brojem</li>" +
                "<li>Lozinka završava ili ne s interpunkcijskim znakom</li>" +
                "<li>Lozinka ima / nema ponavljajuće znakove</li>" +
                "<li>Broj lozinki koje je potrebno generirati</li>" +
                "</ul>" +
                "Shodno unesenim pravilima program generira rezultat (jedna ili više lozinki)</p>";
            break;
        }
    }
});