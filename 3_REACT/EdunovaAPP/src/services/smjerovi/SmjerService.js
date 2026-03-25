import { smjerovi } from "./SmjerPodaci"

async function get() {
    return { data: [...smjerovi] }
}

async function getBySifra(sifra) {
    return { data: smjerovi.find(s => s.sifra === parseInt(sifra)) }
}



async function dodaj(smjer) {
    if (smjerovi.length === 0) {
        smjer.sifra = 1
    } else {
        smjer.sifra = smjerovi[smjerovi.length - 1].sifra + 1
    }
    smjerovi.push(smjer)
}

async function promjeni(sifra, smjer) {
    const index = nadiIndex(sifra)
    smjerovi[index] = {...smjerovi[index], ...smjer}
    
}

function nadiIndex(sifra) {
    return smjerovi.findIndex(s => s.sifra === parseInt(sifra))
}


export default {
    get,
    dodaj,
    getBySifra,
    promjeni
}