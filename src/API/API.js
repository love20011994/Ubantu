import React, { useEffect, useState } from 'react'

function API() {


const [state,setState] = useState([])

const data =async()=>{
const data1 = await fetch("http://localhost:5000/api/products")

const data2 = await data1.json()
setState(data2)
}
useEffect(()=>{
     data()
},[])

  return (
    <div >
      {state?.apidata?.map((p)=>{
        return(<div style={{backgroundColor:"red"}}>
            {p.name}
        </div>)
      })}


    </div>
  )
}

export default API
