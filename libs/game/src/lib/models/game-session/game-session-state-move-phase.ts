/**
 * List of move phases a user could be in within a turn.
 */
export const GAME_SESSION_STATE_MOVE_PHASES = [
  'takeoff',
  'in-flight',
  'in-intercept',
  'in-ground-attack',
  'opponent',
] as const;

/**
 * Type representing the different types of MovePhases
 */
export type GameSessionStateMovePhase =
  typeof GAME_SESSION_STATE_MOVE_PHASES[number];
