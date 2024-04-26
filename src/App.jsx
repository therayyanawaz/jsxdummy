import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <p className='text-red-300'> Hello Everyone! </p>

      <MyComponent name={"Rayyan"}/>
    </div>
  )
}

export default App
