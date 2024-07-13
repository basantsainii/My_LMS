import React from 'react'

function Prompt() {
    return (
        <>
            <div className='absolute w-1/5 px-4 py-6 bg-white right-3 top-12 z-20 border border-gray-200 shadow-lg rounded-lg' onClick={(e)=>e.stopPropagation()}>  
                <div className='flex justify-center align-middle'><div className='absolute -mt-7 w-14 h-14 text-3xl z-30 border border-black rounded-full p-2 text-white bg-blue-950 text-center'>B</div></div>
                <div className='border border-gray-300 rounded-lg'>
                    <ul className=' list-none text-center px-2 py-11'>
                        <li className='text-2xl font-bold text-blue-950'>Basant Kumar</li>
                        <li className=' text-sm text-gray-500'>bsntsainii@gmail.com</li>
                        <li className=' text-sm text-gray-500'>7500501908</li>
                    </ul>
                </div>
                <div className='border border-gray-300 rounded-md px-1 py-3 mt-1  '><i className="fa-regular fa-comments text-green-700"></i> &nbsp; Chat Support <i className="fa-solid fa-angle-right float-right"></i></div>
                <div className='border border-gray-300 rounded-md px-1 py-3 mt-1  '> <i className="fa-solid fa-circle-question text-blue-500"></i> &nbsp; Help Desk <i className="fa-solid fa-angle-right float-right" ></i></div>
                <div className='border border-gray-300 rounded-md px-1 py-3 mt-1  '><i className="fa-solid fa-right-from-bracket"></i> &nbsp; Logout <i className="fa-solid fa-angle-right float-right"></i></div>
            </div>
        </>
    )
}
export default Prompt
 