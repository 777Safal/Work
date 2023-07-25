import React from 'react'

function DoggerBlog() {
    const data=[
        {h1:'dogger blog',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'}
    ]
    const items=[
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_1.jpg',
         h1:'5 Things You Need To Know About Dog Massage' ,
         date:'April 17, 2019',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
         p2:'Read More...'
        },
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_2.jpg',
         h1:'5 Things You Need To Know About Dog Massage' ,
         date:'April 17, 2019',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
         p2:'Read More...'
        },
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_3.jpg',
         h1:'5 Things You Need To Know About Dog Massage' ,
         date:'April 17, 2019',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
         p2:'Read More...'
        },
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_1.jpg',
         h1:'5 Things You Need To Know About Dog Massage' ,
         date:'April 17, 2019',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
         p2:'Read More...'
        },
    ]
  return (
    <div>
        <div>
            <div className='w-20 h-20 bg-cover bg-no-repeat m-auto
                bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
            <h1 className='m-auto  text-center font-medium text-3xl uppercase'>{data[0].h1}</h1>
            <p className='max-w-[55ch] m-auto mt-3 text-center text-base text-gray-500'>{data[0].p}</p> 
        </div> 
        <div className='w-9/12 grid grid-cols-2 m-auto mt-10'>
            {items.map((Val,i)=>{
                return <div key={i} className='flex mb-8'>
                    <div className='w-1/3 h-36 rounded-sm overflow-hidden'>
                        <img src={Val.name}/>
                    </div>
                    <div className='w-2/3 pl-5'>
                        <h1 className='max-w-[25ch] text-lg leading-5 mb-2'>{Val.h1}</h1>
                        <h2 className='text-gray-400 '>{Val.date}</h2>
                        <p className='max-w-[32ch] my-3 text-gray-600 leading-6'>{Val.p}</p>
                        <p className='text-gray-400'>{Val.p2}</p>
                    </div>
                </div>
            })}
        </div> 
    </div>
  )
}

export default DoggerBlog