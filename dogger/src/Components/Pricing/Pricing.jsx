import React from 'react'
import {BiCheck} from 'react-icons/bi'
import Aos from 'aos'
import { list } from 'postcss'

function Pricing() {
    const data=[
        {h1:'pricing table',
         p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'}
    ]
    const headings=[
      {h1:'Basic ',h2:'$47',p:'/ year',color:'bg-trainers',
       h3:'Buy Now',color2:'bg-contact'
       ,listItems:[
        {p:'Officia quaerat eaque neque',active:'true'},
        {p:'Possimus aut consequuntur incidunt',active:'true'},
        {p:'Lorem ipsum dolor sit amet',active:'false'},
        {p:'Consectetur adipisicing elit',active:'false'},
        {p:'Dolorum esse odio quas architecto sint',active:'false'}, 
      ]},
      {h1:'Premium ',h2:'$250',p:'/ year',color:'bg-dark',
       h3:'Buy Now',color2:'bg-trainers'
      ,listItems:[
        {p:'Officia quaerat eaque neque',active:'true'},
        {p:'Possimus aut consequuntur incidunt',active:'true'},
        {p:'Lorem ipsum dolor sit amet',active:'true'},
        {p:'Consectetur adipisicing elit',active:'true'},
        {p:'Dolorum esse odio quas architecto sint',active:'false'}, 
      ]},
      {h1:'Professional',h2:'$850',p:'/ year',color:'bg-trainers',
       h3:'Buy Now',color2:'bg-contact'
      ,listItems:[
        {p:'Officia quaerat eaque neque',active:'true'},
        {p:'Possimus aut consequuntur incidunt',active:'true'},
        {p:'Lorem ipsum dolor sit amet',active:'true'},
        {p:'Consectetur adipisicing elit',active:'true'},
        {p:'Dolorum esse odio quas architecto sint',active:'true'}, 
      ]},
    ]
  
    const buy=[
      {h1:'Buy Now',color:'bg-contact'},
      {h1:'Buy Now',color:'bg-trainers'},
      {h1:'Buy Now',color:'bg-contact'},
    ]
  return (
    <div>
        <div className='mt-20'>
            <div className='w-20 h-20 bg-cover bg-contact bg-no-repeat m-auto
                bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
            <h1 className='m-auto  text-center font-medium text-3xl uppercase'>{data[0].h1}</h1>
            <p className='max-w-[55ch] m-auto mt-3 text-center text-base text-gray-500'>{data[0].p}</p> 
        </div> 
        <div >
        <div className='w-9/12 m-auto mt-10 grid grid-cols-3 text-white'>
          {headings.map((val,i)=>{
            return <div key={i} className={`${val.color} px-10 py-14 `}>
              <h1 className='text-center text-2xl uppercase' >{val.h1}</h1>
              <div className='mt-6 flex justify-center items-end'>
                <h2 className='text-5xl font-light'>{val.h2}</h2>
                <h2>{val.p}</h2>
              </div>
              <ul>
                {val.listItems.map((item,index)=>{
                  return <li key={index} className={`${item.active === 'true'?'':'line-through'}
                  flex mt-5`}>
                      <div><BiCheck className='text-xl mr-3'/></div>
                      <div>{item.p}</div>
                  </li>
                })}
              </ul>
              <div className='w-32 h-10 mt-8 m-auto'>
                <button 
                className={`${val.color2} hover:bg-zinc-800 mt-2 w-full h-full 
                outline-none rounded-3xl text-sm`}>{val.h3}</button>
              </div>
            </div>
})}
          
        </div>
        </div>

{/* <div className="grid grid-cols-3 gap-4">
      {headings.map((heading, index) => (
        <div
          key={index}
          className={`rounded-md p-4 text-center ${
            heading[0].color === 'bg-trainers' ? 'bg-trainers' : 'bg-contact'
          }`}
        >
          <h1 className="text-3xl font-bold">{heading[0].h1}</h1>
          <h2 className="text-xl font-bold">{heading[0].h2}</h2>
          <p>{heading[0].p}</p>
        </div>
      ))}
    </div> */}
    </div>
  )
}

export default Pricing