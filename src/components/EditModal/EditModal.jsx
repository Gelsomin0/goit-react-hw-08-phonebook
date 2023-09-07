import { useDispatch, useSelector } from 'react-redux';
import css from './EditModal.module.css';
import { updtaeContact } from 'redux/contacts/contactsOperations';
import { useEffect, useState } from 'react';
import { getContactList } from 'redux/contacts/contactsSelectors';
import toast from 'react-hot-toast';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const EditModal = ({ contactId, handleOpenModal, contactName, contactNumber }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contactList = useSelector(getContactList);
    const toastIsAlreadyExist = (name) => toast.error(`Contact with name ${name} is already exist! Please, change name.`);

    useEffect(() => {
        setName(contactName);
        setNumber(contactNumber);
    }, [contactName, contactNumber]);

    const handleInputData = ({ target }) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'number') setNumber(target.value);
    }
 
    const handleUpdateForm = (e) => {
        e.preventDefault();
        let isExist = false;

        contactList.map((contact) => {
            if (contact.name === name) {
                toastIsAlreadyExist(name);
                isExist = true;
            }
            return contact;
        });

        if (!isExist) {            
            dispatch(updtaeContact({
                contactNewData: { name, number },
                contactId,
            }));

            setName('');
            setNumber('');
            handleOpenModal();
        }
    }

    return (
        <div className={css.backdrop}>
            <div className={css.modalWindow}>
                <form className={css.formSection} onSubmit={handleUpdateForm}>
                    <h4>Edit current contact</h4>
                    <hr className={css.horisontalLine} />
                    <label>
                        <p className={css.inputTitle}>Name:</p>
                        <input 
                            onChange={handleInputData}
                            className={css.editInput} 
                            value={name}
                            type='text' 
                            name='name' 
                            placeholder='New name'
                        />
                    </label>
                    <label>
                        <p className={css.inputTitle}>Number:</p>
                        <input 
                            onChange={handleInputData}
                            className={css.editInput}
                            value={number} 
                            type='tel' 
                            name='number' 
                            placeholder='New phone number'
                        />
                    </label>
                    <div className={css.buttonsSection}>
                        <Button type='submit' variant='contained'>Update</Button>
                        <Button
                            type='button'
                            onClick={handleOpenModal}
                            variant='outlined'
                        >Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditModal;

EditModal.propTypes = {
    contactId: PropTypes.string,
    handleOpenModal: PropTypes.func,
    contactName: PropTypes.string,
    contactNumber: PropTypes.string,
}