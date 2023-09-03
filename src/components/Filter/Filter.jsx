import PropTypes from 'prop-types';
import {Label, Input} from "./Filter.styled"
    
const Filter = ({search, handlInput}) => {
    return (
        <Label> Find contacts by name
            <Input
                type="text"
            name="filter"
            value={search}
            onChange={handlInput} />
        </Label>
        
    )
}
   

export default Filter;

Filter.propTypes = {
    search: PropTypes.string.isRequired,
    handlInput: PropTypes.func.isRequired
}