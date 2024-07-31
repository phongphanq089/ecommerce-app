import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

const PageLogin = () => {
  return (
    <div className='container px-4 mx-auto'>
      <div className='max-w-lg mx-auto'>
        <div className='text-center mb-4'>
          <h2 className='text-3xl md:text-4xl '>LOGIN</h2>
        </div>
        <form action=''>
          <div className='mb-3'>
            <label className='block mb-1' htmlFor=''>
              Email
            </label>
            <Input
              className='inline-block w-full p-1 bg-white shadow border-2 border-black rounded h-12'
              type='email'
              placeholder='email'
            />
          </div>
          <div className='mb-3'>
            <label className='block mb-1 ' htmlFor=''>
              Password
            </label>
            <Input
              className='inline-block w-full p-1  bg-white shadow border-2 border-black rounded h-12'
              type='password'
              placeholder='password'
            />
          </div>
          <div className='flex flex-wrap  mb-3 items-center justify-between text-[18px]'>
            <div className='flex items-center space-x-1'>
              <Checkbox id='terms' />
              <Label htmlFor='terms ' className='text-[18px] font-medium'>
                Rememer me
              </Label>
            </div>
            <div className='w-full lg:w-auto px-4'>
              <Link className='inline-block  hover:underline' href='#'>
                Forgot your password?
              </Link>
            </div>
          </div>
          <button className='inline-block w-full p-2 mb-3 text-sm text-center leading-6 text-white  bg-black hover:bg-[#111827] border-3 border-black shadow rounded transition duration-200'>
            LOGIN
          </button>
          <p className='text-center text-[18px]'>
            Don&rsquo;t have an account?{' '}
            <Link className='text-red-500 hover:underline' href='/sign-in'>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default PageLogin
