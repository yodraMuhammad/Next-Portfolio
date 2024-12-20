"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiExpress, SiGit, SiJavascript, SiJupyter, SiLaravel, SiNextdotjs, SiNodedotjs, SiNumpy, SiPandas, SiPhp, SiPython, SiReact, SiScikitlearn, SiTailwindcss, SiTensorflow } from 'react-icons/si'

export default function Skills() {
    const skills = [
        {
            text: 'Javascript',
            icon: SiJavascript,
        },
        {
            text: 'PHP',
            icon: SiPhp,
        },
        {
            text: 'Node.js',
            icon: SiNodedotjs,
        },
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
            text: 'Express.js',
            icon: SiExpress,
        },
        {
            text: 'Laravel',
            icon: SiLaravel,
        },
    ]
    const dsSkills = [
        {
            text: 'Python',
            icon: SiPython,
        },
        {
            text: 'Jupyter',
            icon: SiJupyter,
        },
        {
            text: 'Tensor Flow',
            icon: SiTensorflow,
        },
        {
            text: 'Pandas',
            icon: SiPandas,
        },
        {
            text: 'Numpy',
            icon: SiNumpy,
        },
        {
            text: 'Scikit learn',
            icon: SiScikitlearn,
        },
    ]
  return (
    <div className='max-w-6xl mx-auto px-8'>
        <Title text='Skills' className='flex flex-col items-center justify-center -rotate-6'/>
        <div className='flex items-center lg:items-stretch flex-col lg:flex-row gap-10 align-middle content-center'>
            <div className='content-center border-b-4 lg:border-r-4 lg:border-b-0 w-40 border-separate border-dashed border-green-500 gap-10'>
                <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all text-center mt-10 '>    
                    WEB
                </h1>
            </div>
            <div className='flex-1'>
                <HoverEffect items={skills} borderColor='ring-green-500'/>
            </div>
        </div>
        <div className='flex items-center lg:items-stretch justify-between flex-col lg:flex-row mt-10 gap-10'>
            <div className='content-center border-b-4 lg:border-r-4 lg:border-b-0 w-40 border-separate border-dashed border-blue-500 gap-10'>
                <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all text-center mt-10'>    
                    Data Science
                </h1>
            </div>
            <div className='flex-1'>
                <HoverEffect items={dsSkills} borderColor='ring-blue-500'/>
            </div>
        </div>
    </div>
  )
}
