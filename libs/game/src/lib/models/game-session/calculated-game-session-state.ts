import { BoardCellType, BoardGrid } from '../board';
import { PlaneId } from '../plane/plane-id';
import { Faction } from './faction';
import { GameSessionStateLive } from './game-session-state';

/**
 * Represents the calculated GameSessionState for a "live" game.
 *
 * This should be calculated via the `getCalculatedState` function, which
 * calculates most of the game state from the base GameSessionStateLive data.
 *
 * @see GameSessionStateLive
 */
export interface CalculatedGameSessionState extends GameSessionStateLive {
  /**
   * The current user who's move it is. Initially when the game starts,
   * this should match the `firstMove` property.
   */
  currentMove: Faction;

  /**
   * The current "phase" the current user's move is in. Any "end-state" moves
   * automatically end the users turn and changes focus to the opponent.
   *
   * TODO: move the type-def elsewhere.
   *
   * - takeoff - the user needs to pick one or two planes to put into flight
   * - in-flight - the user already has 2 planes in flight
   * - in-intercept - the user is attacking using one of their planes onto an enemy
   * - in-ground-attack - the user is attacking the enemies ground-bases, requires
   *   RNG roll calculations.
   * - opponent - essentially disables all possible moves.
   */
  movePhase:
    | 'takeoff'
    | 'in-flight'
    | 'in-intercept'
    | 'in-ground-attack'
    | 'opponent';

  /**
   * Object representing the status of all the planes for both factions
   * TODO: move nested property elsewhere.
   */
  currentPlanes: {
    north: {
      inFlight: Array<PlaneId>;
      downed: Array<PlaneId>;
      grounded: Array<PlaneId>;
    };
    south: {
      inFlight: Array<PlaneId>;
      downed: Array<PlaneId>;
      grounded: Array<PlaneId>;
    };
  };

  /**
   * The current calculated boardGrid display.
   *
   * This should be the primary source of truth in regards to what is
   * displayed to the user.
   */
  boardGrid: BoardGrid<BoardCellType>;
}
