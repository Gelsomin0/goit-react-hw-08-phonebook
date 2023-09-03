import { AddBox } from "@mui/icons-material";
import { Button, Divider, TextField } from "@mui/material";
import css from './ContactsForm.module.css';
import { useDispatch } from "react-redux";
import { createContacts } from "redux/contacts/contacts-operations";
import { useState } from "react";

const ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const handleFormData = ({ target }) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'number') setNumber(target.value);
    }

    const submitNewContact = (e) => {
        e.preventDefault();
        dispatch(createContacts({ name, number }));
        setName('');
        setNumber('');
    }

    return (
        <div>
            <form className={css.addContactForm} onSubmit={submitNewContact}>
                <TextField 
                name='name' 
                value={name} 
                onChange={handleFormData} 
                label='Contact name' 
                />
                <TextField 
                name='number' 
                value={number} 
                onChange={handleFormData} 
                label='Phone number' 
                />
                <Button type='submit' endIcon={<AddBox />}>Add contact</Button>
            </form>
            <Divider sx={{margin: '20px auto'}} />
        </div>
    );
}

export default ContactsForm;