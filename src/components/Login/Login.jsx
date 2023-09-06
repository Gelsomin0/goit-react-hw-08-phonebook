import { NavLink } from 'react-router-dom';
import css from './Login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLoginData = ({ target }) => {
        if (target.name === 'email') setEmail(target.value);
        if (target.name === 'password') setPassword(target.value);
    }

    const submitLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
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
                <button className={css.mainButton} type='submit'>Login</button>
                <p>or</p>
                <NavLink className={css.secondaryButton} to='/register'>Register</NavLink>
            </div>
        </form>
    );
}

export default Login;