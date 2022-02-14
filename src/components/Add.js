import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createArticulosRequested } from '../redux/actions/actions';
import { InputAdornment } from '@mui/material';

const Add = () => {
    const initialState = {
      name: "",
      percentage: ""
      };
    
      const [formValue, setFormValue] = useState(initialState);
      const [error, setError] = useState("");  
      const { name, percentage } = formValue;
      const navigate = useNavigate();
      const dispatch = useDispatch();
    
      const handleSubmit = (e) => { 
         e.preventDefault();
         if(!name || !percentage) {
           setError("Por favor llene los campos");
       } else {
         dispatch(createArticulosRequested(formValue));
         setTimeout(() => navigate("/"), 500);
         setError("");
       }
      };
    
      const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
      };

  return(
    <Box
    sx={{  '& .MuiTextField-root': { m: 1, width: '25ch' }, marginTop: '80px', marginLeft: 'auto' , 
    marginRight: 'auto',display: 'flex', flexDirection: 'column',alignItems: 'center'}}
    noValidate
    autoComplete="off"
  >
   <div>
     <h2>Add</h2>
     {error && <h3 style={{ color: "red" }}>{error}</h3>}
     <form onSubmit={handleSubmit}>
      <TextField style={{ width: "500px" }} id="outlined-nombre" value={formValue.name} label="Nombre" name="name" type="text" onChange={onInputChange}/>
      <br />
      <TextField style={{ width: "500px" }} id="outlined-porcentaje" value={formValue.percentage} label="Porcentaje" name="percentage"
        InputProps={{
          startAdornment: <InputAdornment position='start'>%</InputAdornment>
        }} type="number" onChange={onInputChange}/>
      <br />
      <Button 
      style={{ width: "100px", marginTop: "20px", marginRight: "20px"}}
      variant='contained' 
      color='error'
      type='submit'>
       <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
        Go Back
      </Link>   
      </Button>

      <Button 
       style={{ width: "100px", marginTop: "20px" }}
       variant='contained' 
       color='primary'
       type='submit'>
         Add
      </Button>
     </form>
    </div>   
  </Box>
  )
}

export default Add;

