import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import Cha1 from "../components/Cha1";
import DinerMenu from "../components/DinerMenu";

const Restaurant = ({ params: { lng } }) => {
    return (
        <div className="bg-gray-800">
            <NavBar />
            <BGSlider title='Restaurant' 
      images = { ['image4.png', 'image2.png', 'image3.png', 'image1.png']}
      />
            <div className='py-12'>
            <Title text='Au menu'/>
            <DinerMenu/>
            </div>
    
            <Footer />
        </div>
    );
};

export default Restaurant