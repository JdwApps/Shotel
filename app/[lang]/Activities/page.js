import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import ImaBeach from "../components/ImaBeach";
import ImaDroAct from "../components/ImaDroAct";
import ImaSnorkel from "../components/ImaSnorkel";
import ImaSurf from "../components/ImaSurf";
import Separator from "../components/Separator";
import SeparatorB from "../components/SeparatorB";
import dynamic from 'next/dynamic';
import { getDictionary } from "../../../dictionary";


export default async function Activities({params}) {

    const lang = await getDictionary(params.lang);

    const DynamicBocasMap = dynamic(
        () => import('../components/BocasMap'),
        { ssr: false }
       );
    

    return (
        <div className="bg-gray-800">
            <NavBar />
            <BGSlider title='Activities'
                images={['chambre1.jpg', 'chambre2.jpg', 'chambre3.jpg', 'chambre4.jpg']}
            />
            <div className='py-12'>
                <Title text='Activities' />
                <ImaBeach />
                <Separator />
                <ImaDroAct titre={lang.name} text='blabla' image='chambre1.jpg' />
                <SeparatorB />
                <ImaSnorkel />
                <Separator />
                <ImaSurf />
                <SeparatorB />
                <DynamicBocasMap />
            </div>

            <Footer />
        </div>
    );
};

