import React from 'react'
import { render, screen } from '@testing-library/react'
import Todo from '.'
import { ITodo } from '@/types'

describe('Todo component', () => {
  const mockTodos: ITodo[] = [
    {
      description: 'Task 1',
      isDone: false,
      date: '2023-05-20',
    },
    {
      description: 'Task 2',
      isDone: true,
      date: '2023-05-21',
    },
  ]

  test('renders Todo component with initial todos', () => {
    render(<Todo todos={mockTodos} setTodos={() => {}} />)

    const task1 = screen.getByText('Task 1')
    const task2 = screen.getByText('Task 2')
    const noTodosMessage = screen.queryByText('Keine Todos')

    expect(task1).toBeInTheDocument()
    expect(task2).toBeInTheDocument()
    expect(noTodosMessage).not.toBeInTheDocument()
  })
})
