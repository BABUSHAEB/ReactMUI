import React, { useContext } from 'react'
import { Table, TableBody, TableCell, TableHead, TableContainer, TableRow, Paper, Box, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { SignUpData } from '../ContextStore/DataStore';


export default function Tables() {
  const [previous, setPrevious] = React.useState({});

  const { formData,setFormData, setFormValues, formValues  } = useContext(SignUpData);
  // console.log(formData);

  const handleEdit = (a,b) => {

    let EditStatus = formData;

    if(formData[a].id === a ){
      console.log(a, "index Data", formData[a].id)
      EditStatus[a].isEditMode = !EditStatus[a].isEditMode;
      setFormData( [...EditStatus]);
    }
  }
  const handleChange = (e, changerow)  => {

   
      if (!previous[changerow.id]) {
        setPrevious((state) => ({ ...state, [changerow.id]: changerow }));
      }
      const value = e.target.value;
      const name = e.target.name;
      const { id } = changerow;
      const newRows = formData.map((row) => {
        if (row.id === id) {
          return { ...row, [name]: value };
        }
        return row;
      });
      setFormData(newRows);
    }

    const onRevert = (id) => {
      const newRows = formData.map((row) => {
        if (row.id === id) {
          return previous[id] ? previous[id] : row;
        }
        return row;
      });
      setFormData(newRows);
      setPrevious((state) => {
        delete state[id];
        return state;
      });
      // handleEdit(id);
    };

  // const value = e.target.value;
  // const name = e.target.name;
  // const { id } = changerow;
  // const newRows = formData.map(row => {
  //     if (row.id === id) {
  //         return { ...row, [name]: value };
  //       }
  //     });
  //     console.log(newRows);
  //     setFormValues(newRows);
  //     // console.log(newRows);
    
// }
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="start"
      padding="2rem"
      minWidth={400}
      marginLeft="auto"
      marginRight={"auto"}
      color="warning"
    >
      <TableContainer component={Paper} height={700}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow >
              <TableCell >Email</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Current Address</TableCell>
              <TableCell>Permanent Address</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell >Mobile No:</TableCell>
              <TableCell >Password</TableCell>
              <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {formData.length !== 0 && formData.map((row) => (

              row.isEditMode ?

              <TableRow component="th" scope="row" key={row.id}>
                <TableCell >
                  <TextField
                    required
                    type="text"
                    variant='outlined'
                    margin='normal'
                    name="email"
                    value={row.email}
                  onChange={ e => handleChange(e, row)}

                  />
                </TableCell>
                <TableCell>
                  <TextField
                    required
                    type="text"
                    variant='outlined'
                    margin='normal'
                    name="firstname"
                    value={row.firstname}
                  onChange={ e => handleChange(e, row)}

                  />
                </TableCell>
                <TableCell>
                  <TextField
                    required
                    type="text"
                    variant='outlined'
                    margin='normal'
                    name="lastname"
                    value={row.lastname}
                  onChange={ e => handleChange(e, row)}

                  />
                </TableCell>
                <TableCell>
                  <TextField
                    required
                    type="text"
                    variant='outlined'
                    margin='normal'
                    name="currentaddress"
                    value={row.currentaddress}
                  onChange={e => handleChange(e, row)}

                  />
                </TableCell>
                <TableCell>
                  <TextField
                    required
                    type="text"
                    variant='outlined'
                    margin='normal'
                    name="permanentaddress"
                    value={row.permanentaddress}
                  onChange={ e => handleChange(e, row)}

                  />
                </TableCell>
                <TableCell>
                  <TextField
                    required
                    type="text"
                    variant='outlined'
                    margin='normal'
                    name="gender"
                    value={row.gender}
                  onChange={ e => handleChange(e, row)}

                  />
                </TableCell>
                <TableCell >
                  <TextField
                    required
                    type="text"
                    variant='outlined'
                    margin='normal'
                    name="mobileno"
                    value={row.mobileno}
                  onChange={ e => handleChange(e, row)}

                  />
                </TableCell>
                <TableCell >
                  <TextField
                    required
                    type="text"
                    variant='outlined'
                    margin='normal'
                    name="password"
                    value={row.password}
                  onChange={ e => handleChange(e, row)}

                  />
                </TableCell>
                <TableCell >
                  <IconButton  onClick={() => handleEdit(row.id,"savebtn")} variant="contained" color="primary">
                    <SaveIcon  />
                  </IconButton>
                  <IconButton onClick={() => onRevert(row.id)} variant="contained" color='error'>
                    <CloseIcon  />
                  </IconButton>


                </TableCell>
              </TableRow> 
              :

              
              <TableRow component="td" scope="row" key={row.id}>
                <TableCell > {row.email} {row.id} </TableCell>
                <TableCell>{row.firstname} </TableCell>
                <TableCell>{row.lastname} </TableCell>
                <TableCell>{row.currentaddress} </TableCell>
                <TableCell>{row.permanentaddress} </TableCell>
                <TableCell>{row.gender} </TableCell>
                <TableCell >{row.mobileno} </TableCell>
                <TableCell >{row.password} </TableCell>
                <TableCell >
                  <IconButton onClick={() => handleEdit(row.id,"editbtn")} >
                    <EditIcon color="warning" />
                  </IconButton>


                </TableCell>
              </TableRow> 

              
            ))}
           
   
          </TableBody>
        </Table>
      </TableContainer>
    </Box>


  )
}





