import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { CurrentContext } from "./CurrentContext";

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
    var { Data_Array, Completed_Arr } = useContext(CurrentContext);

    const [card, setCard] = useState(
            ()=>{
                // using sesion storage for geting stored value so that array does not go to default value
            const exy = sessionStorage.getItem("tap")   //tap has values 0 or 1 or 2
            // using ternary operator to selesct array on refresh
            return exy==0 ?  Data_Array : exy==2 ? Completed_Arr : Data_Array;
        }
    );


    const Selected_Arr = (Array_Num) => {
        // const stored_num = sessionStorage.getItem("tap")
        let x = Array_Num ? Array_Num : sessionStorage.getItem("tap")
        if(x==0){
            setCard( Data_Array);
            return Data_Array;
        }
        else if(x==2){
            setCard(Completed_Arr );
            return Completed_Arr;
        }
        else{
            setCard(Data_Array) ;
            return Data_Array;
        }
    }

    const Get_val = (searchTerm) => {
        const Searched_obj = Selected_Arr().filter((Obj) => {
            let keys = Object.keys(Obj)
            // console.log(keys)
            // console.log(Obj)
            for (let i = 0; i < keys.length; i++) {
                let Key_name = keys[i]
                // console.log(Key_name)
                if (String(Obj[Key_name]).toLocaleLowerCase().includes(searchTerm.toLowerCase())) {
                    return Obj;
                }
            }
        });
        setCard(Searched_obj)
    };

    return (
        <>
            <SearchContext.Provider value={{ card, Get_val, Selected_Arr }}>
                {props.children}
            </SearchContext.Provider>
        </>
    )
}
