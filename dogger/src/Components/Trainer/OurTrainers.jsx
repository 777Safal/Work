import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoInstagramAlt} from 'react-icons/bi'

function OurTrainers() {
    const data=[
        {h1:'Our trainers',
        p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'}
    ]
    const trainerData=[
        {h1:'Jessica White',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
         name:'https://preview.colorlib.com/theme/dogger/images/dogger_trainer_1.jpg'
        },
        {h1:'Valerie Elash',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
         name:'https://preview.colorlib.com/theme/dogger/images/dogger_trainer_2.jpg'
        },
        {h1:'Alicia Jones',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
         name:'https://preview.colorlib.com/theme/dogger/images/dogger_trainer_3.jpg'
        },
    ]
  return (
    <div id='trainers' className='py-20 bg-trainers'>
        <div >
            <div className='w-20 h-20 bg-cover bg-no-repeat m-auto
                bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
            <h1 className='m-auto  text-center font-medium text-3xl uppercase'>{data[0].h1}</h1>
            <p className='max-w-[55ch] m-auto mt-3 text-center text-base text-gray-500'>{data[0].p}</p> 
        </div> 
        <div>
        <div className='w-9/12 m-auto mt-20 grid grid-cols-3 gap-6' >
            {trainerData.map((val,i)=>{
                return <div key={i} >
                    <div>
                        <img src={val.name} className='w-full h-full'/>
                    </div>
                    <div className='mt-10 pl-4'>
                        <h1 className='text-lg mb-5 font-normal'>{val.h1}</h1>
                        <p className='max-w-[55ch] mt-3 text-base text-gray-500 leading-6'>{val.p}</p>
                    </div>
                    <div className='flex pl-4 mt-3 text-xs'>
                        <div className='w-6 h-6 bg-white rounded-full flex justify-center items-center'><AiOutlineTwitter/></div>
                        <div className='w-6 h-6 mx-3 bg-white rounded-full flex justify-center items-center'><BiLogoInstagramAlt/></div>
                        <div className='w-6 h-6 bg-white rounded-full flex justify-center items-center'><BiLogoFacebook/></div>
                    </div>
                </div>
            })}
        </div>
        </div>
    </div>
  )
}

export default OurTrainers