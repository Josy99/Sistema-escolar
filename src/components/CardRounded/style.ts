import styled from "styled-components"


export const  SectionService = styled.div`
margin: 2rem auto; 
width: 100%; 
max-width: 70rem; 

h1 {
  text-align: center; 
  margin-bottom:  2rem; 
}
`
export const CardRoundContainer = styled.div`
display: flex; 
justify-content: center; 
gap: 3rem;
`

export const CardContent = styled.div`

display: flex; 
flex-direction:  column; 
justify-content: center; 
align-items: center; 
gap: 2rem; 

div {
  border-radius:  50%; 
  height:  10rem; 
  width: 10rem; 
  background: ${(props) =>props.theme['gray-800']};

  display:  flex; 
  align-items: center;
  justify-content:  center; 

}
p {
  text-justify:  auto; 
}
`
