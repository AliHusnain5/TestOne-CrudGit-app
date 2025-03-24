import React from 'react'
import Data from './Data';

const DataAdd = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', backgroundColor: "aqua", height: "60px" }}>
        <h1>CROUD APP</h1>
        <input type="text" placeholder="Search" style={{ height: "50px", width: "300px", borderRadius: "20px" }} />
        <button type="button" class="btn btn-primary" onClick={Data} style={{ backgroundColor: "red", width: "200px" }}>Create New User</button>

      </div>

      <Data/>
    </div>
  )
}

export default DataAdd;
