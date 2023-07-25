import React, { useState } from 'react'

function Ask() {
    const data=[
        {h1:'FREQUENTLY ASK QUESTIONS'}
    ]
    const item=[
        {i1:'Should I stop letting my dog sleep with me at night?',
        p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {i1:"Is it okay to dress up your dog?",
        p:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'},
        {i1:"Why do dogs like belly rubs so much?",
        p:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'},
        {i1:"Is a warm dry nose a sign of illness in dogs?",
        p:'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.'},
    ]
    const [show,setShow]=useState(null)
  return (
    <div className='my-20'>
        <div className='my-6'>
        <div className='w-20 h-20 bg-cover bg-no-repeat m-auto
            bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
         <h1 className='m-auto text-center font-medium text-3xl uppercase'>{data[0].h1}</h1>
         <p className='max-w-[55ch] m-auto mt-2 text-center text-base text-gray-500'>{data[0].p}</p>   
        </div>
        <div className='w-9/12 mt-14 mx-auto grid grid-cols-2'>
                <div>
                    {item.map((val,i)=>{
                        return <div key={i} className='w-full flex'>
                     <div className='w-6 h-6 bg-contain bg-no-repeat mr-2
                    bg-[url(https://cdn-icons-png.flaticon.com/128/1883/1883727.png)]'></div>
                    <div>
                        <h1 onClick={()=>setShow(i)}
                        className='text-lg max-w-[35ch]'>{val.i1}</h1>
                            {show===i && 
                            <p className='text-sm my-5 text-gray-400 max-w-[44ch]'>
                                {val.p}
                            </p>}
                    </div>
                        </div>
                    })}
                </div>
            <div className='w-full rounded-sm overflow-hidden h-80 bg-cover bg-center bg-no-repeat bg-red-300
            bg-[url(https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_1.jpg)]'></div>
        </div>
    </div>
  )
}

export default Ask