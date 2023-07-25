import React,{useState,useEffect} from 'react'
import {GrLinkNext} from 'react-icons/gr'
import {GrLinkPrevious} from 'react-icons/gr'

function Happy() {
    const data=[
        {h1:'Ken Davis',
         p:'A sweet little ocmponent of the horizon of a box in the love of mind and phrase to the in the army of a local of russina to the indian like a box of a drive.',
         name:'https://preview.colorlib.com/theme/dogger/images/person_2.jpg',
        },
        {h1:'Mellisa Griffin',
         p:'A small river named Duden flows by their place and supplies it with the necessary regeliablia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
         name:'https://preview.colorlib.com/theme/dogger/images/person_1.jpg',
        },
        {h1:'Robert Steward',
         p:'Far far away, behind the word mounatins, far from the countries Vokalia and Consonantia, there live the blind texts. Seperated they live in Bookmarksgroove right at the coast of the Semantics, a large language ocean',
         name:'https://preview.colorlib.com/theme/dogger/images/person_3.jpg',
        },
        {h1:'Ricky Fisher',
         p:'The Big Oxmox adivesed her not to do so, because there were thousand of bad commas, wild Question Marks and devious Semikoli, but the Little Blind text didnot how are you i am fine. Have a great day and take care and see you soon tata.',
         name:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        },
    ]
    // const [slideShow,setSlideShow]=useState(0)
    // const next=()=>{
    //     if(slideShow<data.length-1){
    //         setSlideShow(slideShow+1)
    //     }else {
    //         setSlideShow(0)
    //     }
    // }
    // const previous=()=>{
    //     if(slideShow>0){
    //         setSlideShow(slideShow-1)
    //     }else {
    //         setSlideShow(data.length-1)
    //     }
    // }


    

    // const [startIndex, setStartIndex] = useState(0);
    // const visibleData = data.slice(startIndex, startIndex + 3);
  
    // const next = () => {
    //   if (startIndex + 3 < data.length) {
    //     setStartIndex(startIndex + 1);
    //   } else {
    //     setStartIndex(0);
    //   }
    // };
  
    // const previous = () => {
    //   if (startIndex > 0) {
    //     setStartIndex(startIndex - 1);
    //   } else {
    //     setStartIndex(data.length - 3);
    //   }
    // };


//     const [startIndex, setStartIndex] = useState(0);

//   const next = () => {
//     if (startIndex + 1 < data.length) {
//       setStartIndex(startIndex + 1);
//     } else {
//       setStartIndex(0);
//     }
//   };

//   const previous = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     } else {
//       setStartIndex(data.length - 1);
//     }
//   };

const [slideShow, setSlideShow] = useState(0);
const [visibleData, setVisibleData] = useState([]);

useEffect(() => {
  setVisibleData(getVisibleData(slideShow));
}, [slideShow]);

const getVisibleData = (startIndex) => {
  const visibleData = [];
  for (let i = 0; i < 3; i++) {
    const dataIndex = (startIndex + i) % data.length;
    visibleData.push(data[dataIndex]);
  }
  return visibleData;
};

const next = () => {
    if (slideShow < data.length - 1) {
      setSlideShow(slideShow + 1);
    } else {
      setSlideShow(0);
    }
  };

  const previous = () => {
    if (slideShow > 0) {
      setSlideShow(slideShow - 1);
    } else {
      setSlideShow(data.length - 1);
    }
  };

  return (
    <div className='bg-topimg'>
        <div>
            <div className='w-20 h-20 bg-cover bg-contact bg-no-repeat m-auto
                bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
            <h1 className='m-auto  text-center font-medium text-3xl uppercase'>Happy customers</h1>
        </div> 
        <div className='w-9/12 m-auto bg-red-500 flex flex-row'>

        {visibleData.map((val, i) => {
          return (
            <div key={i} className='w-[400px] bg-blue-300 flex flex-col'>
              <div>
                <h1>{val.h1}</h1>
                <p>{val.p}</p>
              </div>
              <div
                className='w-20 h-20 rounded-full border-8 border-trainers'
                style={{
                  backgroundImage: `url(${val.name})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          );
        })}

        {/* {data.map((val, i) => {
          const isVisible = i >= startIndex && i < startIndex + 3;
          return (
            <div
              key={i}
              className={`w-[400px] bg-blue-300 flex flex-col ${isVisible ? 'block' : 'hidden'}`}
            >
              <div>
                <h1>{val.h1}</h1>
                <p>{val.p}</p>
              </div>
              <div
                className={`w-20 h-20 rounded-full border-8 border-trainers`}
                style={{
                  backgroundImage: `url(${val.name})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          );
        })} */}

        {/* {visibleData.map((val, i) => {
          return (
            <div key={i} className={`w-1/3 bg-blue-300 flex flex-col ${i === 1 ? 'm-auto' : ''}`}>
              <div>
                <h1>{val.h1}</h1>
                <p>{val.p}</p>
              </div>
              <div
                className={`w-20 h-20 rounded-full border-8 border-trainers`}
                style={{
                  backgroundImage: `url(${val.name})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          );
        })} */}

            {/* {data.map((val,i)=>{
                return <div key={i} className={`${i===slideShow?'block':'hidden'} w-[400px] bg-blue-300 flex flex-col`}>
                    <div>
                        <h1>{val.h1}</h1>
                        <p>{val.p}</p>
                    </div>
                    <div className={`w-20 h-20 rounded-full border-8 border-trainers`}
                    style={{
                        backgroundImage: `url(${val.name})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize:'cover',
                    }}>
                    </div>
                </div>
            })} */}
       
        </div>
        <div className='w-20 flex justify-between bg-blue-200 m-auto'>
            <button onClick={()=>next()} ><GrLinkPrevious className='text-2xl'/></button>
            <button onClick={()=>previous()}><GrLinkNext className='text-2xl'/></button>
        </div>
    </div>
  )
}

export default Happy