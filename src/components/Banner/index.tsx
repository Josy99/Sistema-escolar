import { BannerContainer, TextBanner, Overlay } from "./style";
import  videoBackgroud  from "../../assets/video/video_estudante.mp4"

export function Banner() {
   return (
        <BannerContainer>
            <Overlay></Overlay>
            <video src= {videoBackgroud}  autoPlay loop muted width= "100%"></video>
            <TextBanner>
                <h1>Sistema Integrado de Gestão Escolar</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                aspernatur cumque vel sit eum minima a quas, id temporibus provident <br />
                quaerat animi, corrupti commodi unde consequuntur atque corporis deleniti labore?
                </p>
               <button> Começa  a experiência </button>
            </TextBanner>
        </BannerContainer>
   )
}