import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Chip } from '.'

describe('Chip', () => {
  const onClickMock = jest.fn()
  const onDeleteMock = jest.fn()

  beforeEach(() => {
    onClickMock.mockClear()
    onDeleteMock.mockClear()
  })

  test('renders children correctly', () => {
    const { getByText } = render(
      <Chip onClick={onClickMock} onDelete={onDeleteMock}>
        <span>Test Chip</span>
      </Chip>,
    )

    expect(getByText('Test Chip')).toBeInTheDocument()
  })

  test('calls onClick callback when clicked', () => {
    const { getByText } = render(
      <Chip onClick={onClickMock} onDelete={onDeleteMock}>
        <span>Test Chip</span>
      </Chip>,
    )

    fireEvent.click(getByText('Test Chip'))

    expect(onClickMock).toHaveBeenCalled()
  })

  test('calls onDelete callback when delete button is clicked', () => {
    const { getByText } = render(
      <Chip onClick={onClickMock} onDelete={onDeleteMock}>
        <span>Test Chip</span>
      </Chip>,
    )

    fireEvent.click(getByText('x'))

    expect(onDeleteMock).toHaveBeenCalled()
  })
})
