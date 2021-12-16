const input = document.getElementById('input') as HTMLInputElement;// -> diz pro TS que oq tamo pegando é um input element

input.addEventListener('input', (event)=>{
    const i = event.currentTarget as HTMLInputElement; // informa que o evento ocorrendo é um input html
    console.log(i.value)
});