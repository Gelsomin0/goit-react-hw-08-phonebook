import { ContactForm } from "components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "redux/contacts/operations";
import { getContactsState } from "redux/contacts/selectors";

export const Contacts = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllContacts());
    // }, [dispatch]);
    const contactsList = useSelector(getContactsState);
    return (
        <div>
            <ContactForm />
            {contactsList.length > 0 ?
                <ul>{
                    contactsList.map(({ id, name, number }) => {
                        return (
                            <li key={ id }>{ name }: { number }</li>
                        );
                    })
                }</ul>
                : <h3>This is no contacts! Please add some contact first.</h3>
            }
        </div>
    );
}