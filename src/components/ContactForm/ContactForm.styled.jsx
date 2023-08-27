import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormikInput,
} from 'formik';

export const Form = styled(FormikForm)`
  max-width: 500px;
  padding: 20px;
  border: 2px dashed #d90368;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: auto;
  @media screen and (min-width: 480px) {
    width: 400px;
  }
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const Field = styled(FormikInput)`
  box-sizing: border-box;

  padding: 5px 20px;
  font-size: 24px;
  line-height: 1.5;

  border-radius: 4px;
`;
