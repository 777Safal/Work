import React,{useState,useEffect} from 'react'


function Navbar() {
    const [showScroll,setShowScroll]=useState(false)
    useEffect(() => {
      window.addEventListener('scroll',actioning)
    
      return () => {
        window.removeEventListener('scroll',actioning)
      }
    }, [])
    
    const actioning=()=>{
        if (window.scrollY > 100){
            setShowScroll(true);
            // alert('akak');
        }
        else {
            setShowScroll(false);
        }
    }
    
    const listingItems=[
      {h1:'Home'},
      {h1:'About'},
      {h1:'Trainers'},
      {h1:'Services'},
      {h1:'Contact'},
    ]
    
    const href=[
      '#',
      '#about',
      '#trainers',
      '#services',
      '#contact',
    ]
  return (
    <div className={`${showScroll ? 'fixed top-0 bg-white '  :' absolute top-0 left-0 right-0 w-screen'}w-screen bg-transparent flex justify-center`}>
        <nav className='w-9/12 h-16 flex  justify-between items-center'>
            <div>
                <h1 className='text-3xl font-normal'>Dogger</h1>
            </div>
            <div>
                <ul className='text-zinc-600 grid grid-cols-5 gap-8'>
                  {listingItems.map((val,i)=>{
                    return <li key={i}>
                      <a href={href[i]} className='list-none hover:text-black'>
                        {val.h1}
                      </a>
                    </li>
                  })} 
                </ul>
                
                
                
                
                {/* <li className=''></li>
                <li className='list-none hover:text-black'></li>
                <li className='list-none hover:text-black'></li>
                <li className='list-none hover:text-black'></li>
                <li className='list-none hover:text-black'></li> */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar