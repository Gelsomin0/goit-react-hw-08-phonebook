import { NavLink } from 'react-router-dom';
import css from './Login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import toast from 'react-hot-toast';
import { Button, Typography } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const toastEnterFormData = () => toast.error('Please, ented your email and password!');

    const handleLoginData = ({ target }) => {
        if (target.name === 'email') setEmail(target.value);
        if (target.name === 'password') setPassword(target.value);
    }

    const submitLogin = (e) => {
        e.preventDefault();
        let canRegister = true;

        if(email === '' || password === '') canRegister = false;
        if(canRegister) dispatch(loginUser({ email, password }));
        if(!canRegister) toastEnterFormData();

        setEmail('');
        setPassword('');
    }

    return (
        <form className={css.formContainer} onSubmit={submitLogin}>
            <h3>Login</h3>
            <hr className={css.horisontalLine} />
            <label>
                <h5 className={css.inputTitle}>Enter your e-mail address:</h5>
                <input 
                    onChange={handleLoginData} 
                    className={css.formInput} 
                    type='text' 
                    name='email'
                    value={email}
                    required
                />
            </label>
            <label>
                <h5 className={css.inputTitle}>Enter your password:</h5>
                <input 
                    onChange={handleLoginData} 
                    className={css.formInput} 
                    type='password' 
                    name='password'
                    value={password}
                    required
                />
            </label>
            <div className={css.submitSection}>
                <Button type='submit' variant='contained'>Login</Button>
                <Typography>or</Typography>
                <Button variant='outlined'>
                    <NavLink to='/register'>Register</NavLink>
                </Button>
            </div>
        </form>
    );
}

export default Login;