import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Github } from 'lucide-react';

export default function IdeaCard({ name, description, categories, github, source }) {
  return (
    <div className="bg-[#0d0d0d] md:w-1/3 w-full p-6">
      <div className="h-10">
        <h1 className="archivo text-lg mb-4">{name}</h1>
      </div>
      <hr className="opacity-10 my-2" />
      <div className="h-20">
        <h3 className="archivo mt-4 text-sm opacity-50">{description}</h3>
      </div>
      <div className='flex justify-between items-center my-3'>
        <div className="flex flex-wrap space-x-2 w-2/3">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary">{category}</Badge>
          ))}
        </div>
        <div className='w-1/3 text-xs text-end flex justify-end'>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className='w-5 h-5' />
          </a>
        </div>
      </div>
      <hr className="opacity-10 my-3" />
      <h3 className="archivo mt-2 text-sm opacity-50 text-end hover:underline cursor-pointer">Source: {source}</h3>
    </div>
  )
}