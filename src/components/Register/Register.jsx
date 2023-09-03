import { NavLink } from 'react-router-dom';
import css from './Register.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/auth/authOperations';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleRegisterData = ({target}) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'email') setEmail(target.value);
        if (target.name === 'password') setPassword(target.value);
    }

    const createUserAccount = (e) => {
        e.preventDefault();
        dispatch(createUser({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
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
                />
            </label>
            <div className={css.submitSection}>
                <button className={css.mainButton} type='submit'>Register</button>
                <p>or</p>
                <NavLink className={css.secondaryButton} to='/login'>Login</NavLink>
            </div>
        </form>
    );
}

export default Register;