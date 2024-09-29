import { Backpack, BookBookmark, FileSearch, Laptop} from "phosphor-react";
import { CardRoundContainer , CardContent, SectionService} from "./style";

export function CardRound() {
  return (
    <SectionService>
        <h1>Service</h1>
        <CardRoundContainer>
            <CardContent>
                <div>
                  <Laptop size={50} color="white"/>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur  <br /> 
                  Tenetur magnam iste veritatis velit repudiandae unde amet?
                </p>
            </CardContent>
            <CardContent>
                <div>
                <BookBookmark size={48} color =  "white"/>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur  <br /> 
                  Tenetur magnam iste veritatis velit repudiandae unde amet?
                </p>
            </CardContent>
            <CardContent>
                <div>
                  <Backpack size={50} color="white"/>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur  <br /> 
                  Tenetur magnam iste veritatis velit repudiandae unde amet?
                </p>
            </CardContent>
        </CardRoundContainer>
    </SectionService>
  )
}