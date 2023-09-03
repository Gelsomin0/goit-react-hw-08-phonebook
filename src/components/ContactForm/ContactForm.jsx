import css from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <form className={css.contactForm}>
            <label>
                <h5>Contacts name:</h5>
                <input className={css.contactInput} name='name' type='text' />
            </label>
            <label>
                <h5>Phone number:</h5>
                <input className={css.contactInput} name='number' type='tel' />
            </label>
            <button className={css.addButton}>Add contact</button>
        </form>
    );
}

export default ContactForm;