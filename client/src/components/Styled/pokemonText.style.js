import styled from 'styled-components';
import { Text } from 'grommet';

export const PokemonText = styled(Text)`
  color: #ffcc01;

  font-family: 'Press Start 2P', cursive;
  text-align: center;
  font-size: 58px;
  letter-spacing: 15px;
  text-shadow: #0269b4 3px 6px 1px;
  @media (max-width: 900px) {
    font-size: 45px;
  }
  @media (max-width: 700px) {
    font-size: 35px;
    letter-spacing: 5px;
  }
  @media (max-width: 470px) {
    font-size: 25px;
    letter-spacing: 1px;
  }
`;
