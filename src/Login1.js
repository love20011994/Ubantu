import React, { useState } from 'react'
import"../src/Login.css"
import Logindata from './components/Logindata'
import Register from './components/Register'

function Login1({loginfncdata}) {
const url1 ="https://cdn.pixabay.com/photo/2018/02/10/19/19/goal-3144351_1280.jpg"
const[Resisterdata,setResisterdata] = useState(true)


const newresisterdata =()=>{
  setResisterdata(false)
}
console.log(Resisterdata,"lllllllllllllllllllllllllllll@@@@")
  return (
    <div className='container'>
    <div style={{backgroundImage:`url(${url1})`,height:"100vh"}}> </div>
    {  Resisterdata? <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"}}><Logindata loginfncdata={loginfncdata}/>
    
    <p style={{color:"blue",marginTop:"280px",position:"relative",right:"180px"}}>IF not login Resister here</p>
      <button style={{color:"blue",marginTop:"380px",position:"relative",right:"300px"}} onClick={newresisterdata}>Register</button>

    </div>:
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"}}><Register/></div>}
        
      </div>
    
  )
}

export default Login1
