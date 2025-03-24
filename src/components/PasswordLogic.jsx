import React, { useState } from 'react'

const PasswordLogic = () => {
    const [show,setShow]=useState(true);
  return (
    <div>
      <h1>Hide Show Logic Page</h1>
      {/* <input type="password" placeholder='password' onChange={(e)=>setShow(e.target.value)}  /> */}
      <input type={show ? "password":"text"} />
      <button type='button' onClick={()=>setShow(!show)}>{show ? "Show":"Hide"}</button>
      </div>
  )
}

export default PasswordLogic
