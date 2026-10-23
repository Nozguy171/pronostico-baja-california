import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  form?: string
  onClick?: () => void
}

export function Button({ children, variant = 'primary', type = 'button', form, onClick }: ButtonProps) {
  return (
    <button className={`button button-${variant}`} type={type} form={form} onClick={onClick}>
      {children}
    </button>
  )
}
