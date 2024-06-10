import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin, SiMedium   } from "react-icons/si";

export default function Navbar() {
    const socials = [
        {
            link: 'https://www.linkedin.com/in/yodra-muhamad-akbar-837a85134',
            label: 'Linkedin',
            icon: SiLinkedin,
        },
        {
            link: 'https://github.com/yodraMuhammad',
            label: 'Github',
            icon: SiGithub,
        },
        {
            link: 'https://www.instagram.com/yodra.ma/',
            label: 'Instagram',
            icon: SiInstagram,
        },
        {
            link: 'https://yodra-muhamad.medium.com/',
            label: 'Medium',
            icon: SiMedium,
        },
    ]
  return (
    <nav className='py-10 flex justify-between items-center'>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
            YodraDev⚡
        </h1>
        <div className='flex items-center gap-7'>
            {socials.map((social, index)=> {
                const Icon = social?.icon
                return (
                    <Link href={social?.link} key={index} aria-label={social?.label} legacyBehavior>
                         <a target="_blank" rel="noopener noreferrer">
                            <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                         </a>
                    </Link>
                )
            })}
        </div>
    </nav>
  )
}
