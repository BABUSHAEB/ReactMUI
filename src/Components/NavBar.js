import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Stack, Button, Grid } from "@mui/material"
import BusinessIcon from '@mui/icons-material/Business';
import { Link as RouteLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <AppBar position='static'>
            <Toolbar spacing={5}  >

                <IconButton size='large' edge="start">
                    <BusinessIcon />
                </IconButton>
                <Typography variant='h6' component='div'>
                    Harns
                </Typography>


                &nbsp;

                <Stack
                    display={"flex"}
                    direction="row"
                    justifyContent="flex-end"
                    spacing={2}
                >

                    <Button color='inherit' component={RouteLink} to="/forms" >
                        <Typography variant='subtitle2' component='p'>
                            Forms
                        </Typography>
                    </Button>
                    <Button color='inherit' component={RouteLink} to="tables">
                        <Typography variant='subtitle2' component='p'>
                            Tables
                        </Typography>
                    </Button>
                    <Button color='inherit' component={RouteLink} to="tablesone">
                        <Typography variant='subtitle2' component='p'>
                            Tables One
                        </Typography>
                    </Button>

                </Stack>
            </Toolbar>

        </AppBar>
    )
}
