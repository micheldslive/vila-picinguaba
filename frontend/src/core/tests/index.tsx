import { render, RenderResult } from '@testing-library/react'

export const getRenderer = (children: React.ReactNode): RenderResult =>
  render(<>{children}</>)
