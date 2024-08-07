import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title:"Go to Gym",
    description: "Go to gym today"
  }, {
    id:2,
    title:"Go to Gym",
    description: "Go to gym today"
  }, {
    id:3,
    title:"Go to Gym",
    description: "Go to gym today"
  }])

  function addtodo(){
    setTodos([...todos, {
      id:4,
      title:Math.random(),
      description:Math.random()
    }])

    // for (let index = 0; index < todos.length; index++) {
    //   let arr=[]
    //   arr.push(todos[i])
      
    // }
    // arr.push({
    // id:3,
    // title:"Go to Gym",
    // description: "Go to gym today"
    // })
  }
  return (
    <>
    <button onClick={addtodo}>Add a Todo</button>
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}/>
    })}
    </>
  )
}

function Todo({title, description}){
    return <div>
      <h1>
        {title}
      </h1>
      <h5>
        {description}
      </h5>

    </div>
}

export default App
