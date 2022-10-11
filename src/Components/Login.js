import React from 'react'
// import '../App.css';
import { TextField, Box, Button, Typography, Card } from '@mui/material';
export default function Login() {

    return (
        <div >
            <Card>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    padding="2rem"
                    width={400}
                    minWidth={200}
                    marginLeft="auto"
                    marginRight="auto"
                    spacing={4}
                    borderRadius={3}


                >
                    <Typography
                        margin='normal'
                        variant='h3'
                        color="primary">
                        Log In!

                    </Typography>
                    <TextField
                        type="text"
                        variant='outlined'
                        placeholder='Username or Email'
                        margin='normal'

                    />

                    <TextField
                        type={"password"}
                        variant='outlined'
                        placeholder='Password'
                        margin='normal'

                    />
                    <Button
                        sx={{ marginTop: 3 }}

                        variant='contained'
                        color="warning" size="large">Log In</Button>


                </Box>
            </Card>

        </div>
    )
}
