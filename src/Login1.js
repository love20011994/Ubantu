import React, { useState } from 'react'
import"../src/Login.css"
import Logindata from './components/Logindata'
import Register from './components/Register'

function Login1({loginfncdata}) {
  const [statedata,setstatedata] = useState(true)

const url1 ="https://cdn.pixabay.com/photo/2018/02/10/19/19/goal-3144351_1280.jpg"


// console.log(Resisterdata,"lllllllllllllllllllllllllllll@@@@")

// const luv =()=>{
//   setstatedata(false)
// }
const loginregisterdata= (m)=>{
  setstatedata(m)
  console.log(m,"mmmm")
}
console.log(statedata,"statedata")
  return (
    <div  className='container'>
    {/* <div className='url1' style={{backgroundImage:`url(${url1})`,height:"100vh",width:"",backgroundColor:"red"}}> </div> */}
    <div style={{height:"100vh",backgroundColor:"red"}}>
    <img src={url1} height="100%" width="100%"/>

    </div>
    {  statedata? <div className='' style={{width:"100%",height:"100%"}}><Logindata loginfncdata={loginfncdata}
    loginregisterdata={loginregisterdata}
    />
    {/* <div>
      
    
    </div> */}

    </div>:

<div className='' style={{width:"100%",height:"100%"}}>
  <Register />
  </div>


}
        
      </div>
    
  )
}

export default Login1
