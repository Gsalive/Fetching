import React from "react";
import Axios from 'axios';
import "./Table.css"; 

import { useEffect,useState } from "react";

function Component1(){
    const [data,setData]=useState([]);
    const url ="https://dummyjson.com/users";

    useEffect(()=>{
        Axios.get(url)
        .then((res)=>{
            if(res.status==200){
                setData(res.data.users)
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    },[]);
    console.log(data.users)
    const renderTable=()=>{
        return data.map((user)=>{
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td style={{ width: "150px" }}>{user.phone}</td>
                    <td>{user.username}</td>
                    <td style={{ width: "150px" }}>{user.birthDate}</td>
                    <td>{user.image}</td>
                    <td>{user.height}</td>
                    <td>{user.weight}</td>
                    <td>{user.address.city}</td>
                    <td>{(user.address.coordinates.lat+","+user.address.coordinates.lng)}</td>
                    <td>{user.bank.cardNumber}</td> 
                    <td>{user.company.address.city}</td> 
                </tr>
            )
        })
      
    }
    return(
        <div>
            <h1 className="heading text-center white-text">User Data Table</h1>
            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th style={{ width: "150px" }}>Phone</th>
                        <th>username</th>
                        <th style={{ width: "150px" }}>BirthDate</th>
                        <th>Image</th>
                        <th>Hieght</th>
                        <th>Weight</th>
                        <th>City</th>
                        <th>Address Coordinated</th>
                        <th>Bank(Card Number)</th>
                        <th>Company address</th>
                    </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
            </table>
        </div>
    )
}
export default Component1;