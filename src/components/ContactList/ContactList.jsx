import PropTypes from 'prop-types';
import {List, ListItem, Button} from "./ContactList.styled"

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {
            contacts.map(({ id, name, number }) => {
                return (
                    
                        <ListItem key={id}>{name}: {number}
                            {<Button type="button" onClick={() => onDeleteContact(id)}>Delete</Button> }</ListItem>
                        
                    
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
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}