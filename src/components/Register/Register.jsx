import { AccountCircle, Create, Mail, Password } from "@mui/icons-material";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/auth-operations";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleFormData = ({target}) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'email') setEmail(target.value);
        if (target.name === 'password') setPassword(target.value);
    }

    const submitRegisterForm = (e) => {
        e.preventDefault();
        
        dispatch(registerUser({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <form onSubmit={submitRegisterForm}>
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
                    <Button
                        type='submit'
                        variant='contained'
                        endIcon={<Create />}
                    >Create account</Button>
                </Paper>
            </form>
        </div>
    );
}

export default Register;