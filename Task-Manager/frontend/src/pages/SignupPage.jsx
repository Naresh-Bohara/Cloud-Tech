import React from 'react'

const SignupPage = () => {
  return (
    <>
    <div className='bg-gray-100 h-[98vh] rounded-sm flex items-center justify-center'>
        <div className='p-4 w-2/6 rounded bg-gray-200'>
            <div className='text-center font-semibold text-2xl'>SignUp</div>
            <input type="text" name='username' placeholder='usename' className='bg-gray-300 px-3 py-2 rounded my-3' />
        </div>
    </div>
    </>
  )
}

export default SignupPage