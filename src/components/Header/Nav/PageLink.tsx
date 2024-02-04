import Link from 'next/link'
import React, { SetStateAction } from 'react'


interface linkProps {
    link: string
    title: string
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const PageLink: React.FC<linkProps> = ({title, link, setIsOpen}) => {
  return (
    <li className = 'h-1/4 w-full border-b-2 last:border-b-0' onClick = {() => setIsOpen(false)}>
        <Link href = {link} className = 'w-screen h-full text-center'>{title}</Link>
    </li>
  )
}

export default PageLink