import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Ali= () => {
    
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); 
  const {state}=useLocation();

  

  const addUser = (e) => {
    e.preventDefault();
    setLoading(true); 
    axios.post("https://67762d1012a55a9a7d0ac351.mockapi.io/User", {
      firstName, lastName, age, address, email, password, phone
    }).then((response) => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      setPhone("  "); 
      setAddress("");
      setPassword("");
      console.log(response);
    }).catch((error) => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };
  return (
    <div>
    <h1>Add User Details</h1>
    <form onSubmit={addUser} class="yes">
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          className="form-control"
          id="firstName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          className="form-control"
          id="lastName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          className="form-control"
          id="age"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          className="form-control"
          id="address"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="form-control"
          id="phone"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-control"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {/* <button  onClick={updateUser}>Update User</button> */}
    </form>
    {error && <p className="text-danger">There was an error, please try again!</p>}
  </div>
);
};

export default Ali




