import './App.css';
//import MeusDados from './components/Atividade00/01MeusDados';
//import MeusDados from './components/Atividade00/02MeusDados';
//import Temperatura from './components/Atividade00/03Temperatura';
//import Pai from './components/Atividade01/questao1/01Pai';
//import * as PC from './components/Atividade01/02MeuPc';
import * as Batalha from './components/Atividade01/03Batalha'

/*function App() {
  return (
    <MeusDados 
    nome= "Ariadne"
    curso= "DD"
    universidade= "UFC-QUIXADA"
    />
  );
}

export default App;*/

/*function App() {
  return (
    <Temperatura/>
  );
}*/

/*function App() {
  return (
    <Pai/>
  );
}

export default App;*/

/*function App() {
  return (
    <div>
    <PC.PlacaDeVideo nome="RTX 3090" preco={10300.99} />
    <PC.PlacaMae nome="Gigabyte" preco={1000.99} />
    <PC.Memoria nome="DDR 4" preco={600.99} />
    </div>
  );
}

export default App;*/

function App() {
  return (
    <div>
    <Batalha.World>
      <Batalha.Arena name="Catelao"/>
      <Batalha.Hero name="Gatuno"/>
      <Batalha.Enemy name="Prof"/>
    </Batalha.World>
    </div>
  );
}

export default App;
