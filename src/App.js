// import logo from './logo.svg';
import './App.css';
import Hello from './Composant/Hello';
function App() {
  //javascript
  //1
  const name = "abir karoui"
  const element = <h1>Hello</h1>
  //2
  const etudiant = {
    nom: "ahmed", prenom: "ben foulen", age: 10,
  };
  //3
  const listetudiant = [
    { nom: "yassin", prenom: "Agrbaoui", age: 20, id: 0 },
    { nom: "abir", prenom: "karoui", age: 24, id: 1 },
    { nom: "aziz", prenom: "ben foulen", age: 10, id: 2 },
    { nom: "yomna", prenom: "agrbaoui", age: 1, id: 3 },
  ];


  return (
    <div className="App">
      <header className="App-header">
        {name}
        {element}
        {etudiant.nom} | {etudiant.prenom} | {etudiant.age}
        <br />
        {listetudiant.map(function (item) {
          return <div key={item.id}>{item.nom} |{item.prenom} |{item.age} </div>
        }
        )}
        function
        <Hello abir="karoui"></Hello>
      </header>
    </div>
  );
}

export default App;
