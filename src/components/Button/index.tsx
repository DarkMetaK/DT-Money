import { ButtonHTMLAttributes, ReactNode } from "react"
import { MainButton } from "./styles"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  size?: 'sm' | 'md' | 'lg'
}

export function Button({children, size='md', ...rest}:IButton) {
  return (
    <MainButton size={size} {...rest}>
      {children}
    </MainButton>
  )
}
