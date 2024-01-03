import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import Cha1 from "../components/Cha1";
import Separator from "../components/Separator";
import SeparatorB from "../components/SeparatorB";

const Hotel = () => {
    return (
        <div className="bg-gray-800">
            <NavBar />
            <BGSlider 
            title='Hotel' 
            images={['chambre1.jpg', 'chambre2.jpg', 'chambre3.jpg', 'chambre4.jpg']}
            />
            <div className='py-12'>
            <Title text='Our Rooms'/>
            </div>
            <Cha1 
            title='Standard Double'
            text='Indulge in the epitome of luxury with our Deluxe Suites, featuring breathtaking views, elegant furnishings, and spacious living areas. Enjoy a restful night s sleep on our plush king-sized beds and pamper yourself in the opulent en-suite bathrooms. Immerse yourself in comfort and sophistication, making your stay truly unforgettable.'
            CTAname='Book Now'
            CTAlink='https://secured.sirvoy.com/login'
            images={['chambre1.jpg','chambre2.jpg']}
            bgColor='bg-gray-800'     
            />
            <Separator/>
            <Cha1 
            title='Deluxe Double'
            text='Experience the perfect blend of comfort and functionality in our Executive Rooms. Designed for the discerning traveler, these rooms offer modern amenities, ergonomic workspaces, and serene ambiances. Unwind after a long day with our state-of-the-art entertainment systems, and wake up rejuvenated to seize the day ahead. Discover a harmonious balance between work and relaxation.'
            CTAname='Book Now'
            CTAlink='#'
            images={['chambre3.jpg','chambre4.jpg']}
            bgColor='bg-gray-600'     

            
            />
            <SeparatorB/>
            <Cha1 
            title='Prestige Double'
            text='Embrace a memorable family getaway in our spacious and inviting Family Suites. These thoughtfully designed accommodations provide ample space for the whole family to unwind and bond. Enjoy the convenience of interconnected rooms, ensuring both privacy and togetherness. Create lasting memories as you revel in the comfort and joy of our carefully curated family-friendly amenities.'
            CTAname='Book Now'
            CTAlink='#'
            images={['chambre2.jpg','chambre4.jpg']}
            
            />
  
            <Footer />
        </div>
    );
};

export default Hotel