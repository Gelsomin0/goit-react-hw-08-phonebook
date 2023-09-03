import { AddBox } from "@mui/icons-material";
import { Button, Divider, TextField } from "@mui/material";
import css from './ContactsForm.module.css';

const ContactsForm = () => {
    return (
        <div>
            <form className={css.addContactForm}>
                <TextField label='Contact name' />
                <TextField label='Phone number' />
                <Button endIcon={<AddBox />}>Add contact</Button>
            </form>
            <Divider sx={{margin: '20px auto'}} />
        </div>
    );
}

export default ContactsForm;