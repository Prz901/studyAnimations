import React from 'react'

import './index.css'

export default function Loader() {
  return (
    <div className='bg-black h-screen'>
      <div className='loader'>
        <div className='face face1'>
          <div className='circle'></div>
        </div>

        <div className='face face2'>
          <div className='circle'></div>
        </div>
      </div>
    </div>
  )
}
