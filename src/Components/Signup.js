import React, { useContext } from 'react'

import '../App.css';
import { shadows ,TextField, Box, Button, Typography, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl, Card } from '@mui/material';
import { SignUpData } from '../ContextStore/DataStore';


export default function Signup() {

    const { formValues, setFormValues, formData, setFormData, InitialData } = useContext(SignUpData);
    console.log(InitialData, "from datastore")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData([...formData, { ...formValues, id: formData.length, isEditMode: false }])
        console.log(formData);

        // setFormValues(InitialData);


    }


    return (
        <div className="App">
            {/* <Card shadows={1}> */}

                <form onSubmit={handleSubmit}>

                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        padding="2rem"
                        maxWidth={400}
                        minWidth={200}
                        marginLeft="auto"
                        marginRight="auto"
                        spacing={4}
                        borderRadius={3}
                     sx={{ shadows: 1 }}
                   


                    >
                        <Typography
                            margin='normal'
                            variant='h3'
                            color="primary">
                            Let,Join with us!
                        </Typography>


                        <TextField
                            required
                            type="Email"
                            name="email"
                            value={formValues.email}
                            variant='outlined'
                            margin='normal'
                            label="Email"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            type="text"
                            variant='outlined'
                            label='First Name'
                            margin='normal'
                            name="firstname"
                            value={formValues.firstname}
                            onChange={handleChange}

                        />
                        <TextField
                            required
                            type="text"
                            variant='outlined'
                            label='Last Name'
                            margin='normal'
                            name="lastname"
                            value={formValues.lastname}
                            onChange={handleChange}

                        />
                        <TextField
                            required
                            type="text"
                            variant='outlined'
                            label='Current Address'
                            margin='normal'
                            name="currentaddress"
                            value={formValues.currentaddress}
                            onChange={handleChange}

                        />
                        <TextField
                            required
                            type="text"
                            variant='outlined'
                            label='Permanent Address'
                            margin='normal'
                            name="permanentaddress"
                            value={formValues.permanentaddress}
                            onChange={handleChange}

                        />
                        <FormControl sx={{ width: 200 }}>

                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                required
                                aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue="female"
                                name="gender"
                                value={formValues.gender}
                                onChange={handleChange}

                            >
                                <FormControlLabel value="Female" control={<Radio required={true} />} label="Female" />
                                <FormControlLabel value="Male" control={<Radio required={true} />} label="Male" />
                                <FormControlLabel value="Other" control={<Radio required={true} />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            required
                            type="Number"
                            variant='outlined'
                            label='Mobile No'
                            margin='normal'
                            name="mobileno"
                            value={formValues.mobileno}
                            onChange={handleChange}

                        />
                        <TextField
                            required
                            type={"password"}
                            variant='outlined'
                            label='Password'
                            margin='normal'
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}

                        />

                        <Button
                            sx={{ marginTop: 3 }}
                            type="submit"
                            variant='contained'
                            color="warning" size="large">
                            Sign Up </Button>


                    </Box>
                </form>
            {/* </Card> */}
        </div>
    )
}
