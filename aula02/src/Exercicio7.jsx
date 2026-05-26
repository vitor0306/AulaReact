export default function exercicio7({celcius,farenheit,kelvin})
{
let c= Number(celcius)
let f= Number((c*9/5)+32)
let k= Number(c+273,15)

return (
    <div>
        <p>
       o valor em celsius e {c} <br />
       o valor em farenheit e {f} <br />
       o valor em kelvin e {k}
       </p>
    </div>

 )
}