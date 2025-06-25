import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectCategory from './components/categoryList'
import TextFieldsToProduct from './components/addPrduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TextFieldsToProduct></TextFieldsToProduct>
    <SelectCategory></SelectCategory>
    </>
  )
}

export default App
