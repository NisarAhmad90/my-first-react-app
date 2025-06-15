import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from './components/Button'
import { ListGroup} from './components/TodoList'

function App() {

const itmes=["Pakistan","India" , "Afganistan"];

const handleSelectedItem =(item : string) => {
  console.log(item)
}
  return (
    <>
        
        <ListGroup  items={itmes}  heading='Countires' onSelectItem={handleSelectedItem}></ListGroup>
       
    </>
  )
}

export default App
