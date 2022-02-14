import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArticulosById, updateArticulosRequested} from '../redux/actions/actions';
import { InputAdornment } from '@mui/material';

const Edit = () => {
    const initialState = {
      name: "",
      percentage: ""
      };
    
      const [formValue, setFormValue] = useState(initialState);
      const [error, setError] = useState('');
      const { name, percentage } = formValue;
      const navigate = useNavigate();
      const {id} = useParams();
    
      const handleSubmit = (e)  => { 
         e.preventDefault();
         if(formValue) {
         dispatch(updateArticulosRequested(formValue, id));
         setTimeout(() => navigate("/"), 500);
         setError("");
       }
      };
    
      const dispatch = useDispatch();
      const articuloById = useSelector((state) => state.articulos.editArticulos);
      console.log(articuloById);
    
      useEffect(() => {
        dispatch(getArticulosById(id));
      }, [])
    
      useEffect(()=> {
        if(articuloById)
        setFormValue({...formValue, 
        name: articuloById.name,
        percentage: articuloById.percentage
       })
       console.log(articuloById);
      }, [articuloById]);
    
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
     <h2>Edit</h2>
     {error && <h3 style={{ color: "red" }}>{error}</h3>}
     <form onSubmit={handleSubmit}>
      <TextField style={{ width: "500px" }} id="outlined-nombre" label="Nombre" value={name} name="name" type="text" onChange={onInputChange}/>
      <br />
      <TextField style={{ width: "500px" }} id="outlined-porcentaje" label="Porcentaje" 
      value={percentage} name="percentage" 
      InputProps={{
        startAdornment: <InputAdornment position='start'>%</InputAdornment>
      }}
      type="number" onChange={onInputChange}/>
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
         Edit
      </Button>
     </form>
    </div>   
  </Box>
  )
}

export default Edit;
