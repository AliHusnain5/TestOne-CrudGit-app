import React, { useState } from 'react'

const Bilal = () => {

    const [data,setData]=useState([])



  return (
    <>
<div className="navbar_container">
    <div className="home_logo">
        Crud App
    </div>
    <div className="home_saerch">
<input type="search" />
    </div>

    <div className="home_adduser">
<button type="button" className='btn btn-primary'>Click me to add</button>
    </div>
</div>

<div className="container_table">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>

  </tbody>
</table>
</div>


    </>
  )
}

export default Bilal
