import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='px-5 lg:px-[5%] xl:px-[10%] 2xl:px-[15%]  bg-[#030711] h-full w-full'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
