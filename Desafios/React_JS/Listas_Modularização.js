import React from "react";
import ReactDOM from 'react-dom';
import Button from './Button'
import "./styles.css";

const element =  'Digital Curso Inovattion'
const element2 = <h1 className="title2">Tamo ai na atividade =D</h1>

const user = [
    {
        id: 1,
        nome: 'Luan'
    },
    {
        id: 2,
        nome: 'Luiz'
    }
]

const App = () =>{

    const renderUsers = (user, index) => {
        return (
            <li key={`user-${user.id}`}>
                {user.name}
            </li>
        )
    }

    return (
        <div className="App">
            {element}
            {element2}
             <li>{user.map(renderUsers)}</li>      
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement); //renderiza no root tudo que for passado pro App;

