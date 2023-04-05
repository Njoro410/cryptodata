import React from 'react'
import load from './assets/loading.gif'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <img src={load} alt="Loading" className='w-16 h-16' />
    </div>
  )
}

export default Loading