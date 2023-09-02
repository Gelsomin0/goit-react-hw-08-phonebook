import { AccountCircle, Mail, Password } from "@mui/icons-material";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleFormData = ({target}) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'email') setEmail(target.value);
        if (target.name === 'password') setPassword(target.value);
    }

    return (
        <div>
            <form>
                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        alignItems: 'center',
                        padding: '25px 30px',
                        width: '400px',
                        margin: '0 auto'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle  sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            name='name'
                            value={name}
                            label='Name'
                            variant='standard'
                            onChange={handleFormData}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Mail  sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            name='email'
                            value={email}
                            label='E-mail'
                            variant='standard'
                            onChange={handleFormData}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Password  sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            name='password'
                            value={password}
                            label='Password'
                            variant='standard'
                            onChange={handleFormData}
                        />
                    </Box>
                    <Button variant='contained'>Create account</Button>
                </Paper>
            </form>
        </div>
    );
}

export default Register;