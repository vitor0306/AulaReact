export default function Exercicio10 ({salario})
{
let total, gratificasao;
gratificasao= (salario*0.08)
total= (salario+gratificasao)
return(

    <div>
        salario base {salario}
        gratificasao {gratificasao}
        salario final {total}
    </div>

)
}