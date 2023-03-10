import { describe, expect, it } from 'vitest'
import { TITLE, PROMPT } from './copy'
import Home from './Home'
import { render, screen } from '@testing-library/react'

describe('Home view', () => {
  it('renders component', () => {
    render(<Home />)
  })

  it('renders headline', () => {
    render(<Home />)

    screen.debug()

    expect(screen.getByText(TITLE)).toBeInTheDocument()
    expect(screen.getByText(PROMPT)).toBeInTheDocument()
  })

  it('renders menu bar filters', () => {
    render(<Home />)

    screen.debug()

    expect(screen.getByRole('menubar')).toBeInTheDocument()
  })
})
