import React from 'react'
import Grid from '@mui/material/Grid';


function Checkoutitem({addcartdata}) {
    console.log(addcartdata,"########################")
  return (
    <div>
         {addcartdata.map((p)=>{
            return( <Grid  xs={12} sm={6} md={4} lg={4} xl={4} style={{backgroundColor:""}} >
              <div  style={{backgroundColor:"",marginBottom:"",border:""}}>
            <div style={{ width:"275px",height:"275px",display:"flex",justifyContent:"center", alignItems:"center",backgroundColor:"",marginBottom:"",padding:"50px"}}>
            <img width={150} height={150} src={p.image}/>

            </div>
           <div style={{marginLeft:"20px",marginBottom:"25px"}}>
           <p style={{color:"black",marginTop:"",marginLeft:""}}>{`${p.category}`}</p>

<p style={{color:"black",marginTop:"",marginLeft:""}}>{`price $ ${p.price}`}</p><br></br>
{/* <button onClick={()=>{additem(p)}}    style={{backgroundColor:"yellow",width:"100%",height:"50px",border:"none"}}>Add</button> */}

           </div>
            </div>
        </Grid>
            )
          })}
    </div>
  )
}

export default Checkoutitem