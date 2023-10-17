import React from 'react'
// import ObjectForm from '../Form/Basicform'
// import Tabledata from '../components/Tabledata';
import {    BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import routes from "../data/sidebar.json"
import { routesdatas } from '../data/routesdata';
import PaymentGateway from '../components/PaymentGateway';


function Middlebars({notificationfnc1}) {
  return (<div style={{backgroundColor:""}}>
{/* <Router> */}
      <Routes>
      
      {routesdatas.map((route, index) => {

        // console.log(route.element,"router")
       if(route.title==="paypal"){
       return <Route path='/love1' element={<PaymentGateway notificationfnc1={notificationfnc1}/>}/>

       }
       return <Route
          // key={index}
          path= {route.path}
          element=  {route.element}
          
        />
       
      })} 

            </Routes> 

         {/* </Router> */}
</div>
  )
}

export default Middlebars
