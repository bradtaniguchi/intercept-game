import { BoardCellType, BoardGrid } from '../board';
import { PlaneId } from '../plane/plane-id';
import { Faction } from './faction';
import { GameMove } from './game-move';
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
   * Map of moves for each plane. Useful to show the history
   * of moves made by a given plane.
   *
   * TODO: move nested property elsewhere
   */
  planeMoves: {
    north: {
      planes: Record<PlaneId, GameMove[]>;
    };
    south: {
      planes: Record<PlaneId, GameMove[]>;
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

/**
 * Returns default empty CalculatedGameSessionState.
 *
 * Useful for testing, and initializing an "empty" state. This shouldn't be used
 * beyond initialization, as a complete empty-state isn't realistic.
 *
 * Most "defaulted" settings will be defaulted to the "north" faction, such as
 * the first move. There are no planes or aa on the board.
 */
export const getEmptyCalculatedGameSessionState = (
  state?: Partial<CalculatedGameSessionState>
): CalculatedGameSessionState => ({
  boardGrid: [],
  cards: {
    north: [],
    south: [],
  },
  currentMove: 'north',
  currentPlanes: {
    north: {
      downed: [],
      grounded: [],
      inFlight: [],
    },
    south: {
      downed: [],
      grounded: [],
      inFlight: [],
    },
  },
  firstMove: 'north',
  gameSessionStateType: 'live',
  movePhase: 'takeoff',
  moves: [],
  planes: {
    north: [],
    south: [],
  },
  players: {
    north: '',
    south: '',
  },
  planeMoves: {
    north: {
      planes: {},
    },
    south: {
      planes: {},
    },
  },
  ...state,
});
