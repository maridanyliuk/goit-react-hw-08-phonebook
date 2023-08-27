import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Div, Text } from './UserMenu.styled';
import { Avatar } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { SlLogout } from 'react-icons/sl';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <Text>Welcome, {user.email}</Text>
      <Avatar
        size={{ base: '2xs', md: 'sm' }}
        src="https://bit.ly/broken-link"
      />
      <Button
        colorScheme="yellow"
        border="none"
        backgroundColor="white"
        size={{ base: 'xs', md: 'sm' }}
        leftIcon={<SlLogout />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Div>
  );
};
