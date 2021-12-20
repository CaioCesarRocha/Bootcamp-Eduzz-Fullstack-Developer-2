import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <h1>Criando componentes com React</h1>
      <ul>        
        <Item name='Item 1'/>
        <Item name='Item 2'/>
        <Item name='Item 3'/>
      </ul>
      <Card title='Card 1' />
      <Card title='Card 2' />
    </>
  )
}

export default App;
