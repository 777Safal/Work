import React from 'react'
import { Formik,Field,ErrorMessage,Form } from 'formik'
import { Schema } from 'yup'

function Contact() {
    const topics=[
        {h1:'contact us',
         p:'' 
        }
    ]
    const data=[
        {label:'First Name',
        identiy:'firstName',
        type:'text' ,},
        {label:'Last Name',
        identiy:'lastName',
        type:'text' ,},
        {label:'Email',
        identiy:'email',
        type:'email' ,},
        {label:'Subject',
        identiy:'subject',
        type:'text' ,},
        {label:'Message',
        identiy:'message',
        type:'text' ,
        placeholder:'Write your message or question here...'},
    ]
  return (
    <div id='contact' className='flex justify-center mt-20'>
        <div className='w-9/12 grid grid-cols-2'>
            <div className='p-10 bg-trainers'>
                <Formik
                initialValues={{
                    firstName:"" ,
                    lastName:"" ,
                    email:"" ,
                    subject:"" ,
                    message:"" ,
                }} 
                // validationSchema={Schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}>
                    {({handlesubmit})=>{
                        return <Form onSubmit={handlesubmit}>
                            <div className='mb-10'><h1 className='text-zinc-500 text-xl font-medium'>Contact Form</h1></div>
                            <div className='bg-trainers flex flex-wrap'>
                                {data.map((Val,i)=>{
                                    if ((Val.identiy==='message')||(Val.identiy==='subject')||(Val.identiy==='email')){
                                        if(Val.identiy==='message'){
                                            return <div key={i} className='w-full '>
                                                <label className='text-sm text-zinc-500'>{Val.label}</label>
                                                <textarea type={Val.type} name={Val.identiy} placeholder={Val.placeholder}
                                                className='w-full mt-2 text-sm h-40 p-2 outline-none rounded-md'/>
                                            </div>
                                        }
                                        else {
                                            return <div key={i} className='w-full my-3 flex flex-col'>
                                                <label className='text-sm text-zinc-500'>{Val.label}</label>
                                                <Field type={Val.type} name={Val.identiy}
                                                className='py-1 px-2 mt-2 outline-none rounded-sm'/>
                                            </div>
                                        }
                                    }
                                    else{
                                        return <div key={i} className='w-2/4'>
                                        <label className='text-sm text-zinc-500'>{Val.label}</label>
                                        <Field type={Val.type} name={Val.identiy}
                                        className='py-1 mt-2 px-1 outline-none rounded-sm '/>
                                    </div>
                                    }
                                })}
                            </div>
                            <div className='mt-2'>
                                <button type='submit'
                                className=' text-sm font-medium bg-zinc-700 py-3 px-6 rounded-3xl text-zinc-100'>Send Message</button>
                            </div>
                        </Form>
                    }}

                </Formik>

            </div>
            <div className='bg-contact'>
            <div className='mt-20 mb-10'>
                <div className='w-20 h-20 bg-cover bg-no-repeat m-auto
                bg-[url(https://img.freepik.com/premium-vector/black-animal-paw-print-isolated-white-background-vector-illustration_255502-552.jpg?w=740)]'></div>
                <h1 className='m-auto  text-center font-medium text-3xl uppercase'>{topics[0].h1}</h1>
            </div> 
            <div className='flex justify-center'>
                <address className=''>
                    <div>
                        <h1 >Address:</h1>
                        <h2>Melbourne St,South Birbane</h2>
                        <h2>4101 Austraila</h2>
                    </div>
                    <div>
                        <h1>Phone:</h1>
                        <h2>+(000) 123 4567 89</h2>
                    </div>
                    <div>
                        <h1>Email:</h1>
                        <h2>info@yourdomain.com</h2>
                    </div>
                </address>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact