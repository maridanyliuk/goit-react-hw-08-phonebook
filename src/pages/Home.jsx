import { Title, } from './Home.styled';
import { Button, ButtonGroup, } from '@chakra-ui/react';
import { logOut } from 'redux/auth/authOperations';
import { useSelector, useDispatch } from 'react-redux';
import { SlLogout } from 'react-icons/sl';
import { TiContacts } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';





const Home = () => {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
    const navigate = useNavigate();

    const onContact = () => {
    navigate('/contacts');
  }; 

  const onLogIn = () => {
    navigate('/login');
  }; 

    const onSignUp = () => {
    navigate('/register');
  };

return (
    <div>
      {isAuthenticated ? (
        <div>
          <Title> Welcome, {user.name}!</Title>
   <ButtonGroup
              display={'flex'}
              justifyContent={'space-between'}
              mr={'auto'}
              ml={'auto'}
              w={'255px'}
              mt={'30px'}
            >
              <Button
                colorScheme="green"
                size="md"
                leftIcon={<TiContacts />}
            onClick={onContact}
            fontSize={'20px'}
              >
                Contacts
              </Button>
              <Button
                colorScheme="yellow"
                size="md"
                leftIcon={<SlLogout />}
            onClick={() => dispatch(logOut())}
            fontSize={'20px'}
              >
                Logout
              </Button>
            </ButtonGroup>
        </div>
      ) : (
        <div>
            <Title>Welcome, please</Title>
            <ButtonGroup
              display={'flex'}
              justifyContent={'space-between'}
              mr={'auto'}
              ml={'auto'}
              mt={'30px'}
            >
              {' '}
              <Button
                colorScheme="pink"
                size="md"
              onClick={onSignUp}
              fontSize={'20px'}
              >
                Register
            </Button>
            <Title> or </Title>
              <Button
                colorScheme="orange"
                size="md"
              onClick={onLogIn}
              fontSize={'20px'}
              >
                Log in
              </Button>
            </ButtonGroup>
        </div>
      )}
    </div>
  );
};

export default Home;
