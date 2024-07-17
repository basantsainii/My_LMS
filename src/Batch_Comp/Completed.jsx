import React, { useContext, useState } from 'react'
import { CurrentContext } from '../Context_API/CurrentContext'
import { SearchContext } from '../Context_API/SearchContext';

function Completed() {
  // const {Completed_Arr} = useContext(CurrentContext);
  const {card}=useContext(SearchContext);
  // const [compltd, setCompltd] = useState(Completed_Arr);
  return (
      <div className='mt-4  flex justify-start align-middle gap-5 flex-wrap '>
        {card.map((ele, index) => {
          return (
            <div key={`user-${index}`} className=' bg-blue-900 rounded-3xl shadow-xl '>
              <div className='w-[20rem] mt-2 p-3 bg-white rounded-3xl shadow-xl '>
                <div  className="cont  px-4 py-2 text-blue-800 font-bold">{ele.batch} <span className=' float-right'><i className="fa-solid fa-person"></i> {ele.student}</span></div>
                <div className="cont  px-4 py-2 text-black font-bold"><i className="fa-solid fa-graduation-cap"></i> {ele.course}</div>
                <div className="cont  px-4 py-2 text-black font-bold"><i className="fa-solid fa-user"></i> {ele.teacher}</div>
                <div className="cont  px-4 py-2 text-black font-bold"><i className="fa-solid fa-calendar-days"></i> {ele.date1}</div>
                <div className="cont  px-4 py-2 text-black font-bold"><i className="fa-solid fa-clock"></i> {ele.time}</div>
                <hr />
                <button className='px-[0.4rem] py-[0.15rem] mt-2 bg-blue-800 text-white rounded-md'>View Details</button>
              </div>
            </div>
          )
        })
        }
        {/* <h1>completed</h1> */}
      </div>
  )
}

export default Completed
