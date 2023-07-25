import React from 'react'
import Aos from 'aos'

function Welcome() {
    const data=[
        {h1:'welcome to dogger pet care',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        }
    ]
    const love=[
      {h1:'Love & care',
      p:'Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_3.jpg'
      }]
    const Fearsome=[
      {h1:'Love & care',
      p:'Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_1.jpg'
      }]
    const beautiful=[
      {h1:'Love & care',
      p:'Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_2.jpg'
      }]
  return (
    <div className='py-10'>
        <div>
            <div className='w-full'>
            <div className='w-20 h-20 bg-cover bg-no-repeat m-auto
            bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
            <h1 className='max-w-[23ch] m-auto text-center font-medium text-3xl uppercase'>{data[0].h1}</h1>
            <h1 className='max-w-[55ch] m-auto mt-2 text-center text-base text-gray-500'>{data[0].p}</h1>
            </div>
        </div>
        <div className='w-9/12 mt-14 m-auto'>
          <div className='grid grid-cols-2'>
            <div>
              <div className='pr-24 flex flex-col items-end justify-center'>
                <h1 className='text-3xl'>{love[0].h1}</h1>
                <p className='my-2 text-gray-500 text-right'>{love[0].p}</p>
                <button type='submit' 
                className='mt-2 w-32 h-10 outline-none text-white bg-trainers rounded-3xl text-sm hover:bg-black'>
                  Read More</button>
              </div>
            </div>
          <div>
          <div className='h-72 flex content-center bg-red-400'>
                <img src={love[0].name} className='w-full h-full object-cover'/>
            </div>
          </div>
          </div>
          <div className='grid grid-cols-2'>
            <div>
            <div className='h-72 flex content-center bg-red-400'>
                <img src={Fearsome[0].name} className='w-full h-full object-cover'/>
            </div>
            </div>
            <div>
            <div className='pl-24 flex flex-col items-start justify-center'>
              <h1 className='text-3xl'>{Fearsome[0].h1}</h1>
              <p className='my-2 text-gray-500 text-left'>{Fearsome[0].p}</p>
              <button type='submit'
              className='mt-2 w-32 h-10 outline-none text-white bg-trainers rounded-3xl text-sm hover:bg-black'>
                Read More</button>
            </div>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='pr-24 flex flex-col items-end justify-center'>
              <h1 className='text-3xl'>{beautiful[0].h1}</h1>
              <p className='my-2 text-gray-500 text-right'>{beautiful[0].p}</p>
              <button type='submit'
              className='mt-2 w-32 h-10 outline-none text-white bg-trainers rounded-3xl text-sm hover:bg-black'>
                Read More</button>
            </div>
            <div className='h-72 flex content-center bg-red-400'>
                <img src={beautiful[0].name} className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Welcome