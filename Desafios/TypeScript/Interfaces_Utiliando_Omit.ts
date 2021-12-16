interface Pessoa{
    name: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{

}

const brasileiro : Brasileiro ={
    name : 'Joao',
    idade : 20
    //nacionalide - nao exibe.
}

