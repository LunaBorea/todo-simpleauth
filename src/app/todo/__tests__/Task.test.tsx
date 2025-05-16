import { render, screen, fireEvent } from '@testing-library/react'
import Task from '../task'

describe('Task component', () => {
  it('renders with correct content', () => {
    render(<Task id={1} description="Test task" isDone={false} removeFunc={() => {}} toggleFunc={() => {}} />)
    expect(screen.getByText('Test task')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
    expect(screen.getByText('Finish')).toBeInTheDocument()
  })
})