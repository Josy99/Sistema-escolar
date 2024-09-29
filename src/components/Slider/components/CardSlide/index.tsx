import { CardSlideContainer } from "./style";
import studate  from "../../../../assets/image/OIP.jpeg"
export function CardSlide() {
  return (
    <CardSlideContainer>
      <img src= {studate}/>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quis maiores minima expedita est, laboriosam asperiores dolorem. 
          Est veritatis iste iure placeat sint quos excepturi libero fugit,  
          nulla, atque numquam ea.
        </p>
        <button>Ver mais</button>
      </div>
    </CardSlideContainer>
  )
}