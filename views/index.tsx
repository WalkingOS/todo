'use client'

import Todo from '@/components/Todo'
import { ITodo } from '@/types'
import StoreService from '@/utils/todoService'
import React, { useState, useEffect } from 'react'

function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const storedTodos = StoreService.getTodos()
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    StoreService.saveTodos(todos)
  }, [todos])

  return (
    <main>
      <h1 className="text-3xl font-bold mb-12 text-green-700 text-center">
        ToDo-Liste
      </h1>
      <Todo todos={todos} setTodos={setTodos} />
    </main>
  )
}

export default TodoApp
