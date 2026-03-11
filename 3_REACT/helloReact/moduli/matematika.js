export const PI=3.14

export function zbroji(a,b){
    return a+b
}

export default function pozdrav(ime){
    return `Hello, ${ime}`
}

function prva(){
    return `Ovo vidim jer je napravljen export. ${druga()}`
}

function druga(){
    return 'Ovo ne vidim izvan matematika.js'
}

export {prva}