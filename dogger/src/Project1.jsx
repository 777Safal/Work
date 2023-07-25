import React ,{useState ,useEffect}from 'react'
import {Form, Formik,Field} from 'formik'
import {HiMenu} from 'react-icons/hi'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {IoLogoYoutube} from 'react-icons/io'
import {GrLinkedinOption} from 'react-icons/gr'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'



function Project1() {
const [imageSlide,setimageSlide]=useState(0)
const next=()=>{
    if(img.length-1<=imageSlide){
        setimageSlide(0)
    }
    else{
        setimageSlide(imageSlide+1)
    }
}
const previous=()=>{
    if(imageSlide===0){
        setimageSlide(img.length-1)
    }
    else{
        setimageSlide(imageSlide-1)
    }
}
const img=[
    {   name:'https://images.pexels.com/photos/14737351/pexels-photo-14737351.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        title:"Your most unhappy customers are your greatest source of learning.",
        title2:'Business, Travel',
        date:'-July 2,2020',
        p:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",     
        name2:'Sergy Campbell',
        name3:'CEO and Founder',
        name4:'Author,26 published post',
},
    {   name:'https://images.pexels.com/photos/14685740/pexels-photo-14685740.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        title:"Your most unhappy customers are your greatest source of learning.",
        title2:'Business, Travel',
        date:'-July',
        p:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",     
        name2:'Sergy Campbell',
        name3:'CEO and Founder',
        name4:'Author,26 published post',
},
    {   name:'https://images.pexels.com/photos/15597897/pexels-photo-15597897.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        title:"Your most unhappy customers are your greatest source of learning.",
        title2:'Business, Travel',
        date:'-July 2,2020',
        p:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",     
        name2:'Sergy Campbell',
        name3:'CEO and Founder',
        name4:'Author,26 published post',
},
    {   name:'https://images.pexels.com/photos/15891938/pexels-photo-15891938.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        title:"Your most unhappy customers are your greatest source of learning.",
        title2:'Business, Travel',
        date:'-July 2,2020',
        p:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",     
        name2:'Sergy Campbell',
        name3:'CEO and Founder',
        name4:'Author,26 published post',
},
    {   name:'https://images.pexels.com/photos/4514301/pexels-photo-4514301.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        title:"Your most unhappy customers are your greatest source of learning.",
        title2:'Business, Travel',
        date:'-July 2,2020',
        p:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",     
        name2:'Sergy Campbell',
        name3:'CEO and Founder',
        name4:'Author,26 published post',
},
    {   name:'https://images.pexels.com/photos/6957569/pexels-photo-6957569.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        title:"Your most unhappy customers are your greatest source of learning.",
        title2:'Business, Travel',
        date:'-July 2,2020',
        p:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",     
        name2:'Sergy Campbell',
        name3:'CEO and Founder',
        name4:'Author,26 published post',
},
]


// yo chai afai slide garni gareko 
useEffect(() => {
  let timeout=setTimeout(()=>{
    next()
  }, 3000);

  return () => {
    clearTimeout(timeout)
  }
}, [imageSlide])

  return (
    <div className=' w-full h-full flex  flex-col'>
        {/* top part */}
        <div className='flex justify-center border border-gray-300'>
            <div className=' w-10/12 h-24 mt-0 flex flex-row items-center justify-between'>
                <div className='hidden lg:flex items-center gap-3 border border-gray-300 rounded-3xl px-2'>{/* search box */}
                <input type="text" placeholder='Search...' className='w-72 h-9 px-2 rounded-3xl' />
                <BiSearch className='text-gray-300' />
                </div>
                <div className='font-bold text-xl'>MAGDESIGN</div>{/* title */}
                <div className='grid  grid-cols-4 gap-3 text-xs'>{/* logo */}
                <div className=' flex items-center justify-center cursor-pointer'><FaFacebookF className=''/></div>
                    <div className='flex items-center justify-center cursor-pointer'><BsTwitter/></div>
                    <div className='flex items-center justify-center cursor-pointer'><IoLogoYoutube/></div>
                </div>
                <div className=''>
                    <HiMenu className='text-3xl' />
                     </div>{/* logo2 */}

            </div>
        </div>
        {/* next section 1*/}
        <div className='w-10/12 mx-auto h-fit overflow-hidden'>
            <div className='h-28 text-center flex justify-center items-center text-5xl font-bold'>Trending</div>{/* title */}
            
            <div className=' h-fit overflow-hidden'>{/* body */}
            {
                img.map((val,i)=>{
                    return <div key={i} className={`${i===imageSlide?'block' : 'hidden'} flex  lg:flex-row flex-col p-5 w-full h-full` }>
                            <img src={val.name} className='h-[380px] w-full lg:w-2/6 rounded-md'/>
                        <div className='w-4/6 mx-10 text-gray-400 flex items-center '> <div>
                            <p> <span className='font-bold text-gray-900'>{val?.title2}</span> {val?.date} </p>
                            <p className='text-gray-900 text-5xl font-bold my-2'>{val?.title}</p>
                            <p className=''>{val?.p} </p>
                             <div className='flex flex-row mt-4'>
                                <div className='h-[50px] w-[50px] border border-blue-400 rounded-full'></div>
                                <div> <span className='text-gray-900 font-bold'> {val?.name2}</span><br/> <span className='text-sm'> {val?.name3}</span></div>
                             </div>
                             </div>
                        </div>
                    </div>
                })
            }
            </div>

            <div className=' mt-5 h-9 w-full gap-3 flex flex-row items-end justify-center'>{/* button */}
            {
                img.map((val,i)=>{
                    return <div onClick={
                        ()=>{
        setimageSlide(i)

                        }
                    } key={i} className={`h-2 w-2 ${i===imageSlide?'bg-purple-500' : ' bg-gray-700'} rounded-full cursor-pointer`} >
                        
                    </div>
                })
            }
            </div>
        </div>

        {/* section 2 */}
        <div className='w-10/12 gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto py-12'>
            {
                img.map((val,i)=>{
                return <div key={i} className='w-full h-auto'>
                    
                    <img src={val.name} className='w-full h-72 rounded-xl'/>
                    
                    
                    <div className=' text-gray-400 flex items-center text-sm mt-8 '> <div>
                        <p> <span className='font-bold text-gray-900'>{val?.title2}</span> {val?.date} </p>
                        <p className='text-gray-900 font-bold text-xl mt-2'>{val?.title}</p>
                        <p className='mt-2'>{val?.p} </p>
                            <div className='flex flex-row mt-2'>
                            <div className='h-[45px] w-[45px] border border-blue-400 rounded-full'></div>
                            <div className='mx-2'> <span className='text-gray-900 font-bold'> {val?.name2}</span><br/> <span className='text-sm'> {val?.name3}</span></div>
                            </div>
                            </div>
                    </div>
                </div>

                })
            }
        </div>
        {/* next section 3*/}

        <div className='w-full h-auto mx-auto full overflow-hidden'>            
                <div className='h-28 text-center flex justify-center items-center text-5xl font-bold'>Most Popular Posts</div>{/* title */}
                <div className=' w-9/12 mx-auto h-screen  overflow-hidden relative gap-6 flex flex-row '>{/* body */}
                {
                    img.map((val,i)=>{
                        console.log(i,imageSlide)
                        return <div key={i} className={`absolute ${i===imageSlide?'right-0' : i===imageSlide+1?'  -right-64 w-6/12':'hidden'} flex  top-0 flex-col p-5 h-full` }>
                                <img src={val.name} className='h-[500px] w-[700px] rounded-md'/>
                            <div className='w-4/6 mx-10 text-gray-400 flex items-center '> <div>
                                <p> <span className='font-bold text-gray-900 text-sm'>{val?.title2}</span> {val?.date} </p>
                                <p className='text-gray-900 text-lg font-bold my-2'>{val?.title}</p>
                                <p className='text-sm'>{val?.p} </p>
                                <div className='flex flex-row mt-4'>
                                    <div className='h-[40px] w-[40px] border border-blue-400 rounded-full'></div>
                                    <div> <span className='text-gray-900 font-bold'> {val?.name2}</span><br/> <span className='text-sm'> {val?.name3}</span></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                </div>

                <div className=' mt-5 h-9 w-full gap-3 flex flex-row items-end justify-center'>{/* button */}
                {
                    img.map((val,i)=>{
                        return <div onClick={
                            ()=>{
            setimageSlide(i)

                            }
                        } key={i} className={`h-2 w-2 ${i===imageSlide?'bg-purple-500' : ' bg-gray-700'} rounded-full cursor-pointer`} >
                            
                        </div>
                    })
                }
                </div>
        
        </div>
        {/* next section 4*/}
        <div className='w-10/12 gap-7 grid grid-row lg:grid-cols-2 mx-auto mt-40'>
            <div className='text-3xl font-bold text-gray-900'>Sports</div>
            <div className='text-2xl font-bold text-gray-900'>Business</div>
        {
                img.map((val,i)=>{
                return <div key={i} className='w-full h-auto flex flex-col lg:flex-row mt-3'>
                    <img src={val.name} className='w-full h-64 lg:w-40 lg:h-20  rounded-xl'/>
                    <div className=' text-gray-400 flex items-center text-sm ml-4 '> <div>
                        <p> <span className='font-bold text-gray-900'>{val?.title2}</span> {val?.date} </p>
                        <p className='text-gray-900 font-bold text-xl '>{val?.title}</p>
                            <div className='flex flex-row'>
                            <div className='h-[40px] w-[40px] border border-blue-400 rounded-full'></div>
                            <div className='mx-2'> <span className='text-gray-900 font-bold'> {val?.name2}</span><br/> <span className='text-sm'> {val?.name4}</span></div>
                            </div>
                            </div>
                    </div>
                </div>

                })}
        </div>
        {/* last section */}
        <div className='mt-40 '>
            <div className='bg-gray-100 lg:mx-4 flex flex-col justify-center h-auto '>
                <div className='my-10 mx-1 lg:mx-28 lg:my-11'>
                    <div className='font-extrabold text-2xl'>Subscribe to newsletter</div>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 mt-2'>
                        <div className='w-full lg:w-11/12'><input type="text" placeholder='Enter your email' className='border  border-gray-400 w-full h-12 rounded-lg p-4 text-lg' /></div>
                        <div className=''><button className=' w-full h-9 lg:w-96 lg:h-12 border-none bg-orange-500 text-white text-xs font-semibold rounded-3xl hover:bg-white hover:text-orange-500 '>SUBSCRIBE</button></div>
                    </div>
                </div>
            </div>
            <div className='mt-20 mb-28 flex flex-col grid- grid-rows-3 gap-6 justify-center items-center text-gray-500 text-sm'>
                <div className='grid  grid-cols-4 gap-1'>
                    <div className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-2xl hover:text-white hover:bg-orange-500 cursor-pointer'>
                        <FaFacebookF className=''/>
                    </div>
                    <div className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-2xl hover:text-white hover:bg-orange-500 cursor-pointer'><BsTwitter/></div>
                    <div className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-2xl hover:text-white hover:bg-orange-500 cursor-pointer'><GrLinkedinOption/></div>
                    <div className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-2xl hover:text-white hover:bg-orange-500 cursor-pointer'><IoLogoYoutube/></div>
                </div>
                <div className='flex flex-row  items-center'>Copyright ©2023 All rights reserved | This template is made with<BsFillSuitHeartFill className='text-red-500 mx-2'/>by Colorlib</div>
                <div> <a>Terms & Conditions/ Privacy Policy</a></div>
            </div>
        </div>
    </div>
  )
}

export default Project1