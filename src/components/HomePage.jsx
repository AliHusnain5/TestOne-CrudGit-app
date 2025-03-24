import React from 'react'
import { useState, useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const HomePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { state } = useLocation();

  const history = useNavigate();

  const nextPage = () => {
    return history("/nextPage");
  };
  function getUser() {
    axios.get("https://674aab3971933a4e8853229d.mockapi.io/userDetail").then((responce) => {
      setData(responce?.data);
      console.log("===", data);
      }).catch((error) => {setError(true);
      }).finally((loading) => {setLoading(false);
      });
  }
  useEffect(() => {
    getUser();
  }, []);
  function updateUser(id) {
    const { item } = state;
    axios
      .put(`https://674aab3971933a4e8853229d.mockapi.io/userDetail/${id}`, {
        firstName,
        lastName,
        email,
        phone,
        address,
        password,
      })
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        setError(true);
      })
      .finally((loading) => {
        setLoading(false);
      });
  }
  return (
    <>
     <div>
      <h1>Raoof Ali</h1>
          <input
            style={{ alignContent: "center", border: "2px black solid" }}
            type="text"
            placeholder="Search"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
        </div>
        <div>
          <button type="button" onClick={nextPage} class="btn btn-dark">
            Create New User
          </button>
        </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">phone</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2"></td>
      <td></td>
    </tr>
  </tbody>
  {data.map((item,index) =>{
    return(
      <>
      <tr>
       <th scope="row">{index + 1}</th>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.email}</td>
                  <td>{item?.password}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.address}</td>
                  <div>
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "20px",
                        }}
                        src="https://e7.pngegg.com/pngimages/461/1024/png-clipart-computer-icons-editing-edit-icon-cdr-angle.png"
                        alt=""
                        onClick={() =>
                          history("/nextPage", { state: { item } })
                        }
                      />

                    
                      
                    </div>
      </tr>
      </>
      
    )
  })}
</table>
        
    </>
  )
}

export default HomePage
