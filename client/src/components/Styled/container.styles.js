import styled from 'styled-components';

export const AuthContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const ElevatedCard = styled.div`
  border-radius: 10px;
  transition: box-shadow 0.3s;
  &:hover {
    -webkit-box-shadow: 0px 4px 25px -8px rgba(0, 0, 0, 0.78);
    -moz-box-shadow: 0px 4px 25px -8px rgba(0, 0, 0, 0.78);
    box-shadow: 0px 4px 25px -8px rgba(0, 0, 0, 0.78);
  }
`;
