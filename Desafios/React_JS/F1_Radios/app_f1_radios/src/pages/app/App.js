import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import f1 from '../../images/f1.png';
import carF1Sound from '../../sounds/carF1Sound.mp3';

const audio = new Audio(carF1Sound);

export function App() {
    const isMounted = useRef(true);

    const [quotes, setQuotes] = useState({
        pilot: 'Supermax',
        quote: 'man'
    });

    const onUpdate = async() => {
        audio.play()
        const quote = await getQuote();

        if (isMounted.current){ //só vai chamar se o componente estiver montado, tira o erro do unmounted
            audio.play();   
            setQuotes(quote)
        }       
    }

    useEffect(() =>{
        onUpdate();

        return () => {//essa função só é executada com o componente desmontado
            isMounted.current = false;
        };
    },[]);

    return(
        <Content>
            <Quotes {...quotes} onUpdate={onUpdate}/>
            <F1Img src={f1} alt="Fundo de tela F1"/>
        </Content>
    )
}

const Content = styled.div`
    height: 100vh;
    display: flex;
    padding-left: 30px;
    padding-bottom: 30px
    align-items: center;
`

const F1Img = styled.img`
    max-width: 23vw;
    margin-left: 70px;
    margin-bottom: 30px;
    align-self: flex-end;
`