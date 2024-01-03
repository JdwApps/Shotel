import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import BocasMap from "../components/BocasMap";


const Leasures = () => {
    return (
        <div className="bg-gray-800">
            <NavBar />
            <BGSlider title='Hotel and Restaurant' 
      images = {['plage1.jpg', 'plage2.jpg', 'plage3.jpg', 'plage4.jpg']}
      />
            <div className='py-12'>
            <Title text='Bluff Beach Delights'/>
            <BocasMap/>
            </div>
    
            <Footer />
        </div>
    );
};

export default Leasures