import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import ImaBeach from "../components/ImaBeach";
import ImaHikes from "../components/ImaHikes";
import ImaSnorkel from "../components/ImaSnorkel";
import ImaSurf from "../components/ImaSurf";
import Separator from "../components/Separator";
import SeparatorB from "../components/SeparatorB";
import dynamic from 'next/dynamic';


const Leasures = () => {
    const DynamicBocasMap = dynamic(
        () => import('../components/BocasMap'),
        { ssr: false }
       );
    

    return (
        <div className="bg-gray-800">
            <NavBar />
            <BGSlider title='Leasures'
                images={['plage1.jpg', 'plage2.jpg', 'plage3.jpg', 'plage4.jpg']}
            />
            <div className='py-12'>
                <Title text='Activities' />
                <ImaBeach />
                <Separator />
                <ImaHikes />
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

export default Leasures