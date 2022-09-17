import { GameSessionId } from '@intercept-game/game';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export interface GameLobbyProps {
  /**
   * The id of the game the user is about to join
   */
  gameSessionId: GameSessionId;
  // TODO: Add other information about the game that can be public
}

/**
 * The game lobby is shown to users who are trying to join a pre-existing
 * game-session. User's should be shown a 404-like page if the
 * game they are trying to join isn't available.
 *
 * TODO: Add security for only authenticated users
 */
export function GameLobby(props: GameLobbyProps) {
  const { gameSessionId } = props;

  return <h1>Game Lobby for: {gameSessionId}</h1>;
}

export default GameLobby;

export function getServerSideProps(
  context: GetServerSidePropsContext
): GetServerSidePropsResult<GameLobbyProps> {
  const {
    params: { 'game-session-id': initGameSessionId },
  } = context;

  // There should only be one.
  const gameSessionId = GameSessionId(
    Array.isArray(initGameSessionId) ? initGameSessionId[0] : initGameSessionId
  );
  // TODO: verify GameSessionId is valid

  console.log('[GameLobby]', gameSessionId, { params: context.params });

  if (!gameSessionId) return { notFound: true };

  return {
    props: {
      gameSessionId,
    },
  };
}
