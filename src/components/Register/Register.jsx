import { NavLink } from 'react-router-dom';
import css from './Register.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/auth/authOperations';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Typography } from '@mui/material';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const passwordIsToShort = () => toast.error('Password have less then 6 symbols');
    const passwordIsToLong = () => toast.error('Password have more than 20 symbols!');
    const emailError = () => toast.error('Email address must have @ symbol');

    const handleRegisterData = ({target}) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'email') setEmail(target.value);
        if (target.name === 'password') setPassword(target.value);
    }

    const createUserAccount = (e) => {
        e.preventDefault();
        let canRegister = true;

        console.log(email.includes('@'));
        

        if (password.length < 6) {
            passwordIsToShort();
            canRegister = false;
        }
        if (password.length > 20) {
            passwordIsToLong();
            canRegister = false;
        }
        if (!email.includes('@')) {
            emailError();
            canRegister = false;
        }
        if (canRegister) {
            dispatch(createUser({ name, email, password }));
            setName('');
            setEmail('');
            setPassword('');
        }
    }

    return (
        <>
            <Toaster />
            <form className={css.formContainer} onSubmit={createUserAccount}>
                <h3>Create account</h3>
                <hr className={css.horisontalLine} />
                <label>
                    <h5 className={css.inputTitle}>Enter your name:</h5>
                    <input 
                        className={css.formInput} 
                        value={name} 
                        type='text' 
                        name='name' 
                        onChange={handleRegisterData} 
                        autoComplete='off'
                        required
                    />
                </label>
                <label>
                    <h5 className={css.inputTitle}>Enter your e-mail address:</h5>
                    <input 
                        className={css.formInput} 
                        value={email} 
                        type='text' 
                        name='email' 
                        onChange={handleRegisterData} 
                        autoComplete='off'
                        required
                    />
                </label>
                <label>
                    <h5 className={css.inputTitle}>Enter your password:</h5>
                    <input 
                        className={css.formInput} 
                        value={password} 
                        type='password' 
                        name='password' 
                        onChange={handleRegisterData} 
                        autoComplete='off'
                        required
                    />
                </label>
                <div className={css.submitSection}>
                    <Button type='submit' variant='contained'>Register</Button>
                    <Typography>or</Typography>
                    <Button variant='outlined'>
                        <NavLink
                            className={css.secondaryButton}
                            to='/login'
                        >Login</NavLink>
                    </Button>
                </div>
            </form>
        </>
    );
}

export default Register;