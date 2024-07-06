import { useState, useEffect } from 'react'
import { TodoProvider } from './context'
import './App.css'
import { set } from 'express/lib/application'
import { Prev } from 'react-bootstrap/esm/PageItem'
import TodoForm from './components/todoForm'
import TodoItem from './components/todoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {

    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-6 py-5 text-white">
          <h1 className="text-3xl font-bold text-center mb-6 mt-2">Manage Your Todos</h1>

          <div className="mb-6">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-4">
            {todos.map((todo) => (
              <div className='w-full' key={todo.id}>
                <TodoItem />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
