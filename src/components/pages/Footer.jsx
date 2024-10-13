import React from 'react';
import { Instagram, Facebook, Twitter, Wrench } from 'lucide-react';

const footerData = {
  address: {
    title: "123 Main Street City, Country",
    email: "hello@servicehub.com",
    phone: "+11 111 111 111"
  },
  hours: {
    title: "Hours of Operation:",
    weekdays: "Monday - Friday 9:00 - 6:00",
    weekend: "Saturday - Sunday 10:00 - 5:00"
  },
  social: {
    title: "Connect with us:",
    links: [
      { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://instagram.com' },
      { name: 'Facebook', icon: <Facebook size={24} />, url: 'https://facebook.com' },
      { name: 'Twitter', icon: <Twitter size={24} />, url: 'https://twitter.com' }
    ]
  },
  links: {
    title: "Quick Links",
    items: [
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Leaderboard', url: '/leaderboard' },
      { name: 'Verification', url: '/verification' },
      { name: 'Browse', url: '/browse' },
      { name: 'Community', url: '/community' }
    ]
  },
  footerText: "© 2024 ServiceHub. All rights reserved.",
  serviceProvider: "Service Provider"
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">{footerData.address.title}</h3>
            <a href={`mailto:${footerData.address.email}`} className="text-blue-500 hover:underline block">{footerData.address.email}</a>
            <a href={`tel:${footerData.address.phone}`} className="text-blue-500 hover:underline block">{footerData.address.phone}</a>
          </div>
    
          <div>
            <h3 className="font-bold mb-2">{footerData.hours.title}</h3>
            <p>{footerData.hours.weekdays}</p>
            <p>{footerData.hours.weekend}</p>
          </div>
          

          <div>
            <h3 className="font-bold mb-2">{footerData.social.title}</h3>
            <div className="flex space-x-4">
              {footerData.social.links.map((link) => (
                <a key={link.name} href={link.url} aria-label={link.name} className="text-gray-600 hover:text-gray-800">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          

          <div>
            <h3 className="font-bold mb-2">{footerData.links.title}</h3>
            <ul>
              {footerData.links.items.map((item) => (
                <li key={item.name}>
                  <a href={item.url} className="hover:underline">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        

        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p>{footerData.footerText}</p>
          <div className="flex items-center">
            <span className="mr-2">{footerData.serviceProvider}</span>
            <Wrench size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
