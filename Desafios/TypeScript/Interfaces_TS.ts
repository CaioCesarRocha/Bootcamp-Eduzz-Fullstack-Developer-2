function soma(a: number, b: number){ //com isso nao precisa verificar se é number usando typeof
    return a + b;
}

//----------------------------------------------------------------------------

interface IJogador{
    nome: string;
    posicao: 'Atacante' | 'Zagueiro';
}

interface ICentroavante extends IJogador{
    CamisaNove: boolean;
}

const jogador: IJogador ={
    nome: 'Neymar',
    posicao: 'Atacante'
}

const centroAvante: ICentroavante = { //recebe todos atributos do Jogador(extends)
    nome: 'Lewandowski',
    posicao: 'Atacante',
    CamisaNove: true
}