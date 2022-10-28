import { GameTurn } from '../models';
import { GameSessionStateMovePhase } from '../models/game-session/game-session-state-move-phase';

/**
 * Returns the "phase" of the turn. Relies on some externally calculated
 * logic to determine what "phase" the user's turn is on.
 *
 * TODO: provide context of external planes
 */
export const getMovePhase = ({
  turn,
  planesInFlight,
}: {
  /**
   * The current turn the player is on.
   */
  turn: GameTurn;
  /**
   * The number of planes that the user currently has "in-flight".
   *
   * TODO: mention the utility function that will return this information
   */
  planesInFlight: 0 | 1 | 2;
  /**
   * If either of the in-flight planes can intercept
   * an enemy plane.
   */
  canIntercept: boolean;
}): Exclude<GameSessionStateMovePhase, 'takeoff'> => {
  const hasMaxIntercepts = turn.intercepts.length >= 2;
  if (hasMaxIntercepts) return 'opponent';

  const hasMaxGroundAttacks = false; // TODO: add ground attack checks
  if (hasMaxGroundAttacks) return 'opponent';

  const isPartialInterceptPhase = !!(
    turn.intercepts.length && turn.intercepts.length < planesInFlight
  );

  if (isPartialInterceptPhase) return 'in-intercept';

  const isPartialMovePhase = !!(
    turn.moves.length && turn.moves.length < planesInFlight
  );
  if (isPartialMovePhase) return 'in-flight';

  // TODO: Add ground attack checks

  return 'in-flight';
};
