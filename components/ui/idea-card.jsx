import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Github } from 'lucide-react';


export default function IdeaCard() {
  return (
    <div className=" bg-[#0d0d0d] md:w-1/3 w-full p-6">
    <div className="h-10">
      <h1 className="archivo text-lg mb-4">zk loyalty</h1>
    </div>
    <hr className="opacity-10 my-2" />
    <div className=" h-20">
      <h3 className="archivo mt-4 text-sm opacity-50">A GDPR compliant, anonymous loyalty program	</h3>
    </div>
    <div className='flex justify-between items-center my-3'>
    <div className="flex space-x-3 w-2/3">
      <Badge variant="secondary">Tag 1</Badge>
      <Badge variant="secondary">Tag 2</Badge>
      <Badge variant="secondary">Tag 3</Badge>
    </div>
    <div className='w-1/3 text-xs text-end flex justify-end'>
       <Github className='w-5 h-5' />
    </div>
    </div>
    <hr className="opacity-10 my-3" />
    <h3 className="archivo mt-2 text-sm opacity-50 text-end hover:underline cursor-pointer">Source : @hackyguru</h3>
  </div>
  )
}
