import React from 'react'
import Aos from 'aos'

function Topimg() {
    const data=[
        {h1:'We care for your dog',
         p:'We always try to provide your dog the best services.'}
    ]
  return (
   <div id='#' className='bg-topimg'>
     <div className='w-9/12 m-auto h-[100vh] bg-contain bg-right bg-no-repeat flex justify-center
    bg-[url(https://preview.colorlib.com/theme/dogger/images/dogger_img_1.png)]'>
        <div className='w-full h-full flex items-center'>
            <div>
            <div data-aos="fade-right"
            className='max-w-[12ch] text-6xl uppercase font-bold leading-tight'>{data[0].h1}</div>
            <div className='max-w-[40ch] mt-2 text-lg text-gray-400 font-normal'>{data[0].p}</div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Topimg