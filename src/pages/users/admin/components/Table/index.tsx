import { useContext} from "react"
import { TableContainer, TableContent, Button} from "./style"
import { StudentContext } from "../../../../../context"
import { useNavigate } from "react-router-dom"

export  function Table() {
      const  {student, deleteStudent} =  useContext(StudentContext)

      const  navigate =  useNavigate()
      
     async function  handleDeleteUser (id: number) {
       await deleteStudent(id)
      }
  return ( 
         <TableContainer>
            <TableContent>
                <tbody>
                {student.map(student => {
                 return(
                <tr key={student.id}>
                    <td width = "30%">{student.nome}</td>
                    <td>{student.idade}</td>
                    <td>{student.classe}</td>
                    <td>{student.sala}</td>
                    <td>{student.encarregado}</td>
                    <td>
                        <div>
                            <Button variant="green" onClick={() => navigate(`/updateUser/${student.id}`)}>editar</Button>
                            <Button variant="red" onClick={() =>handleDeleteUser(student.id)}>eliminar</Button>
                        </div>
                    </td>
                </tr>
                 )
                })}
                </tbody>
            </TableContent>
         </TableContainer>
  )
}