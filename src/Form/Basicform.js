import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Form/Form.css'
// import Modal from 'react-modal';

import { Height } from '@mui/icons-material';

function ObjectForm() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    featured: false,
    rating:'',
    createdAt:Date.now(),
    company:'',
  });

  const[state,setState]=useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async(e) => {
    alert("sucessfully submit")
    e.preventDefault();
    const newObject = {
      name: formValues.name,
      price: parseInt(formValues.price),
      featured:formValues.featured,
      rating:parseInt(formValues.rating),
      createdAt:formValues.createdAt,
      company:formValues.company

    };

    console.log(newObject);
    setState(newObject)
      setFormValues({
        name: '',
        price: '',
        featured: false,
        rating:'',
        createdAt:Date.now(),
        company:'',
      })
    await axios.post('http://localhost:5000/api/products/postdata',newObject)

    // Perform any further actions with the new object, such as sending to backend or updating state
  };


  // const handleSubmit1 = (e) => {
    
  //   setIsModalOpen(true);
  // };



  return (
    <div style={{backgroundColor:"lightblue" ,width:"400px",marginTop:"60px", height:"400px",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"210px",borderRadius:"10px"}}>
    <form onSubmit={handleSubmit}>
     <div style={{display:"flex",flexDirection:"column"}}>
        <input className='input-box' type="text" name="name" placeholder='Name' value={formValues.name} onChange={handleChange} />
      <br />
      
        <input className='input-box' type="Number" name="price" placeholder='price' value={formValues.price} onChange={handleChange} />
      
      <br />
      
        <input className='input-box' type="boolean" name="featured" placeholder='false' readOnly={true} value={formValues.featured} onChange={handleChange} />
      <br />
      <input  className='input-box'type="Number" name="rating" placeholder='rating' value={formValues.rating} onChange={handleChange} />
      <br />
      <input  className='input-box'type="Date" name="createdAt" placeholder='createdAt' readOnly={true} value={formValues.createdAt} onChange={handleChange} />
      <br/>
      <input className='input-box' type="text" name="company" placeholder='company' value={formValues.company} onChange={handleChange} /><br/>

      <button className=' button' onClick={handleSubmit} >Create Object</button>
      </div>
      {/* <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2 style={{backgroundColor:"red"}}>Success!</h2>
        <p style={{backgroundColor:"red"}}>Your form has been submitted.</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal> */}
    </form>
   
    </div>
  );
}

export default ObjectForm;
