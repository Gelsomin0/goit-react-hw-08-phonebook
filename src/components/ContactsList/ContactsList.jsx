import { DeleteForever, Settings } from "@mui/icons-material";
import { 
    Avatar, 
    Button, 
    Dialog, 
    DialogContent, 
    DialogTitle, 
    Divider, 
    IconButton, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    TextField} from "@mui/material";
import ContactsForm from "components/ContactsForm/ContactsForm";
import Filter from "components/Filter/Filter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "redux/contacts/contacts-operations";
import { getContactList } from "redux/contacts/contacts-selectors";

const ContactsList = () => {
    const contactListSelector = useSelector(getContactList);
    const dispatch = useDispatch();
    // console.log(contactListSelector);
    // const contactListSelector = useSelector(getContactList).sort((firstContact, secondContact) => {
    //     firstContact.name.localeCompare(secondContact.name);
    // });
    // const [contactList, setContactList] = useState([]);
    const [editContact, setEditContact] = useState(false);
    let isFinishOfList = 0;

    // const getExistedConatcts = () => {
    //     setContactList(contactListSelector);
    // }

    const canEditCurrentContact = () => {
        setEditContact(!editContact);
    }

    // useEffect(() => {
    //     getExistedConatcts();
    // }, [getExistedConatcts]);

    return (
        <>
            <ContactsForm />
            <Filter />
            {contactListSelector && (
                <List sx={{
                    width: '100%',
                    maxWidth: 430,
                    bgcolor: '#e1f5fe',
                    margin: '0 auto',
                    marginBottom: '30px'
                }}>
                    {contactListSelector.map(({ id, name, number }) => {
                        const avatarFirstLetter = name.slice(0, 1).toUpperCase();
                        const numberText = `${number}`;
                        isFinishOfList += 1;

                        return (
                            <div key={id}>
                                <Dialog open={editContact} onClose={canEditCurrentContact}>
                                    <DialogTitle>Edit current contact</DialogTitle>
                                    <DialogContent sx={{p: 3}}>
                                        <Divider sx={{marginBottom: '20px'}} />
                                        <TextField label='Edit name' />
                                        <TextField label='Edit phone number' />
                                        <Button onClick={canEditCurrentContact}>Cancel</Button>
                                        <Button>Edit</Button>
                                    </DialogContent>
                                </Dialog>

                                <ListItem
                                    secondaryAction={
                                        <>
                                            <IconButton onClick={canEditCurrentContact}>
                                                <Settings />
                                            </IconButton>
                                            <IconButton
                                                edge='end'
                                                onClick={()=> dispatch(deleteContacts(id))}
                                                >
                                                <DeleteForever />
                                            </IconButton>
                                        </>
                                    }
                                    >
                                    <ListItemAvatar>
                                        <Avatar variant="rounded">{avatarFirstLetter}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={name} secondary={numberText} />
                                </ListItem>
                                {isFinishOfList !== contactListSelector.length && <Divider variant='middle' />}
                            </div>
                        );
                    })}
                </List>
            )}
        </>
    );
}

export default ContactsList;