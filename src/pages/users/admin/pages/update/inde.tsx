import { FormUser } from "../../components/Form";
import { api } from "../../../../../lib/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { StudentContext } from "../../../../../context";

interface  handleUpdateProps{
  "nome": string,
  "idade": number,
  "classe": string,
  "sala":  string,
  "encarregado": string
}

export function UpdateUser() {

  const  navigate =  useNavigate()
  const  {id} = useParams()

  async function Delete(data:handleUpdateProps) {
      const {nome, idade, classe , sala, encarregado
      } =  data
      const  response = await api.put(`/dataBase/${id}`, {
        nome,
        idade,
        classe ,
        sala,
        encarregado
      })
      navigate("/cadastro_aluno")
  }

  return  (
    <>
      <FormUser onAction={Delete} title = {'Actualizar dados do aluno'}  textButton = {'Actualizar'}/> 
    </>
  )
}