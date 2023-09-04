import Filter from "components/Filter/Filter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getAllContacts } from "redux/contacts/contactsOperations";
import { getContactList } from "redux/contacts/contactsSelectors";
import css from './ContactList.module.css';
import EditModal from "components/EditModal/EditModal";

const ContactList = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllContacts());
    }, [dispatch]);
    
    const [filter, setFilter] = useState('');
    const gettedContactList = useSelector(getContactList);
    const filteredList = (filterQuery) => {
        setFilter(filterQuery);
    };

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const listItem = (id, name, number) => {
        return (
            <li key={id} className={css.listItem}>
                {isModalOpen && (
                    <EditModal
                        id={id}
                        handleOpenModal={handleOpenModal}
                        oldName={name}
                        oldNumber={number}
                    />
                )}
                <div className={css.avatar}>{name.toUpperCase().slice(0, 1)}</div>
                <div className={css.contactInfo}>
                    <h4>{ name }</h4>
                    <p className={css.phoneNumber}>{ number }</p>
                </div>
                <button
                    className={css.editButton}
                    onClick={handleOpenModal}
                >Edit</button>
                <button
                    className={css.deleteButton}
                    onClick={() => dispatch(deleteContact(id))}
                >Delete</button>
            </li>
        );
    }

    return (
        <>
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
        </>
    );
}

export default ContactList;