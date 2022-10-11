import React, { useState } from 'react'
import { NavLink as RouteLink, Outlet } from 'react-router-dom'
import { Box, Button, Stack } from '@mui/material';

export default function Form() {
    const [value, setValue] = useState(false);

    const handleChange = (event, newValue) => {

        if (value === true) {

            setValue(false);
        } else {
            setValue(true);
        }

    };
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{ my: "2rem" }}
            >
                <Stack
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingBottom="2rem"
                >
                    <Button
                        paddingtop="2rem"
                        variant='contained'
                        component={RouteLink}
                        onClick={() => handleChange(1)}
                        // color={value ? "primary" : "warning"}
                        color="warning"
                        to="signup">
                        Sign Up
                    </Button>
                    &nbsp;
                    <Button
                        variant='contained'
                        onClick={() => handleChange(2)}
                        component={RouteLink}
                        // color={value ? "warning" : "primary"}
                        color="primary"
                        to="login">
                        Log In
                    </Button>
                    &nbsp;
                    <Button
                        variant='contained'
                        color="btnerror"
                    >
                        Error
                    </Button>
                </Stack>
                <Outlet />
            </Box>


        </div>
    )
}
