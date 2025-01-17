// import logo from './logo.svg';
import '../App.css';
//import Hello from './Composant/Hello';
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
return data}
  //5
//const count = 0
const [count , setCount] = useState(0)
const [text, setText] = useState("text ") 
//6
//useEffect(() => {console.log("test")}  ) // ala kol modif
//useEffect(() => {console.log("test")} , []  ) //ken mara lola 
useEffect(() => {console.log("test")} , [text] ) // kol m tetbadel count
return (

    <div className="App">
      <header className="App-header">
         {/* N1 {name}
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
      <hr/> */}
      numero : {count}
      <button onClick={() => {setCount(count + 1 )}}> click </button>
      text : {text}
      <input onChange ={(e) => { setText (e.target.value) }} ></input>
      </header>
    </div>
  );
}

export default App;
