//Lidando com GENERIC TYPES

function addApendiceALista<T>(array: any[], value: T){ //add algum valor pra cada item da lista
    return array.map(item => item + value)
}

addApendiceALista([1,2,3],1);
//addApendiceALista(['a','b','c'],'de');


//o array vai receber variaveis de qualquer tipo
//por padrão, quando não sabemos o tipo,usamos T