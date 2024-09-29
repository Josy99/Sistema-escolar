import { Form } from "../Form";
import { FalaConnoscoCantainer } from "./style";
import  imageFaleConnosco from "../../assets/image/criacao-sites-sao-paulo.png"

export function FalaConnosco() {
  return (  
    <FalaConnoscoCantainer>
         <h2>Fale Connosco</h2>
         <div>
            <img src= {imageFaleConnosco}/>
            <Form/>
         </div>
    </FalaConnoscoCantainer>
  )
}