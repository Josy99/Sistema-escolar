import { useContext } from "react";
import { FormUser } from "../../components/Form";
import { StudentContext } from "../../../../../context";
import { useNavigate } from "react-router-dom";

interface  AddStudent{
  "nome": string,
  "idade": number,
  "classe": string,
  "sala":  string,
  "encarregado": string
}

export function AdicionarUser() {
      const  {addStudent} =  useContext(StudentContext)
      const navigate =  useNavigate()

       async  function handleAdicionarUSer(data: AddStudent) {
           const {nome, idade, classe, sala, encarregado} =  data
           await  addStudent({
            nome, 
            idade,
            classe,
            sala, 
            encarregado
          })
          navigate("/cadastro_aluno")
         }

  return  ( 
    <div>
         <FormUser onAction =  {handleAdicionarUSer} title = {'Adicionar aluno'} textButton = {"Enviar"}/>
    </div>
  )
}