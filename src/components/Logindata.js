
import React, { useState } from 'react';
import "../Form/Form.css"
import axios from '../Allbaseurl';

// import axios from 'axios';

function Logindata({loginfncdata}) {
    const [email, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const[error,setError]= useState(false)

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
  return (
      <div >
      <form style={{display:"flex",flexDirection:"column",height:"200px"}} onSubmit={handleSubmit}>
      
    
        <input className='input-box'
        placeholder='Login'
          type="text"
          value={email}
          onChange={(e) => setLogin(e.target.value)}
        />
        {error&&<p style={{color:"red"}}>invailid data</p>}
        <br/>
      
      <br />
     
        <input className='input-box'
        placeholder='Password'
         type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          {error&&<p style={{color:"red"}}>invailid data</p>}
          <br />
      <button className='button' type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Logindata
