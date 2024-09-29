import styled from "styled-components";

export const AsidePerfilContainer =  styled.div`
background-color: ${(props) => props.theme['gray-100'] };
height: 100vh;
width: 20rem; 

display:  flex; 
align-items: center; 
padding-top:  2rem; 
flex-direction: column; 
`

export const Avatar =  styled.div`

img  {
height: 100px;
width:  100px; 
border-radius:  50%; 
}
`

export const NavLink =  styled.nav`
ul  {
 display: flex; 
 flex-direction: column; 
 gap:  1rem;
 margin-top: 2rem; 
 list-style:  none;
}
a {
  text-decoration:  none; 
  color:  black;
  font-weight: bold;
}

`