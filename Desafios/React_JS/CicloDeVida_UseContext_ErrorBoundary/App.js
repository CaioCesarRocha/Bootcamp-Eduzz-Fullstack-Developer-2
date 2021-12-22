
import Button from './components/Button';
import React, { useState} from "react";
import Twitter from './Twitter'
import { ThemeContext, themes } from './Themes';

function ColorsThemes(){
  //const color = themes.primary.name.console//codigo criado apenas para gerar o erro(ErrorBoundary)
}


const App = () => {
  ColorsThemes()
  const [change, setChange] = useState(false)
  const [posts, setPosts] = useState('Oi eu sou o goku')
  
  return (
    <>
      <h1>Trabalhando com HOOKS e Ciclos de Vida</h1>
      <ThemeContext.Provider value={{...themes.primary}}>    
        <Twitter posts={posts} change={change}/>
      </ThemeContext.Provider>     
      <button onClick={() => {setChange(true)}}>ComponentDidUpdate</button>
    </>
  )
}

export default App;
