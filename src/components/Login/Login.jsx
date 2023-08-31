import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logIn } from "redux/auth/operations";

export const Login = ({restricted}) => {
    const dispatch = useDispatch();

    const handleLoginData = (e) => {
        e.preventDefault();
        dispatch(logIn({
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }));

        e.target.reset();
    }

    return (
        <div>
            {restricted ? 
                <Navigate to='/' /> :
                <form onSubmit={handleLoginData}>
                    <label>
                        <p>E-mail:</p>
                        <input name='email' type='email'/>
                    </label>
                    <label>
                        <p>Password:</p>
                        <input name='password' type='password'/>
                    </label>
                    <button type='submit'>Login</button>
                </form>
            }
        </div>
    );
}