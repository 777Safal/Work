import React from 'react'

function OurServices() {
    const data=[
        {h1:'our services',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
    ]
    const contents=[
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_checkup.svg',
        h1:'Dog Checkup',
        p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_dermatology.svg',
        h1:'Dog Dermatology',
        p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_bones.svg',
        h1:'For Strong Teeth',
        p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_veterinary.svg',
        h1:'Dog First Aid',
        p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_dryer.svg',
        h1:'Dog Dryer',
        p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_veterinarian.svg',
        h1:'Expert Veterinarian',
        p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
    ]
  return (
    <div id='services'>
        <div className='mt-20 mb-10'>
            <div className='w-20 h-20 bg-cover bg-no-repeat m-auto
                bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
            <h1 className='m-auto  text-center font-medium text-3xl uppercase'>{data[0].h1}</h1>
            <p className='max-w-[55ch] m-auto mt-3 text-center text-base text-gray-500'>{data[0].p}</p> 
        </div> 
        <div className='w-9/12 m-auto grid grid-cols-3 gap-2'>
            {contents.map((val,i)=>{
                return <div key={i}>
                    <div className='w-20 h-20'>
                        <img src={val.name} className='w-20 h-20'/>
                    </div>
                    <div className='my-5'>
                        <h1 className='mb-3 text-lg font-medium'>{val.h1}</h1>
                        <p className=' max-w-[35ch] text-zinc-500' >{val.p}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default OurServices