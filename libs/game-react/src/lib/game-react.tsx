import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GameReactProps {}

const StyledGameReact = styled.div`
  color: pink;
`;

/**
 * Whitespace change in game-react
 *
 * to trigger #5 workflow build.
 */
export function GameReact(props: GameReactProps) {
  return (
    <StyledGameReact>
      <h1>Welcome to GameReact!</h1>
    </StyledGameReact>
  );
}

export default GameReact;
