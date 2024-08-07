import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App2(){
    const [todos, setTodos]=useState([])

    useEffect(function(){
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
            const json= await res.json();
            setTodos(json.todos)
        })
    }, [])
    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} title={todo.title} description={todo.description} />
            ))}
        </div>)



}

function Todo({title, description}){
    return <div>
        <h1>
            {title}
        </h1>
        <h2>
            {description}
        </h2>
    </div>
}


export default App2