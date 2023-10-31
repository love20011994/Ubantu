import Sidebaritem from "./Sidebaritem"
import items from "../data/sidebar.json"
// import { useState} from "react"


export default function Sidebar({newState}){


    return (
        <div style={{width:"100%",height:"91vh"}}>

         <div className={`sidebar ${newState ? "open" : "closed"}`} >
          { items.map((item, index) => <Sidebaritem key={index} item={item} />) }
        </div>
        </div>
        
    )
}