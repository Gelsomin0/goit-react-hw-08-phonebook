import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getContactList } from "redux/contacts/contacts-selectors";

const ContactsList = () => {
    const [isGettedList, setIsGettedList] = useState(false);
    const contactList = useSelector(getContactList);
    console.log(contactList);

    return (
        <>
            {contactList && (
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {contactList.map(({ id, name, number }) => {
                        return (
                            <ListItem key={id}>
                                <ListItemAvatar>
                                    <Avatar>{name.slice(0,1)}</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={name} secondary={number} />
                            </ListItem>
                        );
                    })}
                </List>
            )}
        </>
    );
}

export default ContactsList;