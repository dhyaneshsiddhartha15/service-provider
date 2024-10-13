import React from 'react';
import Home from "../assets/images/Home.png";
import Profession from "../assets/images/Profession.png";
import Personal from "../assets/images/Personal.png";
import Creative from "../assets/images/Creative.png";
import Transportation from "../assets/images/Transportation.png";
import Event from "../assets/images/Event.png";
import WidthWrapper from './common/WidthWrapper';

const categoryData = [
  { id: 1, name: 'Home', img: Home },
  { id: 2, name: 'Profession', img: Profession },
  { id: 3, name: 'Personal', img: Personal },
  { id: 4, name: 'Creative', img: Creative },
  { id: 5, name: 'Transportation', img: Transportation },
  { id: 6, name: 'Event', img: Event },
];

export default function Category() {
    return (
      <WidthWrapper>
        <h2 className="text-4xl font-bold text-center mb-10 text-black">Categories</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {categoryData.map((data) => (
            <div 
              key={data.id} 
              className="bg-[#d0e1f5] rounded-lg p-6 flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64"
            >
              <img src={data.img} alt={data.name} className="h-24 w-auto mb-4" />
              <div className="text-xl font-semibold text-center text-black">{data.name}</div>
            </div>
          ))}
        </div>
      </WidthWrapper>
    );
  }