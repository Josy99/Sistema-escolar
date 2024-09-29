import { Banner } from "../../components/Banner";
import { CardRound } from "../../components/CardRounded";
import { FalaConnosco } from "../../components/FalaConnosco/inde";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sliders } from "../../components/Slider";

export function  Home(){
  return (
    <>
      <Header/>
      <Banner/>
      <CardRound/>
      <FalaConnosco/>
      <Sliders/>
      <Footer/>
    </>
   
  )
}