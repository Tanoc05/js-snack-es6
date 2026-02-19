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

