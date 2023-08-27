import { Formik, Field } from 'formik';
import { Form, ErrorMessage } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations'; // Вкажіть правильний шлях до вашого contactsSlice // Вкажіть правильний шлях до вашого селектора контактів

import { selectContacts } from 'redux/contacts/contactsSelectors';

import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.number().positive('Must be > 0!').required('Required field!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} is already in your contacts list`);
    }

    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
       onSubmit={handleSubmit}
    >
      {props => {
        const isErrorName = !props.values.name && props.touched.name;
        const isErrorNumber = !props.values.number && props.touched.number;

        return (
          <Form>
            <Field name="name">
              {({ field }) => (
                <FormControl isInvalid={isErrorName} isRequired>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="Enter name"
                      focusBorderColor="#00cc66"
                    />
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FiUser} />
                    </InputLeftElement>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="name" component="span" />
            <Field name="number">
              {({ field }) => (
                <FormControl isInvalid={isErrorNumber} isRequired>
                  <FormLabel>Number</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      focusBorderColor="#00cc66"
                      placeholder="Enter number"
                      type="tel"
                    />
                    <InputLeftElement pointerEvents="none">
                      <Icon as={BsTelephone} />
                    </InputLeftElement>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="number" component="span" />
            <Button
              leftIcon={<AiOutlineUserAdd />}
              mt={4}
              backgroundColor="#f1c40f"
              colorScheme="orange"
              type="submit"
            >
              Add contact
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};


