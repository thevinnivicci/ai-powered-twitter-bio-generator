import Output from '@/components/home/Output'
import { UserInput } from '@/components/home/UserInput'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import {  ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <main className='relative grid grid-cols-2 gap-12 p-24'>
      <div className="col-span-full group w-full flex flex-col items-center justify-center space-y-4 mb-4 text-center">
        <Link href={"https:github.com/thevinnivicci"} target='_blank' className=''>
          <AnimatedGradientText className='px-6 py-2  rounded-full'>
            <Star className='w-6 h-6 fill-yellow-300 text-yellow-400'/>
            <hr className='mx-2 h-4 w-[1px] bg-gray-300' />
             Star on github
             <ChevronRight className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5'/>
          </AnimatedGradientText>
        </Link>
        <h1 className='font-extrabold uppercase text-7xl text-center w-full lg:w-[90%] mx-auto pt-4 pb-0'>Craft the perfect bio in seconds</h1>
        <p className='text-lg text-red-600'>just answers a few questions,  and we'll genrate a bio that capture who you are.</p>
      </div>
      <UserInput/>
      <Output/>
    </main>
  )
}

export default Home