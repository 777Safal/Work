import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'
import {RxDividerVertical} from 'react-icons/rx'

function Footer() {
    const heading=[
        {h1:'About Us',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.'},
        {h1:'Quick Links'},
        {h1:'Follow Us'},
        {h1:'Subscribe Newsletter'},
        
    ]
    const item=[
        {h1:'About Us'},
        {h1:'Trainers'},
        {h1:'Services'},
        {h1:'Testimonials'},
        {h1:'Contact Us'},
    ]
  return (
    <div className='bg-foot pb-10'>
        <div className='w-9/12 m-auto py-20 border-b-2 border-zinc-500 flex justify-between'>
            <div>
                <h1 className='text-white mb-5'>{heading[0].h1}</h1>
                <p className='max-w-[34ch] text-zinc-500 text-sm leading-6'>{heading[0].p}</p>
            </div>
            <div>
                <h1 className='text-white mb-5'>{heading[1].h1}</h1>
                <ul >
                    {item.map((val,i)=>{ 
                        return <li key={i} 
                        className='text-zinc-400 mb-3 text-sm'>{val.h1}</li>
                    })}
                </ul>
            </div>
            <div>
                <h1 className='text-white mb-5'>{heading[2].h1}</h1>
                <div className='grid grid-cols-4 gap-3'>
                    <div><BiLogoFacebook className='text-lg text-zinc-500'/></div>
                    <div><BiLogoLinkedin className='text-lg text-zinc-500'/></div>
                    <div><AiOutlineTwitter className='text-lg text-zinc-500'/></div>
                    <div><BiLogoInstagramAlt className='text-lg text-zinc-500'/></div>
                </div>
            </div>
            <div>
                <h1 className='text-white mb-5'>{heading[3].h1}</h1>
                <div className='rounded-md overflow-hidden border border-zinc-500'>
                    <input type='email' name='email' placeholder='Enter Email' 
                    className='w-3/5 bg-transparent text-sm text-zinc-500 border-none
                     p-2 outline-none'/>
                    <button type='submit' 
                    className='w-2/5 bg-white text-sm text-zinc-500 p-2 border-none outline-none'>Send</button>
                </div>
            </div>
        </div>
        <div className='mb-20 flex items-center justify-center text-xs mt-10 text-zinc-500 '>
            
            <div className='text-right'>
                <p>Copyright ©2023 All rights reserved </p>
            </div>
            <RxDividerVertical className='text-base'/>
            
            <div className='flex items-center text-xs'>
                <span> This template is made with</span><AiFillHeart className='mx-1 text-red-600 text-sm'/>  <span>by Colorlib</span> 
            </div>
            </div>
    </div>
  )
}

export default Footer