"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Skills() {
    const skills = [
        {
            text: 'React',
            icon: SiReact,
        },
        {
            text: 'Next.js',
            icon: SiNextdotjs,
        },
        {
            text: 'Tailwind',
            icon: SiTailwindcss,
        },
        {
            text: 'Git',
            icon: SiGit,
        },
        {
            text: 'Node.js',
            icon: SiNodedotjs,
        },
        {
            text: 'Javascript',
            icon: SiJavascript,
        },
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Skills' className='flex flex-col items-center justify-center -rotate-6'/>
        <HoverEffect items={skills}/>
    </div>
  )
}
