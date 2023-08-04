import React from 'react'
// import ObjectForm from '../Form/Basicform'
// import Tabledata from '../components/Tabledata';
import {    BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import routes from "../data/sidebar.json"
import { routesdatas } from '../data/routesdata';


function Middlebars() {
  return (<div style={{backgroundColor:""}}>
{/* <Router> */}
      <Routes>
      
      {routesdatas.map((route, index) => (

        // console.log(route.element,"router")
       
        <Route
          // key={index}
          path= {route.path}
          element=  {route.element}
        />
       
     ))} 
            </Routes> 

         {/* </Router> */}
</div>
  )
}

export default Middlebars
