export default function Exercicio2 ( {peso, altura} )
{
    let imc = Number (peso) / Number((altura)*(altura))
    return(
    <div>
    o seu peso {peso} sua altura e {altura}, o seu imc e  {imc}.
   </div>
    )
}