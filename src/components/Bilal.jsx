import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Bilal = () => {


    const [data, setData] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);



// navigation logic 
const history=useNavigate();
const navi=()=>{
    return(
        history('/hideshow')
    )
}
    // get data api 
    function getuserdata() {
        axios.get('https://6778c81e482f42b62e8f8e48.mockapi.io/CrudApp').then((responce) => {
            setData(responce?.data)
        }).catch((error) => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }


    useEffect(() => {
        getuserdata()
    })

    // delete data api
    function deleteuserdata(id) {
        axios.delete('https://6778c81e482f42b62e8f8e48.mockapi.io/CrudApp' + `/${id}`).then((responce) => {
            let tempdata = responce.filter((item) => item?.id !== id)
            console.log(tempdata)
        }).catch((error) => {
            setError(true)
        }).finally((loading) => {
            setLoading(false)
        })
    }


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
                    <button type="button" className='btn btn-primary' onClick={navi}>Hide Show Logic Page</button>
                </div>
            </div>

            <div className="container_table">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Modifay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{index}</th>
                                            <td>{item.FirstName}</td>
                                            <td>{item.LastName}</td>
                                            <td>{item.Address}</td>
                                            <td>{item.EmailAddress}</td>
                                            <td>{item.Password}</td>
                                            <td>
                                                <div>
                                                    <MdOutlineSystemUpdateAlt style={{ height: "25px", width: "25px", marginRight: "20px" }} />
                                                    <MdDeleteForever style={{ height: "25px", width: "25px" }} onClick={() => deleteuserdata(item?.id)} />
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Bilal
