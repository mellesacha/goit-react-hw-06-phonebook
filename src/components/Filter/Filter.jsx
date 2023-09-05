import PropTypes from 'prop-types';
import {Label, Input} from "./Filter.styled"
import { useDispatch} from 'react-redux';
import {setContactFilter} from "../redux/filterSlice"
    
const Filter = () => {

    const dispatch = useDispatch();

    const handlInput = (e) => {
        dispatch(setContactFilter(e.target.value))
    }
    return (
        <Label> Find contacts by name
            <Input
                type="text"
            name="filter"
            onChange={handlInput}/>
        </Label>
        
    )
}
   

export default Filter;

Filter.propTypes = {
    handlInput: PropTypes.func
}