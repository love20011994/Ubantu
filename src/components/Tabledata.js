import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import axios from '../Allbaseurl';


function Tabledata() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [open, setOpen] = React.useState(false);
      const[edit,setEdit]=useState({})
      const [state,setState] = useState([])
      const [formeditValues, seteditValues] = useState({
        name: '',
        price: '',
        featured: false,
        rating:'',
        createdAt:Date.now(),
        company:'',
        _id:""
      });
       const[updateid,setUpdateid]=useState()
       const[newstate,setnewwState] = useState(false)
      // const[editfetchbyid,seteditfetchbyid]=useState({
      //   name: '',
      //   price: '',
      //   featured: false,
      //   rating:'',
      //   createdAt:Date.now(),
      //   company:'',
      // })
          console.log(newstate,"klklkl")
      const[neweditvalues,setneweditvalues]=useState()

      const handleeditChange = (e) => {
        const { name, value } = e.target;
        seteditValues({ ...formeditValues, [name]: value });
        
      };
    
      const handleeditSubmit = async(e) => {
      // setTimeout(()=>{
      //   data()
      // },2000)
        const newObject = {
          name: formeditValues.name,
          price: parseInt(formeditValues.price),
          featured:formeditValues.featured,
          rating:parseInt(formeditValues.rating),
          createdAt:formeditValues.createdAt,
          company:formeditValues.company,
    
        };
       
        
      

        setOpen(false)

       
        const newObject1={_id:updateid}
        console.log(newObject)
        const newObject2=[newObject,newObject1]
        await axios.post("/editapi",{newObject2})
        .then((data11)=>{if(data11){data()}})
        .catch((er)=>console.log(er))
      
        

      }
      // updtae api
    

      //  const[names,setNane]=useState({})

      const handleOpen = async(ind) =>{ 
        setOpen(true);
        // const newEditData=state.filter((p,id)=>{
        //     return ind===id
        // })
        // setEdit(newEditData)
        console.log(ind,"indind")
        setUpdateid(ind)
       
     const fetchbyid= await  axios.post('/postdatabyid',{_id:ind})
        
     seteditValues(fetchbyid.data)
    }
      const handleClose = () => setOpen(false);
    
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
// const[id ,setId] = useState()

const data = async()=>{
  console.log("klklklklklklk")
    const data1 = await axios.get("/getData")
    const data2 =  await data1.data
    setState(data2)
    console.log("hiii")
}
useEffect(()=>{
data()
},[])
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
// console.log(state?.apidata[0]?._id,"hii")

const deletefun=async(data,index)=>{

// console.log(data,"iddata")
  const filterData = state.filter((p,id)=>{
              if(id!==index){
                return p
              }

  })
  setState(filterData)
  await axios.post("/deletedata",{_id:data})

  console.log(state.filterData)
}
// console.log(id,"newid")
// console.log((state,"jjj"))
console.log(edit,"edit")


// console.log(editfetchbyid,"fetchbyid")
  return (
    <div style={{backgroundColor:"",marginTop:"100px",width:"800px"}}>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Featured</TableCell>
            <TableCell align="right" style={{width:"100px"}}>Action</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {state?state.map((row,index) => (
            <TableRow
            //   key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{width:"60px"}}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.featured.toString()}</TableCell>
              <TableCell align="right" style={{display:'flex'}} >
                <div style={{marginLeft:"10px"}}>
                <Button variant="contained" color='error'   on onClick={()=>{deletefun(row._id,index)}}>Delete</Button>                 </div>

                <div> <Button variant="contained" onClick={()=>handleOpen(row._id)} >Edit</Button></div>
              </TableCell>


              {/* <Button variant="contained">Contained</Button> */}
       
      </TableRow>
          )):<h1>Loading.........</h1>}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          
                <div>
                    <form >
     <div style={{display:"flex",flexDirection:"column"}}>
        <input type="text" name="name" placeholder='Name' value={formeditValues.name} onChange={handleeditChange} />
      <br />
      
        <input type="Number" name="price" placeholder='price' value={formeditValues.price} onChange={handleeditChange} />
      
      <br />
      
        <input type="boolean"  name="featured" placeholder='false' readOnly={true}   />
      <br />
      <input type="Number" name="rating" placeholder='rating' value ={formeditValues.rating} onChange={handleeditChange} />
      <br />
      <input type="Date" name="createdAt" placeholder='createdAt' readOnly={true}  />
      <br/>
      <input type="text" name="company" placeholder='company' value={formeditValues.company} onChange={handleeditChange}  /><br/>
      <button onClick={handleeditSubmit} >Edit </button>

      </div>

    </form>

                </div>
           

        </Box>
      </Modal>
    </div>
  )
}

export default Tabledata
