import { ButtonHTMLAttributes, ReactNode } from "react"
import { MainButton } from "./styles"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export function Button({children, size='md', ...rest}:IButton) {
  return (
    <MainButton size={size} {...rest}>
      {children}
    </MainButton>
  )
}
