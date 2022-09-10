import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GameReactProps {}

const StyledGameReact = styled.div`
  color: pink;
`;

export function GameReact(props: GameReactProps) {
  return (
    <StyledGameReact>
      <h1>Welcome to GameReact!</h1>
    </StyledGameReact>
  );
}

export default GameReact;
