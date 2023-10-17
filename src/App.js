// import API from './API/API';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Middlebars from './middlebar/Middlebars';
import Nav from './navgroup/Nav';
import Sidebar from './sidebar/Sidebar';
import Login1 from './Login1';
import { useEffect, useState } from 'react';
import axios from '../src/Allbaseurl';

function App() {
  const [Loginfncdata,setLoginfncdata]=useState(false)
  const [Logoutfncdata,setLogoutfncdata]=useState(false)
  const [newlogoutdata,setnewlogoutdata]= useState()
 
  const[loginstoragedata,setloginstoragedata] = useState()
  const[logoutstoragedata,setlogoutstoragedata] = useState()
  const[loginvalue,setloginvalue] = useState(localStorage.getItem('login'))
  const[logoutvalue,setlogoutvalue] = useState(localStorage.getItem('logout'))
  const[newState,setnewState] = useState(true)


  const loginfncdata=(data)=>{
        setloginvalue(data)
        setloginvalue(localStorage.getItem("login"))
        console.log(data,"param")
        

        localStorage.setItem('login',data)
        localStorage.removeItem('logout');
        window.location.reload()
        

        //  const data22=data
        //  console.log(data22,"data22")
        // return data22
        // setLoginfncdata(true)
        // new11fun(data)
        // window.data=data
        // setLogoutfncdata(false)
        // setloginstoragedata(data)

        // setloginvalue(localStorage.setItem('login',data));
        // setloginstoragedata(localStorage.getItem('login'));


        // setlogoutstoragedata(localStorage.getItem('logout'))


        // setloginvalue(localStorage.getItem('login'))
        // setlogoutvalue(localStorage.getItem('logout'))

}
        // console.log(loginstoragedata,"loginstoragedata")

        // useEffect(()=>{
          
        //     setlogoutvalue(localStorage.getItem('logout'))

        // },[])

  // var new11fun =(p)=>{
  //   console.log(p,"@@@@@@@@")
  //  return p
  // }

console.log(loginvalue,"loginvalue")

  
//   console.log(new11fun(),"login")
//   const newlogindata = loginfncdata(2)
// console.log(window.data,"logindata")
  
  // console.log(Loginfncdata,"Loginfncdata")
 
  const logoutfun=()=>{
   
    // console.log("logout",data1)
    // setLogoutfncdata(data1)
    // setLoginfncdata(true)
    // newapioutdata()
    // setlogoutstoragedata(data1)
    newapioutdata()

  
  }

  const newapioutdata =async()=>{
    const logoutapidata = await axios.post('/logout/postapi',{logout:"logout"})
    const logoutapidata11 = await logoutapidata.data
    setlogoutvalue(logoutapidata11)
    
    localStorage.setItem('logout',logoutapidata11)
      //  setlogoutstoragedata(localStorage.getItem('logout'))
    console.log(logoutapidata11,"logoutapidata")
    localStorage.removeItem('login');
    // console.log(Logoutvalue,"Logoutvalue")
    // console.log(Loginvalue,"Loginvalue")
    // setlogoutvalue(localStorage.getItem('logout'))
    // setloginvalue(localStorage.getItem('login'))




  }
  console.log(logoutstoragedata,"logoutstoragedata")


  useEffect(()=>{
    setloginvalue("loginsuccess")
  },[loginfncdata])
console.log(newlogoutdata,"newlogoutdata")


// const Logoutvalue = ;


console.log(loginvalue,"kush")


    
let kush =(k)=>{
    console.log("first@@@@@@@@@@",k)
    setnewState(k)  
  }
  const notificationfnc1 =(m)=>{
   console.log(m,"mmmmmmmmmmmmmmmmm")
  }

  return (
    <div>

    <BrowserRouter>

  {/* { logoutvalue ==="logout"? <Login1 loginfncdata={loginfncdata}/>:

loginvalue==="loginsuccess"?
    <>
     <Nav logoutfun={logoutfun}/>
    <div style={{display:"grid",gridTemplateColumns:"0.4fr 1fr 0.1fr"}}>
    
     <Sidebar/>
     <Middlebars/>
    </div>
    </> : logoutvalue==="logout"? <Login1 loginfncdata={loginfncdata}/>:<Login1 loginfncdata={loginfncdata}/>} */}
     {/* <API/> */}
     {console.log(loginvalue,"klklklklkl")}
      {logoutvalue ==="logout"? <Login1 loginfncdata={loginfncdata}/>:
      loginvalue==="loginsuccess"?<>
      <Nav logoutfun={logoutfun}
           kush={kush}
      />
     <div style={{display:"grid",gridTemplateColumns:"0.4fr 1fr 0.1fr"}}>
     
      <Sidebar
       newState={newState}
      />
      <Middlebars notificationfnc1={notificationfnc1}/>
     </div>
     </>:null}

    </BrowserRouter>
    
    </div>
  );
}

export default App;
