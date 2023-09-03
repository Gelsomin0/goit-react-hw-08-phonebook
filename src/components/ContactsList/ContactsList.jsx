import { DeleteForever } from "@mui/icons-material";
import { 
    Avatar, 
    Divider, 
    IconButton, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText } from "@mui/material";
import ContactsForm from "components/ContactsForm/ContactsForm";
import Filter from "components/Filter/Filter";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getContactList } from "redux/contacts/contacts-selectors";

const ContactsList = () => {
    const contactList = useSelector(getContactList);
    let isFinishOfList = 0;

    return (
        <>
            <ContactsForm />
            <Filter />
            {contactList && (
                <List sx={{
                    width: '100%',
                    maxWidth: 430,
                    bgcolor: '#e1f5fe',
                    margin: '0 auto'
                }}>
                    {contactList.map(({ id, name, number }) => {
                        const avatarFirstLetter = name.slice(0, 1).toUpperCase();
                        const numberText = `${number}`;
                        isFinishOfList += 1;

                        return (
                            <div key={id}>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge='end'>
                                            <DeleteForever />
                                        </IconButton>
                                    }
                                    >
                                    <ListItemAvatar>
                                        <Avatar variant="rounded">{avatarFirstLetter}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={name} secondary={numberText} />
                                </ListItem>
                                {isFinishOfList !== contactList.length && <Divider variant='middle' />}
                            </div>
                        );
                    })}
                </List>
            )}
        </>
    );
}

export default ContactsList;