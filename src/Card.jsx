import React, { useRef, useState } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Current from './Batch_Comp/Current';
import Upcoming from './Batch_Comp/Upcoming';
import Completed from './Batch_Comp/Completed';
import Search from './Batch_Comp/Search';
import BatchType from './Batch_Comp/BatchType';
function Card() {
// let [value, setValue]=useState([
//   { batch: "python/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//   { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//   { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//   { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//   { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//   { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" }
// ])
//   const Data_Array = [
//     { batch: "python/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
//     { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" }
//   ];

//   const Value = useRef();

// const getValue=()=>{
//   let Input_Val = Value.current.value.toLowerCase();


//   let Searched_obj = Data_Array.filter((Obj)=>{
//     let keys = Object.keys(Obj);
//     // console.log(keys)

//     for(let i=0;i<keys.length;i++){
//       let Key_name = keys[i];


//       if(String(Obj[Key_name]).toLowerCase().includes(Input_Val)){
//         return Obj;
//       }
//     };

//   });
//   setValue(Searched_obj)
//   }
 


   
  return (
    <>


      <div className=' p-2'>
        <Search/>
        <BatchType/>
        <Outlet/>
      </div>



    </>
  )
}

export default Card
