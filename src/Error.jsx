import React from 'react'
import err from './assets/error.gif'

const Error = () => {
  return (
    <div className='flex justify-center items-center'>
    <img src={err} alt="Loading" className='w-16 h-16' />
</div>
  )
}

export default Error