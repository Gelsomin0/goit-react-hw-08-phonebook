import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const handleConatctData = ({target}) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'number') setNumber(target.value);
    }

    const submitNewContact = (e) => {
        e.preventDefault();
        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
    }

    return (
        <form className={css.contactForm} onSubmit={submitNewContact}>
            <label>
                <h5>Contacts name:</h5>
                <input 
                    onChange={handleConatctData} 
                    className={css.contactInput} 
                    value={name}
                    name='name' 
                    type='text'
                />
            </label>
            <label>
                <h5>Phone number:</h5>
                <input 
                    onChange={handleConatctData} 
                    className={css.contactInput} 
                    value={number}
                    name='number' 
                    type='tel'
                />
            </label>
            <button className={css.addButton}>Add contact</button>
        </form>
    );
}

export default ContactForm;