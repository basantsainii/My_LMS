import { Children, createContext } from "react";
import Current from "../Batch_Comp/Current";

export const CurrentContext = createContext("");

export const CurrentContextProvider = (props) => {
    const Data_Array = [
        { batch: "python/8:30am/vikash", course: "Core Python", teacher: "Vikash singh", date1: "12 May", date2: "27 June", time: "8:30AM - 9AM", student: "7" },
        { batch: "DM/12pm/Nitin", course: "Digital Marketing", teacher: "Nitin Bela", date1: "16 May", date2: "25 July", time: "12PM - 2PM", student: "5" },
        { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
        { batch: "Dm/3pmm/Nitin", course: "Digital Marketing", teacher: "Nitin Bela", date1: "15 March", date2: "25 May", time: "3PM - 4:30PM", student: "25" },
        { batch: "FS/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "13 May", date2: "16 Nov", time: "4:30PM - 6:30PM", student: "12" },
        { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" }
    ];

    const Completed_Arr = [
        { batch: "python/11am/Vikash", course: "Core python", teacher: "Nitin Bela", date1: "12 May", date2: "25 June", time: "8:30AM - 9PM", student: "14" },
        { batch: "Fullstack/10am/Nitin", course: "MERN STACK", teacher: "Nitin Bela", date1: "4 March", date2: "4 July", time: "10AM - 12PM", student: "11" },
        { batch: "DM/10am/Nitin", course: "Digital Marketing", teacher: "Nitin Bela", date1: "15 March", date2: "25 June", time: "3PM - 4:30PM", student: "7" }
    ];

    return (
        <>
            <CurrentContext.Provider value={{ Data_Array, Completed_Arr }}>
                {props.children}
            </CurrentContext.Provider>
        </>
    )
}