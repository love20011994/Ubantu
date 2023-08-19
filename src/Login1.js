import React from 'react'
import"../src/Login.css"
import Logindata from './components/Logindata'
function Login1({loginfncdata}) {
const url1 ="https://cdn.pixabay.com/photo/2018/02/10/19/19/goal-3144351_1280.jpg"
  return (
    <div className='container'>
    <div style={{backgroundImage:`url(${url1})`,height:"100vh"}}> </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"}}><Logindata loginfncdata={loginfncdata}/></div>
    </div>
  )
}

export default Login1
