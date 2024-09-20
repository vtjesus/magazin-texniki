
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

interface MenuItemProps {
  selected: boolean
  title: string
  variants: any
  onClick: () => void
  link?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, variants, onClick, selected, link }) => {
  if (link !== undefined) {
    return (
      <motion.li
        variants={variants}
        className={
          `
          cursor-pointer
          ${selected ? 'text-white' : 'text-white/50'}
          `
        }
        onClick={
          onClick
        }
      >
        <Link to={link}>
          {title}
        </Link>
      </motion.li>
    )
  }

  return (
    <motion.li
      onClick={onClick}
      variants={variants}
      className={
        `
        cursor-pointer
        ${selected ? 'text-white' : 'text-white/50'}
        `
      }
    >
      {title}
    </motion.li>
  )
}
