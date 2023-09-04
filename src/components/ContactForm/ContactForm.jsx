import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContactList } from 'redux/contacts/contactsSelectors';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const actualContactList = useSelector(getContactList);
    const toastContactIsAlreadyExist = (name) => toast.error(`Conatct with name ${name} is already exist!`);
    const toasIsSuccessfullyCreated = (name) => toast.success(`${name} is added into contacts list!`);

    const handleConatctData = ({target}) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'number') setNumber(target.value);
    }

    const submitNewContact = (e) => {
        e.preventDefault();
        let isExist = false;

        actualContactList.find((contact) => {
            if (contact.name.toLowerCase() === name.toLowerCase()) { 
                isExist = true;
                toastContactIsAlreadyExist(name);
            }
            return contact;
        })

        if (!isExist) {
            dispatch(addContact({ name, number }));
            toasIsSuccessfullyCreated(name);
        }     
        
        setName('');
        setNumber('');
    }

    return (
        <form className={css.contactForm} onSubmit={submitNewContact}>
            <Toaster />
            <label>
                <h5>Contacts name:</h5>
                <input 
                    onChange={handleConatctData} 
                    className={css.contactInput} 
                    value={name}
                    name='name' 
                    type='text'
                    required
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
                    required
                />
            </label>
            <button className={css.addButton}>Add contact</button>
        </form>
    );
}

export default ContactForm;