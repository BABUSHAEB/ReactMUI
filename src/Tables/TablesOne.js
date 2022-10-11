import React, { useContext } from "react";
// import ReactDOM from "react-dom";

import { Table, TableBody, TableCell, TableHead, TableContainer, TableRow, Paper, Box, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { SignUpData } from "../ContextStore/DataStore";


// const createData = (name, calories, fat, carbs, protein) => ({
//     id: name.replace(" ", "_"),
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     isEditMode: false
// });


export default function TablesOne() {
    const { formData,setFormData, setFormValues, formValues,handleChange  } = useContext(SignUpData);
    const CustomTableCell = ({ row, name, onChange }) => {
        console.log(name);
    
        const { isEditMode } = row;
        return (
            <TableCell align="left" >
                {isEditMode ? (
                    <TextField
                        value={row[name]}
                        name={name}
                        onChange={e => onChange(e, row)}
    
                    />
                ) : (
                    row[name]
                )}
            </TableCell>
        );
    };
    // const [formData, setFormData] = React.useState([
        
    //     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    //     createData("Eclair", 262, 16.0, 24, 6.0)
    // ]);
    // const [formValues, setFormValues] = React.useState({});


    const onToggleEditMode = id => {
        setFormData(state => {
            return formData.map(row => {
                if (row.id === id) {
                    return { ...formValues, isEditMode: !row.isEditMode };
                }
                return row;
            });
        });
    };

    const onChange = (e, row) => {
        if (!formValues[row.id]) {
            setFormValues(state => ({ ...state, [row.id]: row }));
        }
        const value = e.target.value;
        const name = e.target.name;
        const { id } = row;
        const newRows = formData.map(row => {
            if (row.id === id) {
                return { ...row, [name]: value };
            }
            return row;
        });
        setFormData(newRows);
    };

    const onRevert = id => {
        const newRows = formData.map(row => {
            if (row.id === id) {
                return formValues[id] ? formValues[id] : row;
            }
            return row;
        });
        setFormData(newRows);
        setFormValues(state => {
            delete state[id];
            return state;
        });
        onToggleEditMode(id);
    };

    return (
        <Paper >
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
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
                    {formData.map(row => (
                        <TableRow key={row.id}>
                            

                            <CustomTableCell {...{ row, name: "email", onChange }} />
                            <CustomTableCell {...{ row, name: "firstname", onChange }} />
                            <CustomTableCell {...{ row, name: "lastname", onChange }} />
                            <CustomTableCell {...{ row, name: "currentaddress", onChange }} />
                            <CustomTableCell {...{ row, name: "permanentaddress", onChange }} />
                            <CustomTableCell {...{ row, name: "gender", onChange }} />
                            <CustomTableCell {...{ row, name: "mobileno", onChange }} />
                            <CustomTableCell {...{ row, name: "password", onChange }} />
                            <TableCell >
                                {row.isEditMode ? (
                                    <>
                                        <IconButton
                                            aria-label="done"
                                            onClick={() => onToggleEditMode(row.id)}
                                        >
                                            <SaveIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="revert"
                                            onClick={() => onRevert(row.id)}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </>
                                ) : (
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => onToggleEditMode(row.id)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}


