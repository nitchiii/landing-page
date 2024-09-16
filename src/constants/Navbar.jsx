import { useState } from 'react'

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="border-b-2"></nav>
  )
}

export default navbar