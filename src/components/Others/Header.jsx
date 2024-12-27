import React from 'react'

const Header = (props) => {
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','');
    // window.location.reload()
    props.changedUser('')
  }

  return (
    <>
      <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-semibold'>Hello <br/><span className='text-3xl font-semibold'>admin 👋🏻</span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-7 py-2 md:text-lg font-medium text-white rounded'>Log Out</button>
      </div>
    </>
  )
}

export default Header
