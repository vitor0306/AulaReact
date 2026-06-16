export default function Exercicio4({tipo,base,altura,})
{
   let areaq, areat;
    areaq = Number(base) * Number(area)
    areat = Number(2/((base)*(altura)))
   

   if (tipo == retangulo) {
      return (
         <div>
            o retangulo tem a area de {areaq}
         </div>

      )
   }
   else {

      if (tipo == triangulo) {

         return (
            <div>
               o triangulo tem a area de {arear}
            </div>
         )
      } else {
         return (
            <div>0</div>
         )
      }

   }

}