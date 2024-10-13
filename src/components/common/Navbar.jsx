import React, { useState } from 'react'
import { NavbarLinks } from '../../data/navbarLink';
import { Link } from 'react-router-dom';
import WidthWrapper from './WidthWrapper';
import { Search, ShoppingCart, User } from 'lucide-react';
export default function Navbar() {
    const [nav,setNav]=useState(false);
    const [hoveredItem,setHoveredItem]=useState(null);
    const handleNav=()=>{
        setNav(!nav);
    }
    const handleMouseEnter=(id)=>{
        setHoveredItem(id);
    }
    const handleMouseLeave=()=>{
        setHoveredItem(null);
    }
  return (
    <WidthWrapper>
<div className="gap-3 bg-gold-200 flex justify-between items-center h-20 w-full mx-auto px-4 text-black border-b border-indigo-800">
    <ul className="flex text-[16px] text-[#030303] font-Poppins font-bold leading-[22px] text-center">
      {NavbarLinks.map((item) => (
        <li
          key={item.id}
          className="relative mx-2"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to={item.path}>
            {item.title}
          </Link>
          {hoveredItem === item.id && (
            <div className="bg-teal-500 h-[2px] w-full absolute bottom-0 left-0 transition-all duration-300"></div>
          )}
        </li>
      ))}
    </ul>
    <div className='flex flex-row gap-2'>
    <Search className='font-bold' size={24} />
      <ShoppingCart className='font-bold' size={24} />
      <User className='font-bold' size={24} />
    </div>
  </div>
  </WidthWrapper>
  )
}
