import React from 'react'

function Header() {
  return (
      <>
       <h1 onClick={()=> window.scroll(0,0) }  className='heading'>Moviestream2.0 🍿</h1>
      </>
  )
}

export default Header;