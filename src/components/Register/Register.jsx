import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/operations";

export const Register = () => {
    const dispatch = useDispatch();

    const handleFormData = (e) => {
        e.preventDefault();

        dispatch(registerUser({
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }));

        e.target.reset();
    }

    return(
        <div>
            <form onSubmit={handleFormData}>
                <label>
                    <p>Your name:</p>
                    <input name='name' type='text'/>
                </label>
                <label>
                    <p>Your e-mail:</p>
                    <input name='email' type='email'/>
                </label>
                <label>
                    <p>Your password:</p>
                    <input name='password' type='text'/>
                </label>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}