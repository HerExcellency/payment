import React, { useState, useEffect } from "react";
import app from '../assets/Img/phone.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleStop } from '@fortawesome/free-regular-svg-icons';

// Define types for FeatureBox props
// interface FeatureBoxProps {
//   step: number;
//   title: string;
//   description: string;
//   className?: string;
// //   alignment: "left" | "right" | "center"; 
// }

const RideAppLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check screen size for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render layout based on screen size
  return (
    <div className="flex justify-center items-center  ">
      <div className="container mx-auto px-4 py-10">
        {isMobile ? <MobileLayout /> : <DesktopLayout />}
      </div>
    </div>
  );
};

const DesktopLayout: React.FC = () => (
  <div className="flex  justify-between bg-white p-8 rounded-lg space-x-8 max-w-5xl mx-auto">
    <div>
        
        <div className={`max-w-sm  lg:text-right md:text-right lg:h-[40%] pt-[20%]`}>
            <div className="text-3xl font-bold text-[#0F2F56] mb-2 ">
                <FontAwesomeIcon icon={faCircleStop} />
            </div>
            <h3 className="font-bold text-lg text-gray-800 ">Request a Ride</h3>
            <p className="text-sm text-gray-500 mt-2">Enter your location and destination to request a ride with ease.</p>
        </div>
        <div className={`max-w-sm  lg:text-right md:text-right lg:h-[40%] pt-[20%]`}>
            <div className="text-3xl font-bold text-[#0F2F56] mb-2"><FontAwesomeIcon icon={faCircleStop} /></div>
            <h3 className="font-bold text-lg text-gray-800">Request a Ride</h3>
            <p className="text-sm text-gray-500 mt-2">Enter your location and destination to request a ride with ease.</p>
        </div>
    </div>
    <MobileScreen />
    <div>
        <div className={`max-w-sm  lg:text-left md:text-left lg:h-[40%] pt-[20%]`}>
            <div className="text-3xl font-bold text-[#0F2F56] mb-2"><FontAwesomeIcon icon={faCircleStop} /></div>
            <h3 className="font-bold text-lg text-gray-800">Request a Ride</h3>
            <p className="text-sm text-gray-500 mt-2">Enter your location and destination to request a ride with ease.</p>
        </div>
        <div className={`max-w-sm  lg:text-left md:text-left lg:h-[40%] pt-[20%]`}>
            <div className="text-3xl font-bold text-[#0F2F56] mb-2"><FontAwesomeIcon icon={faCircleStop} /></div>
            <h3 className="font-bold text-lg text-gray-800">Request a Ride</h3>
            <p className="text-sm text-gray-500 mt-2">Enter your location and destination to request a ride with ease.</p>
        </div>
    </div>
  </div>
);

const MobileLayout: React.FC = () => (
  <div className="flex flex-col items-center bg-white text-gray-700 p-6 rounded-lg  space-y-4 max-w-md mx-auto">
    <MobileScreen />
    <div className="space-y-6 w-full">
        <div className={`max-w-sm grid `}>
            <div className="text-3xl font-bold text-[#0F2F56] mb-2"><FontAwesomeIcon icon={faCircleStop} /></div>
            <h3 className="font-bold text-lg text-gray-800">Request a Ride</h3>
            <p className="text-sm text-gray-500 mt-2">Enter your location and destination to request a ride with ease.</p>
        </div>
        <div className={`max-w-sm grid `}>
            <div className="text-3xl font-bold text-[#0F2F56] mb-2"><FontAwesomeIcon icon={faCircleStop} /></div>
            <h3 className="font-bold text-lg text-gray-800">Request a Ride</h3>
            <p className="text-sm text-gray-500 mt-2">Enter your location and destination to request a ride with ease.</p>
        </div>
        <div className={`max-w-sm grid `}>
            <div className="text-3xl font-bold text-[#0F2F56] mb-2"><FontAwesomeIcon icon={faCircleStop} /></div>
            <h3 className="font-bold text-lg text-gray-800">Request a Ride</h3>
            <p className="text-sm text-gray-500 mt-2">Enter your location and destination to request a ride with ease.</p>
        </div>
        <div className={`max-w-sm grid `}>
            <div className="text-3xl font-bold text-[#0F2F56] mb-2"><FontAwesomeIcon icon={faCircleStop} /></div>
            <h3 className="font-bold text-lg text-gray-800">Request a Ride</h3>
            <p className="text-sm text-gray-500 mt-2">Enter your location and destination to request a ride with ease.</p>
        </div>
    </div>
    {/* <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Move to Top</button> */}
  </div>
);

// const FeatureBox: React.FC<FeatureBoxProps> = ({ step, title, description, className="" }) => (
//   <div className={`max-w-sm grid ${className}`}>
//     <div className="text-3xl font-bold text-blue-600 mb-2">{step}</div>
//     <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
//     <p className="text-sm text-gray-500 mt-2">{description}</p>
//   </div>
// );

const MobileScreen: React.FC = () => (
  <div className=" p-6 rounded-xl  max-w-xs mx-auto">
    {/* <h2 className="text-center text-lg font-semibold text-blue-700 mb-4">
      Welcome to Rypoge
    </h2> */}
    <img src={app} alt="App Mockup" className="mb-4 rounded-lg " />
    {/* <div className="space-y-2">
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign Up as a Rider</button>
      <button className="w-full bg-blue-200 text-blue-600 py-2 rounded-lg hover:bg-blue-300">Sign Up as a Driver</button>
      <button className="w-full bg-blue-200 text-blue-600 py-2 rounded-lg hover:bg-blue-300">Sign Up as Both</button>
    </div> */}
  </div>
);

export default RideAppLayout;
