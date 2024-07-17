import React, { useContext } from 'react'
import { CurrentContext } from '../Context_API/CurrentContext'
import { SearchContext } from '../Context_API/SearchContext';

function Current() {
    // const Data_Array = [
    //     { batch: "python/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
    //     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
    //     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
    //     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
    //     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
    //     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" }
    // ];
// console.log(Data_out)



const  {card}=useContext(SearchContext);
    return (
            <div className='mt-4  flex justify-start align-middle gap-5 flex-wrap '>
                {card.map((ele, index) => {
                    return (
                        <div key={`user1-${index}`} className=' bg-blue-900 rounded-3xl shadow-xl '>
                            <div className='w-[20rem] mt-2 p-3 bg-white rounded-3xl shadow-xl '>
                                <div className="cont  px-4 py-2 text-blue-800 font-bold">{ele.batch} <span className=' float-right'><i className="fa-solid fa-person"></i> {ele.student}</span></div>
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
            </div>
    )
}

export default Current
