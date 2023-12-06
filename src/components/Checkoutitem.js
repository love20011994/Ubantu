import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import './component.css'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios';



function Checkoutitem({addcartdata,navdataprops}) {
const[nav ,setNav]=useState([])
// const[nav1,setnav1] =useState([])
   const navigate1 = useNavigate()

   const RAZORPAY_API_KEY="rzp_test_SQwn52IkHCvsn0"

  //  const funkus=()=>{
  //   navigate1("/love1")
  //  }
  useEffect(()=>{
      setNav(addcartdata)
  },[])
console.log(addcartdata?.length,"length")
   if(nav?.length===0){
   
    console.log("first")
        navigate1("/love1")

    // funkus()

   }
    let totalPrice=0;

    nav.forEach(element => {
              totalPrice+=element.price
    });


const luv12 =async(k,s)=>{

    const deleteitem = nav.filter((p,q)=>{
      return q!==s
    })
    setNav(deleteitem)
    // setnav1(nav.length)
   
}
useEffect(()=>{
  navdataprops(nav)

},[nav])

const billpayment=async(amount)=>{
  const orderdata= await axios.post('http://localhost:5000/api/products/checkout',{amount})

  const resdata = orderdata.data

console.log(resdata,"orederdata")
console.log(window)

const options = {
  key:RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
  amount: resdata?.order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "Acme Corp",
  description: "Test Transaction",
  image: "https://example.com/your_logo",
  order_id: resdata?.order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  callback_url: "http://localhost:5000/api/products/paymentVerification",
  prefill: {
      name: "luv kalsangrah",
      email: "love.kalsangrah@gmail.com",
      contact: "8349360419"
  },
  notes: {
      "address": "Razorpay Corporate Office"
  },
  theme: {
      "color": "#3399cc"
  }
};
const razor = new window.Razorpay(options);
  razor.open();

}

console.log(nav,"navvvvvvvvvvvvvvvvvvvvvv")

  return (
    <div style={{display:"grid",gridTemplateColumns:"2fr 2fr",backgroundColor:"#ffff"}} className='checkoutbill'>
      <div style={{backgroundColor:""}}>
         {nav.map((p,index)=>{
            return( 
            <Grid  xs={12} sm={6} md={4} lg={4} xl={4} style={{backgroundColor:""}} >
              <div  style={{backgroundColor:"",marginBottom:"",border:""}}>
            <div style={{ width:"275px",height:"275px",display:"flex",justifyContent:"center", alignItems:"center",backgroundColor:"",marginBottom:"",padding:"50px"}}>
            <img width={150} height={150} src={p.image}/>

            </div>
           <div style={{marginLeft:"20px",marginBottom:"25px"}}>
           <p style={{color:"black",marginTop:"",marginLeft:"125px"}}>{`${p.category}`}</p>

            <p style={{color:"black",marginTop:"",marginLeft:"125px",marginBottom:"50px"}}>{`price $ ${p.price}`}</p><br></br>
            <div style={{marginLeft:"100px"}}>
                    <button  style ={{backgroundColor:"yellow",height:"50px",width:"150px",border:"none",borderRadius:"5px"}}onClick={()=>{luv12(p,index)}}>removeItem</button>
                   </div>
           </div>
            </div>
                  
        </Grid>
            )
          })}
          </div>
      <div>  <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"800px",width:"400px",backgroundColor:"",position:"fixed"}}>
     <Box sx={{backgroundColor:"",padding:"3px",borderRadius:"15PX"}}>
     <Paper elevation={0} />
      <div style={{height:"250px",width:"250px",backgroundColor:"#f8f8f8f8",paddingLeft:"50px",paddingTop:"100px",borderRadius:"15PX",border:"1px solid",boxShadow:"1px 1px 10px lightgray,-1px -1px 10px lightgray"}}>
         <h4 style={{color:"black"}}>Total Item -  {nav.length}</h4><br/>

          <h4 style={{color:"black"}}> Total Price-{totalPrice.toFixed(2)} </h4><br/>
          <button style={{backgroundColor:"lightseagreen",height:"50px",width:"150px",border:"none",cursor:"pointer",borderRadius:"5px"}} onClick={()=>{billpayment(totalPrice)}}>Payment</button>

         </div>
       <Paper />
     </Box>
        
      </div>
      </div> 
      
    </div>
  )
}

export default Checkoutitem