import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

export const Login = () => {
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
        </div>
    );
}