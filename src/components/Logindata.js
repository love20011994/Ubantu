
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
    <div style={{height:"100vh",width:"100%",backgroundColor:"lightblue"}}>
      <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:""}}>
      <form style={{display:"flex",flexDirection:"column",height:"80%",width:"85%",alignItems:"center",justifyContent:"center"}} onSubmit={handleSubmit}>
      
    
        <input style={{width:"52%"}} className='input-box'
        placeholder='Login'
          type="text"
          value={email}
          onChange={(e) => setLogin(e.target.value)}
        />
        {error&&<p style={{color:"red"}}>invailid data</p>}
        <br/>
      
      <br />
     
        <input style={{width:"52%"}} className='input-box'
        placeholder='Password'
         type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          {error&&<p style={{color:"red"}}>invailid data</p>}
          <br />
      <button className="loginbutton" placeholder='button' style={{width:"36%",height:"2rem",backgroundColor:"",border:"none",outline:"none",cursor:"pointer",marginLeft:"20px"}} type="submit"><span style={{fontSize:"0.8rem",padding:"3px"}}>submit</span></button><br></br>
      <br></br><br></br><br></br>
      <span style={{color:"blue",cursor:"pointer"}} onClick={newresisterdata}>IF not login Resister here</span>

    </form>
    
    </div>
    
    </div>
  )
}

export default Logindata
