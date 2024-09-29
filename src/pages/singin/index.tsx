import { ArrowCircleLeft } from "phosphor-react";
import { ArrownBack, FormSinginContainer, FormSinginContent} from "./style";
import { Link } from "react-router-dom";

export function  Singin(){
  return (
    <>
    <ArrownBack>
            <Link to= "/"> <ArrowCircleLeft size={48} /></Link>
    </ArrownBack>
    <FormSinginContainer>
        <h2>Singin</h2>
        <FormSinginContent action="">
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
            <button>Singin</button>
        </FormSinginContent>
    </FormSinginContainer>
    </>
  )
}