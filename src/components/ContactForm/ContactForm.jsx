import { useState } from "react";
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from "./ContactForm.styled";

const ContactForm = ({addContact}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            
            case "number":
                setNumber(value);
                break;
            
            default: return;
        }
            
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        
        addContact({ name, number });
        
        setName('');
        setNumber('');
    };

    return (

        <Form name="contact_form" onSubmit={handleSubmit}>
            <Label>Name
                <Input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleInput}
                /></Label>
            <Label>Number
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleInput}
                />
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
      
    )
};



// class ContactForm extends Component  {

//     state = {
//         name: '',
//         number: ''
//     }


    
//     handleInput = (e) => {

//         const {name, value} = e.target

//         this.setState({
//             [name]: value,
//         })
//     }
        
//     handleSubmit = (e) => {
//     e.preventDefault()
        
//         this.props.addContact({ ...this.state });
        
//         this.setState({ name: "", number: "" });
        
//         e.target.reset();
//   }     
   
//     render() {
//        return (

//     <Form name="contact_form" onSubmit={this.handleSubmit}>
//             <Label>Name
//                 <Input
//                     type="text"
//                     name="name"
//                     pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                     onChange={this.handleInput}
//                 /></Label>
//             <Label>Number
//                 <Input
//                     type="tel"
//                     name="number"
//                     pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                     onChange={this.handleInput}
//                 />
//             </Label>
//             <Button type="submit">Add contact</Button>
//         </Form>
      
//     )
//    } 
// };

export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}