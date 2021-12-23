import React, { useRef } from "react";
import Hospital from './Hospital';


const App = () => {

  const handleClick = () =>{
    console.log('Iniciando consulta...')
  }
  const inputRef = useRef();

  const clickRef = () =>{
    inputRef.current.focus()
  }
  
  return (
    <>
      <h1>Trabalhando PropTypes</h1>
      <Hospital
        nomePaciente='Juan Marques'
        nomeMedico='Juliano Nicodetti'
        horaConsulta={10}
        vacinado={true}
        onClick={handleClick}
        resultado={'Positivo'}
      />
      <br/>
      <br/>
      Foco: <input ref={inputRef} />
      <br/>
      <br/>
      <button onClick={clickRef}>Focar</button>

    </>
  )
}

export default App;
