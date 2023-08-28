import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleContactData = (e) => {
        e.preventDefault();

        dispatch(addContact({
            name: e.target.elements.name.value,
            number: e.target.elements.phone.value,
        }));

        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleContactData}>
                <label>
                    <p>Name of person:</p>
                    <input name='name' type='text'/>
                </label>
                <label>
                    <p>Phone number:</p>
                    <input name='phone' type='tel'/>
                </label>
                <button type='submit'>Add contact</button>
            </form>
        </div>
    );
}