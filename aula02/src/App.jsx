import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import exercicio7h from "./Exercicio7";
export default function App()
{
  return(
   <div>
    <h1>Aula 02 - Criação de Componentes</h1>
     <div className="card"> 
     <h3>Chamadas para o Componentes Exemplo1</h3>
      <Exemplo1 numero1={10} numero2={20}/>

     </div>
     
     <div className="card">
      <h3>Exercicio 1</h3>

      <Exercicio1 numero={12} />
      <Exercicio1 numero={67} />
      <Exercicio1 numero={-5} />

     </div>
     <div className="card">
      <h3>Exercicio2</h3>
      <Exercicio2 peso={80} altura={1.80} />
      <br />
      <Exercicio2 peso={60} altura={1.60} />
  </div>
  <div className="card">
    <h3>Exercicio3</h3>
    <Exercicio3 n1={7.5} n2={6.5} />
    <br />
    <Exercicio3 n1={3} n2={6.5} />
  </div>
  <div className="card" >
    <Exercicio4 tipo={retangulo} base={10} altura={5}  />
    <Exercicio4 tipo={triangulo} base={10} altura={5}  />
    <Exercicio4 tipo={quadrado} base={10} altura={10}  />
  </div>
  <div className="card">
   <Exercicio7 celcius={30}/>



  </div>
   </div>

  )
}