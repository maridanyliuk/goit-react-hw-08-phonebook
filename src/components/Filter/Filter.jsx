import { FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectStatusFilter } from 'redux/contacts/contactsSelectors';
import { FiUser } from 'react-icons/fi';

export const Filter = () => {
    const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChangeInput = e => dispatch(setFilter(e.target.value));
  return (
    <FormControl>
      <FormLabel>Find contacts by name</FormLabel>
      <InputGroup>
        <Input
          focusBorderColor="#00cc66"
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeInput}
          placeholder="Enter name"
        />
        <InputLeftElement pointerEvents="none">
          <Icon as={FiUser} />
        </InputLeftElement>
      </InputGroup>
    </FormControl>
  );
};


