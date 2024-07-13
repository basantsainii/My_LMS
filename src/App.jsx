import { useState } from 'react'
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




function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <Header />
        <div className='w-screen flex gap-5 bg-blue-50	min-h-[92vh] '>
          <div className='w-1/6 '>{<Lsider />}</div>
          <div className=' w-5/6 bg-white mt-2  p-3 px-4 shadow-lg'>
            <Routes>
              <Route path='/' element={<Module />}></Route>

              <Route path='/Card' index:true element={<Card />}>
                <Route path='/Card/' element={<Current />}></Route>
                <Route path='Upcoming' element={<Upcoming />}></Route>
                <Route path='Completed' element={<Completed />}></Route>
              </Route>

              <Route path='/Test_Module' index:true element={<T_Module />}>
                <Route path='/Test_Module/' element={<All_Test />}>
                  <Route path='Hide_content' element={<Hide_content />}></Route>
                </Route>
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
