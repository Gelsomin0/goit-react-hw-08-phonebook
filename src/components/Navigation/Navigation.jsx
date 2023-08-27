import { Login } from "@mui/icons-material";
import {
    AppBar,
    Box, 
    Button, 
    ButtonGroup, 
    Container,
    Typography, 
} from "@mui/material";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login as LoginComponent } from "components";

export const Navigation = () => {

    const [isOpenModal, setIsOpenModal] = useState(false); 
    const handleOpenModal = () => setIsOpenModal(true);
    const handleCloseModal = () => setIsOpenModal(false)

    return (
        <div>
            <nav>
                <AppBar
                    position='relative'
                    sx={{
                        padding: 3,
                        marginBottom: '20px'
                    }}>
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box sx={{display: 'flex', gap: 3, alignItems: 'center'}}>
                            <Typography
                                variant='h5'
                                sx={{
                                    fontWeight: 600,
                                }}>PHONEBOOK.JS</Typography>
                            <ButtonGroup variant='contained' disableElevation>
                                <Button>
                                    <NavLink to='/'>
                                        <Typography sx={{color: '#fff'}}>Home page</Typography>
                                    </NavLink>
                                </Button>
                                <Button>
                                    <NavLink to='/contacts'>
                                        <Typography sx={{color: '#fff'}}>Contacts</Typography>
                                    </NavLink>
                                </Button>                                
                            </ButtonGroup>
                        </Box>

                        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                            <NavLink to='/register'>
                                <Button variant='contained'  disableElevation>Register</Button>
                            </NavLink>
                            <Button
                                variant='contained'
                                color='success'
                                startIcon={<Login />}
                                disableElevation
                                onClick={handleOpenModal}
                            >Login</Button>
                            <UserMenu />
                        </Box>   
                    </Container>
                </AppBar>
            </nav>

            {isOpenModal &&
                <LoginComponent
                    isOpenModal={isOpenModal}
                    isCloseModal={handleCloseModal}
                />
            }

        </div>
    );
}