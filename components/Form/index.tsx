import React, { useState } from 'react'

interface TodoFormProps {
  onSubmit: (description: string, date: string) => void
}

function TodoForm({ onSubmit }: TodoFormProps) {
  const [formData, setFormData] = useState({ description: '', date: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { description, date } = formData
    if (!description) {
      return
    }

    onSubmit(description, date)
    setFormData({ description: '', date: '' })
  }

  return (
    <form className="md:w-1/2 mx-auto" onSubmit={handleSubmit}>
      <label className="text-lg" htmlFor="description">
        Anlegen eines neuen Eintrages
      </label>
      <div className="my-4 flex gap-4 justify-between">
        <input
          className="border-2 rounded py-2 px-3 w-1/2"
          id="description"
          name="description"
          placeholder="Beschreibung"
          type="text"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          className="border-2 rounded py-2 px-3 w-1/2"
          id="date"
          name="date"
          type="date"
          placeholder="tt.mm.jjjj"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-green-500 transition-colors duration-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        type="submit"
      >
        Hinzufügen
      </button>
    </form>
  )
}

export default TodoForm
