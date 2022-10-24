import { BoardEntity } from '../board/board-entity';
import { BoardX } from '../board/board-x';
import { BoardY } from '../board/board-y';
import { Direction } from '../board/direction';
import { Faction } from '../game-session/faction';
import { GameMove } from '../game-session/game-move';
import { PlayerId } from '../player/player-id';
import { PlaneId } from './plane-id';
import {
  isNorthSquadron,
  isSouthSquadron,
  PlaneSquadron,
  UnknownSquadronError,
} from './plane-squadron';

/**
 * Represents a "plane" object, which is the primary unit of play in the game.
 */
export interface Plane extends BoardEntity<PlaneId> {
  /**
   * The player this plane belongs to.
   */
  player: PlayerId;

  /**
   * The squadron this plane belongs to.
   * This can be used to determine the faction of the plane, or
   * the player can be checked.
   */
  squadron: PlaneSquadron;

  /**
   * The list of planes this plane has shot-down.
   * 1 down = ace
   * 2+ down = double ace
   *
   * An ace can get 6 cards.
   * A double ace can get 8 cards.
   *
   * These cards are bestowed to the plane when it lands and refits.
   */
  downed: PlaneId[];

  /**
   * If the current plane has been "shot down".
   * It shouldn't be selectable or movable at this time.
   */
  isDowned: boolean;

  /**
   * The direction the plane is facing. This is important to determine
   * if a plane can "intercept" another plane and changes how a plane
   * "defends" against attacks.
   */
  direction: Direction;
}

/**
 * Factory function that creates a basic test plane.
 * Useful for populating tests.
 */
export const createTestPlane = (plane?: Partial<Plane>): Plane => ({
  id: PlaneId('test-plane'),
  x: BoardX(0),
  y: BoardY(0),
  height: 'in-flight',
  player: PlayerId('test-player'),
  squadron: 'foo',
  downed: [],
  isDowned: false,
  direction: 'north',
  ...plane,
});

/**
 * If the plane is an ace
 */
export const isAce = (plane: Plane): boolean => plane.downed.length === 1;

/**
 * If the given plane is a double ace.
 */
export const isDoubleAce = (plane: Plane): boolean => plane.downed.length > 1;

/**
 * Returns the faction of the plane, based upon the squadron.
 * Will throw an error if given un-recognized squadron.
 */
export const getFaction = (plane: Plane): Faction => {
  if (isNorthSquadron(plane.squadron)) return 'north';
  if (isSouthSquadron(plane.squadron)) return 'south';
  throw new UnknownSquadronError(plane.squadron);
};

/**
 * Returns the count of cards the plane has.
 *
 * This should be used when a plane takes-off after landing.
 */
export const getRefitCardCount = (plane: Plane) => {
  if (isAce(plane)) return 6;
  if (isDoubleAce(plane)) return 8;

  return 4;
};

/**
 * Utility function that returns a new data object representing
 * the updated plane from the given move.
 *
 * Will perform internal sanity check to prevent updates
 * against a different plane.
 *
 * TODO: this needs to be updated to handle different kinds of moves
 * currently this only handles move+direction updates
 * @unstable
 */
export const updatePlaneWithMove = ({
  plane,
  move,
}: {
  plane: Plane;
  move: GameMove;
}): Plane =>
  plane.id === move.plane
    ? {
        ...plane,
        // TODO: handle other types of moves
        direction: move.direction,
        x: move.newLocation.x,
        y: move.newLocation.y,
      }
    : plane;
