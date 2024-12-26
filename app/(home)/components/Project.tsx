import React from 'react'
import { SiAxios, SiElectron, SiGithub, SiGitlab, SiJira, SiNuxtdotjs, SiReact, SiRedux, SiTailwindcss, SiVercel } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { Icon } from 'lucide-react'

export default function Project() {

  const projects = [
    {
      title: "EMIS",
      tech: [SiReact, SiRedux, SiElectron, SiGitlab, SiJira],
      link: "https://emis.kemenag.go.id/",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "airbnb Clone",
      tech: [SiNuxtdotjs, SiTailwindcss, SiAxios, SiGithub, SiVercel],
      link: "https://airnbn-clone.vercel.app/",
      cover: "/project-2.png",
      background: "bg-green-500",
    },
  ]

  return (
    <div className='py-10 p-5sm:p-0'>
      <Title text='Project' className='flex flex-col items-center justify-center rotate-6 mb-5'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-2 gap-5'>
        {projects.map((project, index) => {
          return  <Link href={project.link} key={index}>
            <div className={cn("p-1 rounded-md", project.background)}>
              <DirectionAwareHover
                imageUrl={project.cover}
                className='w-full space-y-5 cursor-pointer'
              >
                <div className='space-y-5'>
                  <h1 className='text-2xl font-bold'>{project.title}</h1>
                  <div className='flex items-center gap-5'>
                    {project.tech.map((Icon, index) => {
                      return <Icon className='w-8 h-8' key={index} />
                    })}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        })}
      </div>
    </div>
  )
}
