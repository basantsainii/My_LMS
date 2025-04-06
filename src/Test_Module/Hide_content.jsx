import React from 'react'

function Hide_content({h_data}) {
    console.log(h_data);
    return (
        <>
            <div className='border-b mt-1 flex justify-around p-2 align-middle content-center'>
                <div><span className=' text-wrap '>{h_data}</span></div>
                <i className="fa-solid fa-id-card cursor-pointer"></i>
                <i className="fa-regular fa-eye cursor-pointer"></i>
                <i className="fa-solid fa-trash cursor-pointer"></i>
                <div className='cursor-pointer'><select className='w-[8rem] border cursor-pointer'>
                    <option value="">select action</option>
                </select>
                </div>
            </div>
        </>
    )
}

export default Hide_content
