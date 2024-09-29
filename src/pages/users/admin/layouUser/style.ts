import styled from "styled-components";

export const AdminContainer = styled.div`
display: grid; 
grid-template-areas:  
'HeaderContent HeaderContent'
'Aside Main'
`

export const  Header= styled.div`
grid-area: HeaderContent;
`

export const AsideBar = styled.div`
background: red; 
grid-area:  Aside;
width: 20rem;
`

export const Main = styled.div`
grid-area: Main;
width:  72rem; 
padding : 2rem; 

`


