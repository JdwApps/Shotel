import Navbar from "./components/NavBar";
import BGSlider from "./components/BGSlider";
import Footer from "./components/Footer";
import ImaGauche from "./components/ImaGauche";
import ImaGauche2 from "./components/ImaGauche2";
import ImaDroite from "./components/ImaDroite";
import Separator from "./components/Separator";
import SeparatorB from "./components/SeparatorB";
import ParallaxBanner from "./components/ParallaxBanner";
import BigText from "./components/BigText";
import { getDictionary } from "../../dictionary";


export default async function Home({params}) {
  const lang = await getDictionary(params.lang);

  console.log(lang, 'params for home')
  return (
    <div className="bg-gray-800">
      <Navbar />
      <BGSlider title='Hotel and Restaurant' 
      images = {['plage1.jpg', 'plage2.jpg', 'plage3.jpg', 'plage4.jpg']}
      />
      <ImaGauche image='chambre1.jpg' text={lang.homeHotel} title={lang.hotel}/>
      <Separator />     
      <ImaDroite image='plage1.jpg' text={lang.homeRestaurant} title={lang.resto}/>
      <SeparatorB />

      <ImaGauche image='plage3.jpg' text={lang.homeActivities} title={lang.activite}/>
      <ParallaxBanner />
      <BigText />

      <Footer />


    </div>
  );
};


