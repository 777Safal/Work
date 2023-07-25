import React from 'react'

function Aboutus() {
  const data=[
    {p1:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
     p2:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  }
  ]
  const listItems=[
    {i1:'A small river named Duden flows'},
    {i1:'It is a paradisematic country'},
    {i1:'Roasted parts of sentences fly'},
  ]
  return (
    <div id='about' className='my-20 '>
      <div className='flex justify-center'>
      <div className='w-9/12 grid grid-cols-2'>
            <div className='my-auto'>
            <div className='w-16 h-16 bg-cover bg-no-repeat
            bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
                <h1 className='font-semibold text-3xl'>ABOUT US</h1>
                <p className='max-w-[42ch] mt-3 text-lg tracking-wide text-slate-600 font-light'>{data[0].p1}</p>
                <p className='max-w-[45ch] my-5 text-slate-600'>{data[0].p2}</p>
                <ul>
                  {listItems.map((val,i)=>{
                    return <li key={i} 
                    className='my-2 text-slate-600 flex list-none'>
                      <div className='w-5 h-5 mr-2 bg-cover bg-no-repeat
                      bg-[url(https://cdn-icons-png.flaticon.com/128/9174/9174277.png)]'></div>
                      <div>{val.i1}</div>
                      </li>
                  })}
                </ul>
            </div>
{/* image section */}
            <div className='h-[100vh] w-full bg-cover bg-no-repeat
            bg-[url(https://preview.colorlib.com/theme/dogger/images/dogger_img_big_1.jpg)]'></div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus