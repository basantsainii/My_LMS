import React from 'react'

function Bgblur({ttogle}) {
  return (
    <>
      
        <div onClick={ttogle} className=' bg-gray-500 opacity-70 w-[100vw] h-[98vh] fixed left-0 top-10 z-10'></div>
      
    </>
  )
}

export default Bgblur
