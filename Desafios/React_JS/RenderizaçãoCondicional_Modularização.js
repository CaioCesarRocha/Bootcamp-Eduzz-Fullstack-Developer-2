import React from "react";
import ReactDOM from 'react-dom';
import Button from './Button'
import "./styles.css";

const element =  'Digital Curso Inovattion'
const element2 = <h1 className="title2">Tamo ai na atividade =D</h1>

const buttonA = <button>Lista Users cadastrados</button>
const buttonB = <button>Lista Users devedores</button>//somente pro admin ver

const admin = true;

const App = () =>{

    const renderShowUsersGeral = () => (
        <div>
             Clique no botão para ver a lista de usuários cadastrados
                <br/>
                {buttonA}          
        </div>
    )

    const renderShowUsersDevedores = () => (  //"modularização" do código, ajuda na manutenção
        <div>
             Clique no botão para ver a lista de usuários devedores
                <br/>
                {buttonB}          
        </div>
    )

    return (
        <div className="App">
            {element}
            {element2}
            {admin ? renderShowUsersGeral() : renderShowUsersDevedores()}        
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement); //renderiza no root tudo que for passado pro App;

