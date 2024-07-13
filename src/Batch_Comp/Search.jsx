import React, { useContext, useEffect, useRef } from 'react'
import { CurrentContext } from '../Context_API/CurrentContext';
import { SearchContext } from '../Context_API/SearchContext';
// import {  } from '../Context_API/SearchContext';

function Search() {
    const {Get_val} = useContext(SearchContext)
    let Inp_val = useRef();
    const SearchHandle = () => {
        const Inp_value = Inp_val.current.value.toLowerCase();
        console.log(Inp_value)

        // const Searched_obj = value1.Data_Array.filter((Obj) => {
        //     let keys = Object.keys(Obj)
        //     // console.log(keys)
        //     // console.log(Obj)

        //     for (let i = 0; i < keys.length; i++) {
        //         let Key_name = keys[i]
        //         // console.log(Key_name)

        //         // let opq = ""
        //         // opq += String(Obj[Key_name]);
        //         if (String(Obj[Key_name]).toLocaleLowerCase().includes(Inp_value)) {
        //             // console.log(String(Obj[Key_name]));
        //             return Obj;
        //         }
        //         else {
        //             // return value1.Data_Array
        //         }


        //     }
        //     // console.log(opq)

        // });
        // console.log(Searched_obj);
        // return Searched_obj

         Get_val(Inp_val.current.value);
    };


    return (
        <>
            <div className='p-1 px-2 border  border-gray-200 rounded-2xl bg-white w-[15rem]'><input ref={Inp_val} onChange={()=>{SearchHandle()}} type="search" name="" id="" className=' border-none outline-none w-[12rem]' placeholder='Search here...' /> <i className="fa-solid fa-magnifying-glass"></i></div><br />
        </>
    )
}

export default Search
