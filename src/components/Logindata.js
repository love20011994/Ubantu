
import React, { useState } from 'react';
import "../Form/Form.css"
import axios from '../Allbaseurl';

// import axios from 'axios';

function Logindata({loginfncdata,loginregisterdata}) {
    const [email, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const[error,setError]= useState(false)
    // const[Resisterdata,setResisterdata] = useState(true)


    const handleSubmit = async(e) => {
      e.preventDefault();
  
      const userObject = {
        email,  
        password,
      };


      const Loginapidata = await axios.post("/login/postapi",userObject)
      // console.log( Loginapidata.data,"hello luv");
         if(Loginapidata.data=="loginsuccess"){
            setError(false)
          alert("login success")
         loginfncdata(Loginapidata.data)
         }
         else{
            setError(true)
         }
    }
    const newresisterdata =()=>{
      // setResisterdata(false)
      loginregisterdata(false)
    }
    
  return (
    <div style={{height:"100%",width:"100%",backgroundColor:"green"}}>
      <div style={{height:"70%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:""}}>
      <form style={{display:"flex",flexDirection:"column",height:"100%",width:"50%",alignItems:"center",justifyContent:"center"}} onSubmit={handleSubmit}>
      
    
        <input style={{width:"100%"}} className='input-box'
        placeholder='Login'
          type="text"
          value={email}
          onChange={(e) => setLogin(e.target.value)}
        />
        {error&&<p style={{color:"red"}}>invailid data</p>}
        <br/>
      
      <br />
     
        <input style={{width:"100%"}} className='input-box'
        placeholder='Password'
         type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          {error&&<p style={{color:"red"}}>invailid data</p>}
          <br />
      <button style={{width:"75%",height:"2rem",backgroundColor:"blue"}} type="submit"><span style={{fontSize:"1rem"}}>Submit</span></button>
      
    </form>
    
    </div>
    <div style={{marginLeft:"25%",backgroundColor:""}}>
    <p style={{color:"blue"}}>IF not login Resister here</p>
      <button style={{}} onClick={newresisterdata}>Register</button>
    </div>
    </div>
  )
}

export default Logindata
