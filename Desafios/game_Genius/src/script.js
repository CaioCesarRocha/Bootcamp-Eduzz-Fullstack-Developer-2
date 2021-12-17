import Swal from 'sweetalert2';

let order = [] //pra fazer as ordem alatorias
let clickedOrder = [] //ordem dos cliques do usuario
let score = 0; //para realizar a pontuação do game

//0-rocho
//1-vermelho
//2-amarelo
//3- azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const purple = document.querySelector('.purple');

//criando ordem aleatoria pros valores a serem exibidos
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4); // cria um num aleatorio de 0-3
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+ 1)//funcao pra exibir a cor leve para ser clicada
    }
}

let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected'); //pra ascender
    }, number - 250); //ddurante esse tempo

    setTimeout(() =>{
        element.classList.remove('selected'); //remover a "luzx acesa"
    }, number);
}

//Checa se o usario acertou as luzes
let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            return; //parar a iteração apos o lose
        }
    }
    if(clickedOrder.length == order.length){

        Swal.fire({
            icon: 'success',
            title: `Parabéns, vc acertou!\n Sua pontuação atual é ${score}`,
            text: 'Vamos para a próxima rodada?',
            allowOutsideClick: false
        }).then(() => {
            nextLevel();
        });       
    }
}

//funcao para cada clique do usuario
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);  
}


//funçao para retornar a cor "criada"
let createColorElement = (color) =>{
    if(color == 0){
        return purple;
    }
    else if(color == 1){
        return red;
    }
    else if(color == 2){
        return yellow;
    }
    else {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();
}


let lose = () => {
    score--;//tirar a diferença pra quando erra.
    Swal.fire({
        icon: 'error',
        title: `Opss, vc errou!\n Sua pontuação foi ${score}`,
        text: 'Clique em OK para recomeçar.',
        allowOutsideClick: false
    }).then(() => {
            order = []; //zerando a ordem e os clicked historico
            clickedOrder = []
            console.log('vou chamar o play')
            playGame();   
        });

}
 
    //alert(`Pontuação: ${score}\n Você perdeu! Clique no OK para recomeçar!`)
    

//function para inicio do jogo.
let playGame = () =>{
    Swal.fire({
        title: 'Bem vindo ao Scope Genius!',
        text: 'Clique no OK para começar a jogar!',
        imageUrl: 'https://cdn.dribbble.com/users/204955/screenshots/3168377/genius.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        allowOutsideClick: false
    }).then(()=>{
        score = 0;   
        nextLevel();
    })   
}

//pegar as cores que foram clicadas
purple.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame();


