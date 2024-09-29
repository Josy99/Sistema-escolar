
import { BookOpen, Student, User } from "phosphor-react";
import {HomeContainer} from "./style";

export function Admin() {
  return (
   <HomeContainer>
          <div>
              <Student size={60}/>
            <span>Total Alunos </span>
            <span>4000</span>
        </div>
        <div>
            <User size={60}/>
            <span>Total Professores</span>
            <span>4000</span>
        </div>
        <div>
            <BookOpen size={60}/>
            <span>Total Disciplina</span>
            <span>4000</span>
        </div>
   </HomeContainer>
  )
}