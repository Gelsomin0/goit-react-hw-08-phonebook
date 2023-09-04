import Filter from "components/Filter/Filter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getAllContacts } from "redux/contacts/contactsOperations";
import { getContactList } from "redux/contacts/contactsSelectors";
import css from './ContactList.module.css';
import EditModal from "components/EditModal/EditModal";
import toast from 'react-hot-toast';

const ContactList = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [contactId, setContactId] = useState('');
    const toastContactIsDeleted = (name) => toast.error(`Contact ${name} is deleted!`);

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

    const onDeleteContact = (id, name) => {
        dispatch(deleteContact(id));
        toastContactIsDeleted(name);
    }

    const onOpenModal = (e, id) => {
        setContactName(e.target.parentElement.querySelector('#name').textContent);
        setContactNumber(e.target.parentElement.querySelector('#number').textContent);
        setContactId(id)

        handleOpenModal()
        // console.log(name);

        // return (
        //     <EditModal
        //         id={id}
        //         handleOpenModal={handleOpenModal}
        //     />
        // );
    }

    const listItem = (id, name, number) => {
        return (
            <li key={id} id={id} className={css.listItem}>
                <div className={css.avatar}>{name.toUpperCase().slice(0, 1)}</div>
                <div className={css.contactInfo}>
                    <h4 id='name'>{ name }</h4>
                    <p id='number' className={css.phoneNumber}>{ number }</p>
                </div>
                <button
                    className={css.editButton}
                    onClick={(e)=>onOpenModal(e, id)}
                >Edit</button>
                <button
                    className={css.deleteButton}
                    onClick={() => onDeleteContact(id, name)}
                >Delete</button>
            </li>
        );
    }

    return (
        <>
            {isModalOpen && (
                <EditModal
                    contactId={contactId}
                    handleOpenModal={handleOpenModal}
                    contactName={contactName}
                    contactNumber={contactNumber}
                />
            )}
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