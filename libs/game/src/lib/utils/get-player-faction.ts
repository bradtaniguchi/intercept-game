import { Faction } from '../models/game-session/faction';
import { GameSessionState } from '../models/game-session/game-session-state';
import { PlayerId } from '../models/player';

/**
 * Utility function used to return the player's faction.
 */
export const getPlayerFaction = ({
  player,
  gameSessionState,
}: {
  player: PlayerId;
  gameSessionState: GameSessionState;
}): Faction => {
  if (gameSessionState.players.north === player) return 'north';
  if (gameSessionState.players.south === player) return 'south';

  throw new Error(`Unknown playerId provided: ${player}`);
};
