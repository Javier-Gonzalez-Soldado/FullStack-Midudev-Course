import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando con props' />
      <Mensaje color='green' message='Para un curso'/>
      <Mensaje color='yellow' message='de Midudev'/>
      <Description />
    </div>
  );
}

export default App;
