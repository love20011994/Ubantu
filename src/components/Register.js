import React from 'react'
import { useState } from 'react';
import "../Form/Form.css"
import axios from 'axios';
function Register() {
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
   console.log(Registerresponse.data.token,"Responserr")

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



      };

      
      
    
  return (
    <div style={{backgroundColor:"lightblue",display:"flex",justifyContent:"center",alignItems:"center",height:"500px",width:"400px",marginLeft:"230px",marginTop:"30px"}} >

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
      <button  className='button' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Register
