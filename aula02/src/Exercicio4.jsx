export default function Exercicio4({ tipo, base, altura, area }) {
   let areaq = Number(base) * Number(area)
   let areat = Number(2 / ((base) * (altura)))
   let t = String(tipo)

   if (t == retangulo) {
      return (
         <div>
            o retangulo tem a area de runDEV{areaq}
         </div>

      )
   }
   else {

      if (t == triangulo) {

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