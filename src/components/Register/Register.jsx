import { AccountCircle, Mail, Password } from "@mui/icons-material";
import { Box, Button, Paper, TextField } from "@mui/material";

const Register = () => {
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
                        padding: '25px 30px'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle  sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField label='Name' variant='standard' />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Mail  sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField label='E-mail' variant='standard' />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Password  sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField label='Password' variant='standard' />
                    </Box>
                    <Button variant='contained'>Create account</Button>
                </Paper>
            </form>
        </div>
    );
}

export default Register;