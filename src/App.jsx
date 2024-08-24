import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [search,setSearch] = useState("")
  const handleonChange=(e)=>{
  
    setTimeout(()=>{
      setSearch(e.target.value)
     }, 3000)
  }
console.log(search)
  return (

    <div className='w-[90%] mx-auto'>
      <Navbar handleonChange={handleonChange}></Navbar>
      <Countries search={search}/>
    </div>
  )
}

export default App
