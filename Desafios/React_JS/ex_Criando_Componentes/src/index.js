import React from "react";
import ReactDOM from 'react-dom';
import Button from './Button'
import "./styles.css";

const element =  'Digital Curso Inovattion'
const element2 = <h1 className="title2">Tamo ai na atividade =D</h1>

function soma (a,b){
    alert(a+b)
}

const App = () =>{
    return (
        <div className="App">
            {element}
            {element2}
            <Button onClick={()=> soma(13,20)} name="Soma positivos"/>
            <Button onClick={()=> soma(-10,-18)} name="Soma negativos"/>
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement); //renderiza no root tudo que for passado pro App;

