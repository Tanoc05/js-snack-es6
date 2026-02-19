const ArryBici = [
    {
        nome : "bianchi",
        peso : 56,
    },
    {
        nome : "atala",
        peso : 32,
    },
    {
        nome : "cinelli",
        peso : 14,
    }
]

let indice_peso_minore = 0;
for(let i = 0 ; i < ArryBici.length;i ++){
    if(i == 0 ) indice_peso_minore = i;
    if(ArryBici[i].peso < ArryBici[indice_peso_minore].peso){
        indice_peso_minore = i;
    }
}

console.log("bici con peso minore = [ nome : " + ArryBici[indice_peso_minore].nome + "  peso : " + ArryBici[indice_peso_minore].peso + " ]");


const ArraySquadre = [
    {
        nome : "juve" ,
        punti_fatti : 0,
        falli_subiti  : 0,
    },
    {
        nome : "inter" ,
        punti_fatti  : 0,
        falli_subiti  : 0,
    },
    {
        nome : "milan" ,
        punti_fatti  : 0,
        falli_subiti  : 0,
    }
]


for (let i = 0; i < ArraySquadre.length; i++) {
    ArraySquadre[i].falli_subiti = Math.round(Math.random() * 10);
    ArraySquadre[i].punti_fatti = Math.round(Math.random() * 10);
}

const array2 = [];


for (let i = 0; i < ArraySquadre.length; i++) {
    const dati = {
        nome : ArraySquadre[i].nome,
        falli_subiti : ArraySquadre[i].falli_subiti,
    }

    array2.push(dati);
}

for(let i = 0 ; i < array2.length;i++){
    console.log(array2[i].nome + "  " +array2[i].falli_subiti);
}












