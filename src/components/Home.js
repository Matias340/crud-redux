import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { getArticulos, deleteArticulosRequested } from '../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Home = () => {
    const dispatch = useDispatch();
    const articulos = useSelector((state) => state.articulos.articulos);
  
    useEffect(() => {
      dispatch(getArticulos());
    }, []);
  
    const handleDelete = (id) => {
      if(window.confirm("estas seguro de eliminar este ususario?")) {
        dispatch(deleteArticulosRequested(id));
      }
    };

  return(
    
   <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900, marginTop: 10 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Nombre</StyledTableCell>
              <StyledTableCell align='center'>Porcentaje</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
         <TableBody>
            {articulos?.map((articulo) => (
              <StyledTableRow key={articulo.id}>
                <StyledTableCell align="center">{articulo.Nombre}</StyledTableCell>
                <StyledTableCell align="center">{articulo.Porcentaje}%</StyledTableCell>
                <StyledTableCell align="center">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': {m: 1,},}}>   
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button style={{ marginRight: "8px"}} color='error' onClick={() => handleDelete(articulo.id)}>Delete</Button>
                  <Button color='primary'>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/edit/` + articulo.id}>
                        Edit
                    </Link>
                  </Button>
                  </ButtonGroup>
                 </Box> 
                </StyledTableCell>
              </StyledTableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
  </div>
  )
};

export default Home;
