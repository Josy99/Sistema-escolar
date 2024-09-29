import { FormContainer } from "./style";

export  function  Form() {
  return (  
    <FormContainer>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Assunto" />
              <input type="text" placeholder="Conteudo"/>
              <button>Enviar</button>
    </FormContainer>
  )
}