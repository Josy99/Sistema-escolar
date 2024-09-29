import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Singin } from "../pages/singin";
import { Cadastro } from "../pages/users/admin/pages/cadastro";
import { LayoutUser } from "../pages/users/admin/layouUser";
import { Admin } from "../pages/users/admin/pages/home";
import { UpdateUser } from "../pages/users/admin/pages/update/inde";
import { AdicionarUser } from "../pages/users/admin/pages/add";


export function Routers() {
  return (  
    <div>
       <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/singin" element = {<Singin/>}/>

        <Route path="/" element =  {<LayoutUser/>}> 
          <Route path="/admin" element = {<Admin/>}/>
          <Route path="/cadastro_aluno" element = {<Cadastro/>}/>
          <Route path="/adicionarUser" element = {<AdicionarUser/>}/>
          <Route path="/updateUser/:id" element = {<UpdateUser/>}/>
        </Route>

       </Routes>
    </div>
  )
}