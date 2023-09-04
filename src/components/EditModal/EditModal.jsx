import { useDispatch } from 'react-redux';
import css from './EditModal.module.css';
import { updtaeContact } from 'redux/contacts/contactsOperations';
import { useState } from 'react';

const EditModal = ({ id, handleOpenModal, oldName, oldNumber }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputData = ({ target }) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'number') setNumber(target.value);
    }
 
    const handleUpdateForm = (e) => {
        e.preventDefault();
        dispatch(updtaeContact({
            contactNewData: { name, number },
            id,
        }));
        setName('');
        setNumber('');
        handleOpenModal();
    }

    return (
        <div className={css.backdrop}>
            <div className={css.modalWindow}>
                <form className={css.formSection} onSubmit={handleUpdateForm}>
                    <h4>Edit current contact</h4>
                    <hr className={css.horisontalLine} />
                    <label>
                        <p className={css.inputTitle}>Old name: <h4>{ oldName }</h4></p>
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
                        <p className={css.inputTitle}>Old number: <h4>{ oldNumber }</h4></p>
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
                        <button
                            type='submit'
                            className={css.editButton}
                        >Update</button>
                        <button
                            type='button'
                            className={css.editButton}
                            onClick={handleOpenModal}
                        >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditModal;