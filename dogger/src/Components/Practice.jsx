import React,{useState} from 'react'

function Practice() {
    const data=[
        {h1:'dog',
        p:'a dog is a most honest and loyal animal of a human being. we love dog and we should care about them in all various way'},
        {h1:'cat',
        p:'a cat is a most beautiful and loyal animal of a human being. we love dog and we should care about them in all various way'},
        {h1:'lion',
        p:'a lion is a most strong and loyal animal of a human being. we love dog and we should care about them in all various way'},
        {h1:'loath',
        p:'a loath is a most lazy and sleepy animal of a human being. we love dog and we should care about them in all various way'},
        {h1:'bird',
        p:'a bird is a most free and happy animal of a human being. we love dog and we should care about them in all various way'},
    ]
    const [activing,setActiving]=useState(null)
    
  return (
    <div className='flex justify-center '>
        <div className='w-[350px] h-[200px] bg-slate-400 text-zinc-800'>
            {data.map((Val,i)=>{
                return <div key={i}>
                    <h1 onClick={()=>setActiving(i)}>{Val.h1}</h1>
                    {activing === i && <p>{Val.p}</p>}
                </div>
            })}
        </div>
    </div>
  )
}

export default Practice