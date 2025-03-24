
import React, { useState } from "react";


function AddUser() {
  const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
  return (
    <div style={{textAlign:"center"}}>
      <h1>Welcome To User Page</h1>
      <hr/>
      <form>
    <div class="mb-3" style={{fontWeight:"bold"}}>
      <label for="1" class="form-label">FirstName:</label>
      <input type="text" id="1" class="form-control" placeholder="Enter the Name" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
      
      <label for="2" class="form-label">LastName:</label>
      <input type="text" id="2" class="form-control" placeholder="Enter the LastName" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>

      <label for="3" class="form-label">Email</label>
      <input type="email" id="3" class="form-control" placeholder="Enter the Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>

      <label for="4" class="form-label">Password:</label>
      <input type="password" id="4" class="form-control" placeholder="Enter the password" onChange={(e)=>setPassword(e.target.value)} value={password}/>

      <label for="5" class="form-label">Phone No:</label>
      <input type="number" id="5" class="form-control" placeholder="Enter the Phone No " onChange={(e)=>setPhone(e.target.value)} value={phone}/>

       <label for="6" class="form-label">Address:</label>
      <input type="text" id="6" class="form-control" placeholder="Enter the address " onChange={(e)=>setAddress(e.target.value)} value={address}/>
    </div>
   
   
    

    <button type="submit" class="btn btn-primary" >Submit</button>
    {/* <button type='button' onClick={updateUser}>UpdateData</button> */}
   </form>
  </div>
    

  )
}

export default AddUser
