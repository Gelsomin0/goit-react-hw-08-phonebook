import Filter from "components/Filter/Filter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "redux/contacts/contactsOperations";
import { getContactList } from "redux/contacts/contactsSelectors";
import css from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        dispatch(getAllContacts());
    }, [dispatch]);
    
    const gettedContactList = useSelector(getContactList);
    const filteredList = (filterQuery) => {
        setFilter(filterQuery);
    };
    const listItem = (id, name, number) => {
        return (
            <li key={id} className={css.listItem}>
                <div className={css.avatar}>{name.toUpperCase().slice(0, 1)}</div>
                <div className={css.contactInfo}>
                    <h4>{ name }</h4>
                    <p className={css.phoneNumber}>{ number }</p>
                </div>
                <button className={css.deleteButton}>Delete</button>
            </li>
        );
    }

    return (
        <div className={css.mainSection}>
            <div>
                <Filter filteredList={filteredList} />
            </div>

            {gettedContactList && !filter ? (
                <ul>
                    {gettedContactList.map(({ id, name, number }) => {
                        return listItem(id, name, number);
                    })}
                </ul>) :
                <ul>
                    {gettedContactList.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, number }) => {
                        return listItem(id, name, number);
                    })}
                </ul>
            }
        </div>
    );
}

export default ContactList;