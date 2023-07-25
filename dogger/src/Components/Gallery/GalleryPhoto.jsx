import React from 'react'

function GalleryPhoto() {
    const data=[
        {h1:"Photo gallery"}
    ]
    const images=[
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_1.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_2.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_3.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_4.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_5.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_6.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_1.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_2.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_3.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_4.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_5.jpg'},
        {name:'https://preview.colorlib.com/theme/dogger/images/dogger_img_sm_6.jpg'},
        
    ]
  return (
    <div className='my-20'>
        <div className=''>
        <div className='w-20 h-20 bg-cover bg-no-repeat m-auto
            bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
         <h1 className='m-auto text-center font-medium text-3xl uppercase'>{data[0].h1}</h1>
        </div>
        <div className='grid grid-cols-4 mt-10'>
            {images.map((val,i)=>{
                return <div key={i} 
                className={` h-52 hover:shadow-2xl rounded-sm overflow-hidden cursor-zoom-in
                transition-all ease-in-out delay-100 hover:translate-2 hover:scale-125 duration-700`}>
                    <img src={val.name} className='w-full h-full'/>
                </div>
            })
            }
        </div>
    </div>
  )
}

export default GalleryPhoto