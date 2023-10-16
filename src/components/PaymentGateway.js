import React, { useEffect, useState } from 'react'
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios  from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function PaymentGateway() {
  const [productdata,setproductdata] = useState([])
  const [addcart,setaddcart] = useState([])
  const [newItem, setNewItem] = useState('');

 const data = async()=>{
   const data1 = await axios.get("https://fakestoreapi.com/products")
   console.log("love")

   const data2 = await data1.data
   console.log(data2,"@@@@@@@@@@@@@")
   setproductdata(data2,)
 }
 console.log(productdata.title,"hweello")
  useEffect(()=>{
    data()
  },[])
const additem =(k)=>{
const itemobg ={
  id:k.id,
  price:k.price,
  image:k.image
}
console.log(itemobg,"ite,,,,")
setaddcart([...addcart,itemobg])

}
console.log(addcart,"addcart")
  return (
    <div style={{backgroundColor:"",marginTop:"8rem",marginRight:"2rem"}}>
      <div  style={{position:"relative"}}>
      <Carousel 
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      >
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/07/23/23/02/lavenders-1537694_1280.jpg" height={550}/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_1280.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <div style={{height:"150px",width:"100%",backgroundColor:"#fff", position:"absolute",bottom:"0.437rem",opacity:0.5}}></div>
            </div>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"550px",marginLeft:"40px",position:"relative",bottom:"100px"}}>
      <Grid container columnSpacing={4} rowSpacing={4} >
        
          
          {productdata.map((p)=>{
            return( <Grid  xs={12} sm={6} md={4} lg={4} xl={4} style={{backgroundColor:""}} >
              <div style={{backgroundColor:"",marginBottom:"",border:""}}>
            <div style={{ width:"275px",height:"275px",display:"flex",justifyContent:"center", alignItems:"center",backgroundColor:"",marginBottom:"",padding:"50px"}}>
            <img width={150} height={150} src={p.image}/>

            </div>
           <div style={{marginLeft:"20px",marginBottom:"25px"}}>
           <p style={{color:"black",marginTop:"",marginLeft:""}}>{`${p.category}`}</p>

<p style={{color:"black",marginTop:"",marginLeft:""}}>{`price $ ${p.price}`}</p><br></br>
<button onClick={()=>{additem(p)}}    style={{backgroundColor:"yellow",width:"100%",height:"50px",border:"none"}}>Add</button>

           </div>
            </div>
        </Grid>
            )
          })}
        

       
        </Grid>
    </Box>
    
    </div>
  )
}

export default PaymentGateway