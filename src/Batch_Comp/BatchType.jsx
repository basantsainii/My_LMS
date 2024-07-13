import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../Context_API/SearchContext';
function BatchType() {
    const { Selected_Arr } = useContext(SearchContext)
    const [tap, setTap] = useState(() => {
        // using session storage to persist on same page on refresh        
        const stored_num = sessionStorage.getItem("tap")
        return stored_num ? parseInt(stored_num) : 0;
    });

    const btnClickHandle = (num) => {
        setTap(num);
        sessionStorage.setItem("tap", num);
        console.log("num : ", num)
        Selected_Arr(num);
    }

    return (
        <>
            <div className='flex gap-3'>
                {/* to ko parent ka path dekar / ke khali chhodna hai by default dikhane ke liye */}
                <Link to="/Card"><button onClick={() => { btnClickHandle(0) }} className={tap === 0 ? "border border-blue-600 p-1 px-3 text-white hover:text-white hover:bg-blue-800 rounded-lg bg-blue-800" : "border border-blue-600 p-1 px-3 text-blue-600 hover:text-white hover:bg-blue-800 rounded-lg"}><i className="fa-regular fa-calendar"></i> Current</button></Link>
                <Link to="Upcoming"><button onClick={() => { btnClickHandle(1) }} className={tap === 1 ? "border border-blue-600 p-1 px-3 text-white hover:text-white hover:bg-blue-800 rounded-lg bg-blue-800" : "border border-blue-600 p-1 px-3 text-blue-600 hover:text-white hover:bg-blue-800 rounded-lg"}><i className="fa-regular fa-calendar-plus"></i> Upcoming</button></Link>
                <Link to="Completed"><button onClick={() => { btnClickHandle(2) }} className={tap === 2 ? "border border-blue-600 p-1 px-3 text-white hover:text-white hover:bg-blue-800 rounded-lg bg-blue-800" : "border border-blue-600 p-1 px-3 text-blue-600 hover:text-white hover:bg-blue-800 rounded-lg"}><i className="fa-regular fa-calendar-check"></i> Completed</button></Link>
            </div>

        </>
    )
}

export default BatchType
