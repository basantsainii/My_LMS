import React, { useState } from 'react'
import Hide_content from './Hide_content'
import { Link, Outlet } from 'react-router-dom';

function All_Test() {
    const [Data, setData] = useState([
        { topic: "HTML,CSS", Det: "HTML CSS", x : false },
        { topic: "Javascript, React.Js", Det: "React+Js", x : false },
        { topic: "Node, Express.Js", Det: "MongoDB", x : false }
    ]);

    const [res, setRes]=useState([]);
    // console.log("y is ",y)
    const spread = (i)=>{
        //storing main data array into new variable 
        // let UpData = [...Data]
        // console.log(UpData[i].x)
        // updating data array value by reversing
        // UpData[i].x = UpData[i].x==false ? true : false;
        // setY(()=>{return y==false ? true : false})
        // setData(UpData);

        //duplicating array to update state of original array
        let UpRes = [...res]
        // updating Resulting array value by reversing values oppositly at clicked index place
        UpRes[i] = UpRes[i]==true ? false : true ;
        setRes(UpRes);
    };


    return (
        <>
            <div className='mt-3 w-[22rem] h-[25rem] text-center border border-gray-400 rounded-2xl'>
                <h1 className='py-3 font-bold f-w'>Frontend Development</h1>
                {
                    Data.map((ele, i) => {
                        return (
                            <div key={i} className=' text-left px-2 py-4'>
                                <div onClick={()=>spread(i)} className='border-b cursor-pointer'><span className='px-4 text-blue-500 marker:'>{ele.topic} <i className="fa-solid fa-angle-down float-right px-3"></i></span></div>
                                {/* using conditional to show hide_content, if ele.x == true is valid then Hide_content is */}
                                { res[i] == true  && <Hide_content h_data={ele.Det} />}
                                {/* <Outlet /> */}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default All_Test
