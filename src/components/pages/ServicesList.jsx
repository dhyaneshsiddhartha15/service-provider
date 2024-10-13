import React from 'react'
import SectionHeader from '../common/Bar'
import { Flame } from 'lucide-react'
import Button from '../common/CTAButton';
import CartButton from '../common/CartButton';
const trendingServices = [
    { id: 1, title: "Deep cleaning", price: "$1",
         image: 'https://images.unsplash.com/photo-1444731961956-751ed90465a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxMb2dvJTJDJTIwRm9vZCUyQyUyMENhdGVyaW5nfGVufDF8fHx8MTcyODI3ODUyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    { id: 2, title: "Catering for events", price: "$5", image: 'https://images.unsplash.com/photo-1444731961956-751ed90465a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxMb2dvJTJDJTIwRm9vZCUyQyUyMENhdGVyaW5nfGVufDF8fHx8MTcyODI3ODUyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    { id: 3, title: "Custom logo design", price: "$5", image: 'https://images.unsplash.com/photo-1444731961956-751ed90465a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxMb2dvJTJDJTIwRm9vZCUyQyUyMENhdGVyaW5nfGVufDF8fHx8MTcyODI3ODUyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    { id: 4, title: "Custom logo design", price: "$5", image: 'https://images.unsplash.com/photo-1444731961956-751ed90465a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxMb2dvJTJDJTIwRm9vZCUyQyUyMENhdGVyaW5nfGVufDF8fHx8MTcyODI3ODUyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    { id: 5, title: "Custom logo design", price: "$5", image: 'https://images.unsplash.com/photo-1444731961956-751ed90465a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxMb2dvJTJDJTIwRm9vZCUyQyUyMENhdGVyaW5nfGVufDF8fHx8MTcyODI3ODUyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },

  ];
export default function ServicesList() {
    return (
        <div className="w-full p-8 mt-2" >
          <SectionHeader icon={<Flame size={24} />} title="Trending Services" />
          <div className="grid grid-cols-3 gap-4">
            {trendingServices.map((service) => (
              <div key={service.id} className="bg-gray-100 p-4 rounded-lg">
                <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded mb-2" />
                <h3 className="text-sm font-semibold">{service.title}</h3>
                <p className="text-xs text-gray-600">{service.price}</p>

                <CartButton title={"Add to Cart"}/>
              </div>
            ))}
          </div>
        </div>
      );
    };