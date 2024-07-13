import React, { useRef, useState } from 'react'

function Module() {
    const C_Detail = [
        { Course: "Core Python", Duration: "45 days", Topics: "29", Fees: "₹11800" },
        { Course: "CCNA Networking", Duration: "45 days", Topics: "15", Fees: "₹25000" },
        { Course: "Cyber security", Duration: "60 days", Topics: "11", Fees: "₹60000" },
        { Course: "Tableau", Duration: "45 days", Topics: "16", Fees: "₹14160" },
        { Course: "PowereBI", Duration: "30 days", Topics: "11", Fees: "₹14160" },
        { Course: "Python for Data Analysis", Duration: "60 days", Topics: "23", Fees: "₹30000" },
        { Course: "HTML", Duration: "5 days", Topics: "8", Fees: "₹5000" },
        { Course: "CSS", Duration: "30 days", Topics: "25", Fees: "₹7000" },
        { Course: "Machine Lering Basic", Duration: "45 days", Topics: "12", Fees: "₹17700" },
    ]



    const [D_Array, setD_Array]= useState([
        { Course: "Core Python", Duration: "45 days", Topics: "29", Fees: "₹11800" },
        { Course: "CCNA Networking", Duration: "45 days", Topics: "15", Fees: "₹25000" },
        { Course: "Cyber security", Duration: "60 days", Topics: "11", Fees: "₹60000" },
        { Course: "Tableau", Duration: "45 days", Topics: "16", Fees: "₹14160" },
        { Course: "PowereBI", Duration: "30 days", Topics: "11", Fees: "₹14160" },
        { Course: "Python for Data Analysis", Duration: "60 days", Topics: "23", Fees: "₹30000" },
        { Course: "HTML", Duration: "5 days", Topics: "8", Fees: "₹5000" },
        { Course: "CSS", Duration: "30 days", Topics: "25", Fees: "₹7000" },
        { Course: "Machine Lering Basic", Duration: "45 days", Topics: "12", Fees: "₹17700" },
    ])


    const Value = useRef();
    const getValue = () => {
        let Input_Val = Value.current.value.toLowerCase();


        let Searched_obj = C_Detail.filter((Obj) => {
            let keys = Object.keys(Obj);
            // console.log(keys)

            for (let i = 0; i < keys.length; i++) {
                let Key_name = keys[i];


                if (String(Obj[Key_name]).toLowerCase().includes(Input_Val)) {
                    return Obj;
                }
            };

        });
        setD_Array(Searched_obj)
    }
    return (
        <>
            <div className=' mt-5 w-[25rem] border border-gray-300 px-2 py-1 bg-white rounded-2xl'><i className="fa-solid fa-magnifying-glass"></i> <input onChange={getValue} ref={Value} type="search" name="" id="" placeholder='Search Module Here' className=' w-[22rem] border-none outline-none' /></div>
            <br />
            <div className='flex justify-start align-middle gap-3 flex-wrap'>
                {
                    D_Array.map((ele, index) => {
                        return (
                            <div key={`module-${index}`} className=' bg-blue-900 rounded-md shadow-xl'>
                                <div className='mb-1 w-[22rem] bg-white border border-gray-200 rounded-md p-4 shadow-lg'>
                                    <div className='text-blue-800 font-bold'>{ele.Course} <span className=' float-right'><i className="fa-solid fa-pencil"></i></span></div>
                                    <div className='flex justify-between align-centre mt-3'>
                                        <div className=' bg-blue-900 rounded-md'>
                                            <ul className='mb-1 bg-white border border-gray-400 rounded-md px-3 py-1 text-center'>
                                                <li>Duration</li>
                                                <li className='font-bold'>{ele.Duration}</li>
                                            </ul>
                                        </div>
                                        <div className=' bg-blue-900 rounded-md'>
                                            <ul className='mb-1 bg-white border border-gray-400 rounded-md px-3 py-1 text-center'>
                                                <li>Total topics</li>
                                                <li className='font-bold'>{ele.Topics}</li>
                                            </ul>
                                        </div>
                                        <div className=' bg-blue-900 rounded-md'>
                                            <ul className='mb-1 bg-white border border-gray-400 rounded-md px-3 py-1 text-center'>
                                                <li>Fees</li>
                                                <li className='font-bold'>{ele.Fees}</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </>
    )
}

export default Module
