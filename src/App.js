// import logo from './logo.svg';
import './App.css';
import Hello from './Composant/Hello';
import React , {useState , useEffect} from 'react';
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
  //4
function getData(data){
return data
}

  return (
    <div className="App">
      <header className="App-header">
         N1 {name}
        N2 {element}
        N3 {etudiant.nom} | {etudiant.prenom} | {etudiant.age}
        <br />
         N4 {listetudiant.map(function (item) {
          return(
             <div key={item.id}>
          {" "}
          {item.nom} | {item.prenom} | {item.age}{" "}
          </div>
          );
    })}
    N5<br/>
        {getData("slm")}
        <br/>
        N6
        <Hello etudiant={etudiant}></Hello>
      </header>
    </div>
  );
}

export default App;
