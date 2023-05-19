import { Chip } from '@/components/Chip'
import TodoForm from '@/components/Form'
import { ITodo } from '@/types'
import { formatDate } from '@/utils/dateHelper'
import React, { SetStateAction, Dispatch } from 'react'

function Todo({
  todos,
  setTodos,
}: {
  todos: ITodo[]
  setTodos: Dispatch<SetStateAction<ITodo[]>>
}) {
  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos]
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos)
  }

  const handleStatusChange = (index: number) => {
    const updatedTodos = [...todos]

    if (!updatedTodos[index].isDone) {
      updatedTodos[index].isDone = true
    }

    setTodos(updatedTodos)
  }

  const handleAddTodo = (description: string, date: string) => {
    const newTodo: ITodo = {
      description,
      date,
      isDone: false,
    }

    setTodos([...todos, newTodo])
  }

  return (
    <>
      <TodoForm onSubmit={handleAddTodo} />

      <h2 className="text-lg font-bold mt-8">alle Einträge</h2>
      <ul className="md:flex w-full mt-8 md:flex-wrap border-2 min-h-[20vh] py-2">
        {!todos?.length && (
          <p className="text-gray-500 text-center self-center w-full">
            Keine Todos
          </p>
        )}
        {todos?.map((todo, index) => (
          <li key={index} className="w-full md:w-1/3 lg:w-1/6 px-2 my-2 h-fit">
            <Chip
              disabled={todo.isDone}
              onClick={() => handleStatusChange(index)}
              onDelete={() => handleDeleteTodo(index)}
            >
              <>
                <span className="font-bold">{todo.description}</span>
                {todo.date && formatDate(todo.date)}
              </>
            </Chip>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
