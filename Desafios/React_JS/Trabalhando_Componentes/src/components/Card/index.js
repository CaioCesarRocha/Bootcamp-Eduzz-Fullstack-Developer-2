import {useState} from 'react';
import Button from '../Button';

const Card = ({title}) => {
    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1);
    }

    function Remover(){
        if(valor ===0){
            setValor(0)
        }
        else{
            setValor(valor - 1);
        }      
    }

    return (
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <Button
                    nameButton={'Adicionar'}
                    nameClass={"btn btn-primary"}
                    onClick={Adicionar}
                /> 
                <Button
                    nameButton={'Remover'}
                    nameClass={'btn btn-danger'}
                    onClick={Remover}
                />             
                <p>{valor}</p>              
            </div>
        </div>
    );
}

export default Card;