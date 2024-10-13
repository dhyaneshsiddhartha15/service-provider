import React from 'react'

export default function CartButton({title}) {
  return (
    <div className='w-20 h-10'>
        <div className="mt-2 bg-white text-blue-500 border border-blue-500 px-2 py-1 rounded text-xs">
               {title}
                </div>
    </div>
  )
}
