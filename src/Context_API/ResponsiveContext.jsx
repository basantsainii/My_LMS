import { createContext, useState } from "react";

export const HumBurgerContext = createContext()

export const  HumBurgerContextProvider = (prop)=>{

const [isOpen, setIsOpen] = useState(false);

  return(
    <HumBurgerContext.Provider value={{isOpen,setIsOpen}}>
      {prop.children}
    </HumBurgerContext.Provider>
  )
}