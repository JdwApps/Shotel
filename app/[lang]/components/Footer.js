'use client'
import React , {useEffect} from "react";
import dynamic from 'next/dynamic';



const Footer = () => {
  const DynamicMapComponent = dynamic(
    () => import('./FootMap'),
    { ssr: false }
   );


  return (
    <footer className="bg-gray-600 text-white p-8">
      <div className="md:flex justify-between">
      <DynamicMapComponent/>
        <div className=" w-full md:w-1/2 px-12 flex flex-col justify-center">
          <div className="text-2xl">Contact Us</div>
          <div>Email:  sosebbocas@gmail.com</div>
          <div>Phone:   +50767987980</div>
          <div>Address: Bluff Beach, Isla Colón, Bocas del Toro, Panama</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

