import React, { useState } from 'react'

function Test1() {
const [index,setindex]=useState(0)
const next=()=>{
    if(index<ima.length-1){
        setindex(index+1)
    }
    else{
        setindex(0)
    }
}
const previous=()=>{
    if(index>0){
        setindex(index-1)
    }
    else {
        setindex(ima.length-1)
    }
}
    const ima=[
    {
        name:'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg',
        h1:'Renuka Thapa',
        p1:'Nothing can stop her',
        date:'20201-MAY-03',
        name2:'#Queen of angels',
    },
    {
        name:'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg',
        h1:'Susmit  Magar',
        p1:'He is the legend ghost who has his support of a angel queen',
        date:'20201-MAY-03',
        name2:'#Legendary ghost',
    },
    {
        name:'https://scontent.fbwa3-1.fna.fbcdn.net/v/t39.30808-6/316266044_687164436446464_8948807663808733917_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N8mv1goyJ4IAX_fcc15&_nc_ht=scontent.fbwa3-1.fna&oh=00_AfBhXbnqj0qVOPz_RcDlmB8k7B6qKLRn_vaC4O3pyZZ1jw&oe=64686F99',
        h1:'Susmita Thapa Magar',
        p1:'Chota packet Badha dhamaka!!!!',
        date:'20201-MAY-03',
        name2:'#Shines like a diamond',
    },
    {
        name:'https://scontent.fbwa3-1.fna.fbcdn.net/v/t1.6435-9/178385695_3161318537341830_8624094472491000133_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xWyaupoJ3K8AX_DEeQC&_nc_ht=scontent.fbwa3-1.fna&oh=00_AfB5nR-tYmiTDySL5bWdyha5mAN3WBd2BpOMwHnO7RpHig&oe=648BA816',
        h1:'Sangeeta Thapa Magar',
        p1:'Cuttest among the cute',
        date:'20201-MAY-03',
        name2:'#Her songs makes mother nature drop teas of her happiness ',
    },
]

  return (
    <div className='w-full bg-slate-50 flex justify-center'>
        <div className='w-9/12  rounded-lg  bg-gray-200 mt-24'>
            {
                ima.map((val,i)=>{
                    return <div key={i} className={`${i===index?'block' :'hidden'}`}>
                        <div className='w-2/4'>
                            <div className='w-[250] h-[220] bg-black'>
                            <img src={val.name} className='w-fit h-64 rounded-full bg-white' />
                            </div>
                        </div>
                        <div className='w-2/4 flex items-center p-11'>
                            <div className=''>
                            <div className='text-2xl font-bold font-sans text-sky-400'>{val.h1}</div>
                            <div>{val.p1}</div>
                            <div>{val.name2}</div>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
            <div>
                <div onClick={()=>next()} className='bg-red-500 text-white w-2/4'>Next</div>
                <div onClick={()=>previous()} className='bg-red-500 text-white w-2/4'>Previous</div>
            </div>
        </div>
    
  )
}

export default Test1