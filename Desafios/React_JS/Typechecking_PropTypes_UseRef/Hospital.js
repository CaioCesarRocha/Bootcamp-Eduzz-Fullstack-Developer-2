import React from "react";
import PropTypes from 'prop-types';

function Hospital (props){
    const { 
        nomePaciente, 
        horaConsulta, 
        nomeMedico, 
        nomeAcompanhante, 
        vacinado,
        onClick,
        resultado } = props


    return(
        <div>
            <h2>Nome do Médico: {nomeMedico}</h2>
            <h3>Nome do Paciente: {nomePaciente}</h3>
            <h3>Horário da Consulta: {horaConsulta}h</h3>
            <h4>Nome do(a) Acompanhante: {nomeAcompanhante}</h4>
            <h4>Paciente já esta vacinado? {vacinado ? 'Sim' : 'Não'}</h4>
            <button onClick={onClick}>Iniciar Consulta</button>
            <h1>Resultado: {resultado}</h1>
        </div>
    );

}

Hospital.defaultProps = { //permite estabelecer valores default
    nomeAcompanhante: 'Não registrado',
    nomePaciente: 'Maradonnna'
}

Hospital.propTypes = {
    nomePaciente: PropTypes.string.isRequired,
    horaConsulta: PropTypes.number.isRequired,
    nomeMedico: PropTypes.string.isRequired,
    nomeAcompanhante: PropTypes.string,
    vacinado: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    resultado: PropTypes.oneOf(['Positivo', 'Negativo']).isRequired
}

export default Hospital;