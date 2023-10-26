import React from 'react'
import { useState } from 'react';
import "../Form/Form.css"
import axios from 'axios';
import Login1 from '../Login1';

function Register({luv}) {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        gender: '',
        age: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
    
       console.log(formData);
      const Registerresponse=  await axios.post("http://localhost:5000/api/products/register/postapi",{formData})
      if(Registerresponse.data.status=== "success"){
        alert("registration sucess")
      }
      else{
        alert("Registration fail")
      }
      luv("kush")
   console.log(Registerresponse.data.token,"Responserr")
  console.log(Registerresponse.data.status,"@####@@@@@@@@@@@##########@@@@@@@@")
   localStorage.setItem('token',Registerresponse.data.token)

  
   
        // Reset form
        // setFormData({
        //   name: '',
        //   lastName: '',
        //   email: '',
        //   gender: '',
        //   age: '',
        //   // phoneNumber: '',
        //   password: '',
        //   confirmPassword: ''
        // });

        // if(Registerresponse.data.status===success){
        //   alert("registration sucess")
        // }

      };

      
     
  return (
    <div style={{backgroundColor:"lightblue",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%",}} >
 {/* <div>
     <button onClick={()=>luv()}>Login page</button>

     </div> */}
<form style={{display:"flex",flexDirection:"column",alignItems:"stretch"}} onSubmit={handleSubmit}>
      <input className='input-box'
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      /><br/>
      <input className='input-box'
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      /><br/>
      <input className='input-box'
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      /><br/>
      <input className='input-box'
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      /><br/>
      <input className='input-box'
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      /><br/>
      <input className='input-box'
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      /><br/>
      <input className='input-box'
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      /><br/>
      <input className='input-box'
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      /><br/>
      <button  className='button' type="submit">Submit</button><br></br>
    
    </form>
    </div>
  )
}

export default Register
