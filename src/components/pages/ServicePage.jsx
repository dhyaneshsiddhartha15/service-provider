import React from 'react';
import { CupSoda, Timer } from 'lucide-react';
import SectionHeader from '../common/Bar';

const serviceData = [
  {
    id: 1,
    title: "Home",
    subtitle: "by CleanitAll",
    discount: "20% OFF",
    image: 'https://assets.api.uizard.io/api/cdn/stream/296e1861-58c8-4db3-9c10-13b4f037873e.png',
    buttonText: "Book Now",
  },
  {
    id: 2,
    title: "New Providers!",
    subtitle: "Meet our newest",
    discount: "30% OFF",
    image: 'https://assets.api.uizard.io/api/cdn/stream/a6ea6eff-68d8-4599-bbb2-427cf158de6e.png',
    buttonText: "Book Now",
  }
];

const ServiceCard = ({ title, subtitle, discount, image, buttonText }) => (
  <div className="bg-blue-50 p-2 rounded-lg mb-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{subtitle}</p>
    <div className="flex justify-between items-center mt-2">
      <img src={image} alt={title} className="w-14 h-22 object-cover rounded" />
      <div className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
        {discount}
      </div>
    </div>
    <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
      {buttonText}
    </button>
  </div>
);

const CountdownTimer = () => (
  <div className="bg-blue-500 text-white p-4 rounded-lg">
    <p className="text-sm mb-2">Hurry up!</p>
    <p className="text-xs mb-2">Offer ends soon</p>
    <div className="flex justify-center space-x-2">
      <div className="bg-white text-black px-2 py-1 rounded">1</div>
      <div className="bg-white text-black px-2 py-1 rounded">0</div>
      <div className="text-white">:</div>
      <div className="bg-white text-black px-2 py-1 rounded">5</div>
      <div className="bg-white text-black px-2 py-1 rounded">7</div>
    </div>
  </div>
);

function ServicePage() {
  return (
    <div className="p-6 ">
      <div className="p-6">   
          <SectionHeader icon={<CupSoda size={24} />} title="Featured" />   </div> 
      {serviceData.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
      <CountdownTimer />
    </div>
  );
}

export default ServicePage;