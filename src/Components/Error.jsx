import React from 'react'

const Error = ({children}) => {
  return (
    <div className='mb-3 text-center bg-red-100 border-2 border-red-400 py-2 text-red-700'>
        <p>{children}</p>
    </div>
  )
}

export default Error