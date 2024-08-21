import { Outlet } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <div className='px-5 lg:px-[5%] xl:px-[10%] 2xl:px-[15%]  bg-[#030711] h-full w-full'>
      <Outlet />
    </div>
  )
}

export default App
