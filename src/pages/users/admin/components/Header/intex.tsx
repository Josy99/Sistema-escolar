import { Form, HeaderPerfilContainer } from "./style";

export function  HeaderPerfil(){
  return (
    <HeaderPerfilContainer>
            <Form>
              <form action="">
                <input type="text" placeholder="Buscar"/>
              </form>
            </Form>
    </HeaderPerfilContainer>
  )
}