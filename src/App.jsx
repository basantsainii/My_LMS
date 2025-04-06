import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './All_css/App.css'
import Header from './Header'

// import Mview from './Mview'
import Card from './Card'
import Lsider from './Lsider'
import Module from './Module'
import T_Module from './Test_Module'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resources from './Resources'
import Current from './Batch_Comp/Current'
import Upcoming from './Batch_Comp/Upcoming'
import Completed from './Batch_Comp/Completed'
import All_Test from './Test_Module/All_Test'
import Create_test from './Test_Module/Create_test'
import Test_Results from './Test_Module/Test_Results'
import Hide_content from './Test_Module/Hide_content'
import { HumBurgerContext } from './Context_API/ResponsiveContext'




function App() {
  // const [count, setCount] = useState(0)
  const {isOpen, setIsOpen} = useContext(HumBurgerContext);
console.log(isOpen)
  return (
    <BrowserRouter>
      <>
        <Header />
        <div onClick={()=>setIsOpen(false)} className='w-screen flex gap-5 bg-blue-50	min-h-[92vh] relative'>
          <div className={`w-[10rem]  absolute md:left-0 md:relative ${isOpen ? "left-0 shadow-2xl h-full" : "right-full"}`}>{<Lsider />}</div>
          <div className=' w-full bg-white mt-2  p-3 px-4 shadow-lg'>
            <Routes>
              <Route path='/' element={<Module />}></Route>

              <Route path='/Card' index:true element={<Card />}>
                <Route path='/Card/' element={<Current />}></Route>
                <Route path='Upcoming' element={<Upcoming />}></Route>
                <Route path='Completed' element={<Completed />}></Route>
              </Route>

              <Route path='/Test_Module' index:true element={<T_Module />}>
                <Route path='/Test_Module/' element={<All_Test />}></Route>
                <Route path='Create_test' element={<Create_test />}></Route>
                <Route path='Test_Results' element={<Test_Results />}></Route>
              </Route>

              <Route path='/Resources' element={<Resources />}></Route>
              <Route path='*' element={<span>No Such Page Exists</span>}></Route>
            </Routes>
          </div>
        </div>
        {/* <Mview /> */}

      </>
    </BrowserRouter>
  )
}

export default App
