import PropTypes from 'prop-types';
import {List, ListItem, Button} from "./ContactList.styled";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "../redux/contactsSlice";

const ContactList = () => {

    const contacts = useSelector(state => state.contacts.initialContacts);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
    
    return (
        <List>
            {
            filteredContacts.map(({ id, name, number }) => {
                return (
                    
                        <ListItem key={id}>{name}: {number}
                            {<Button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button> }</ListItem>
                        
                    
                )
            })
            }
        </List>
    )
    
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}