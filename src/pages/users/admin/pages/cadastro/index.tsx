
import { Plus } from "phosphor-react";
import { Table } from "../../components/Table";
import { CadastrarContainer , Text} from "./style";
import { useNavigate } from "react-router-dom";

export function Cadastro() {
  const navigate  =  useNavigate()
  return (
   <CadastrarContainer>
        <Text>
          <h1>Cadastro aluno</h1>
          <button onClick={() => navigate("/adicionarUser")}>
            Adicionar
            <Plus size={15}/>
          </button>
        </Text>
        <Table />
   </CadastrarContainer>
  )
}