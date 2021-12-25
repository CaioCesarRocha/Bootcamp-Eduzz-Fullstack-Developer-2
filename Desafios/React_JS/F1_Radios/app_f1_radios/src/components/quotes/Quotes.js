import styled from 'styled-components';
import {Button } from '../../components';
import {string, func} from 'prop-types';

export const Quotes = ({quote, pilot, onUpdate}) =>{
    return(
        <div>
            <Quote>{quote}</Quote>
            <PilotID>{pilot}</PilotID>
            <Button onClick={onUpdate}>Box Messages</Button>
        </div>
    );
};

Quotes.propTypes = {
    quote: string,
    pilot: string,
    onUpdate: func
};

const Quote= styled.p `
    font-size: 20px;
    color: #a596d6
`;


const PilotID = styled.p `
    font-size: 25px;
    color: #6a5aa1
`;






