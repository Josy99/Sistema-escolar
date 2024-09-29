// import {  BookOpen,  Student, User} from "phosphor-react";

import { AsidePerfil } from "../components/AsideBar";
import { HeaderPerfil } from "../components/Header/intex";
import { AdminContainer, AsideBar, Header , Main} from "./style";
import { Outlet } from "react-router-dom";

export function LayoutUser() {
  return (
    <AdminContainer>
           <Header>
              <HeaderPerfil/>
           </Header>
           <AsideBar >
               <AsidePerfil/>
           </AsideBar>
           <Main>
              <Outlet/>
           </Main>
    </AdminContainer>
  )
}