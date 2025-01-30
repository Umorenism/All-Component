import React from 'react'

const Model = ({onClose ,title,des,btnText}) => {
  return (
    <div className='fixed inset-0 bg-black/50 bg-opacity-30 backdrop-blur-sm flex justify-center '>
      <div className='mt-44 flex flex-col gap-5 text-white'>
        <button className='text-xl place-self-end rounded-full h-8 w-8 bg-slate-500 flex justify-center items-center' onClick={onClose}>x</button>
        <div className='bg-indigo-700 rounded-md px-20 py-10 flex-col gap-5 items-center mx-4 '>
            <h1 className='text-center text-4xl mb-4'>{title}</h1>
            <p className='mb-4'>{des}</p>
            <form action="
            ">
                <input type="email"
                className='w-full rounded-md px-4 py-3 text-black bg-white' placeholder='send us a  message' />
                <button className='flex w-full mt-5 bg-black py-2 rounded-md text-center justify-center gap-2'>{btnText}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Model
