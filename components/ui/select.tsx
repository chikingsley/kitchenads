import React from 'react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

export const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return <select {...props}>{children}</select>
}