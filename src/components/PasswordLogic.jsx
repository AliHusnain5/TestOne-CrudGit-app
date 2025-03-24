import React, { useState } from 'react'

const PasswordLogic = () => {
    const [show,setShow]=useState(true);
  return (
    <div>
      <h1>Hide Show Logic Page</h1>
      {/* <input type="password" placeholder='password' onChange={(e)=>setShow(e.target.value)}  /> */}
      <input type={show ? "text":"password"} />
      <button type='button' onClick={()=>setShow(!show)}>{show ? "hide":"show"}</button>
      </div>
  )
}

export default PasswordLogic
