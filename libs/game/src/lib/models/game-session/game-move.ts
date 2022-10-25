import { getId } from '@intercept-game/common';
import { BoardLocation, isBoardLocation } from '../board/board-location';
import { BoardX } from '../board/board-x';
import { BoardY } from '../board/board-y';
import { Direction, isDirection } from '../board/direction';
import { Plane } from '../plane/plane';
import { isPlaneId, PlaneId } from '../plane/plane-id';
import { isPlayerId, PlayerId } from '../player/player-id';
import { Faction } from './faction';
import { createGameMoveId, GameMoveId, isGameMoveId } from './game-move-id';
import { Roll } from './roll';

/**
 * Represents a plane move within a game-session. Multiple of these
 * make up a single persons turn.
 *
 * GameMoves represent an already in-flight plane move to another position
 * based on the dice roll
 *
 * TODO: Update with Plane move info, and provide utilities related
 * to this move, such as attacking, and other "phased" states.
 *
 */
export interface GameMove {
  /**
   * The id of the move, should be unique to all moves within the game.
   */
  id: GameMoveId;

  /**
   * The id of the planes that moved.
   */
  plane: PlaneId;

  /**
   * The new location the plane moved to.
   */
  newLocation: BoardLocation;

  /**
   * The direction the plane is now facing.
   * This matters in dog-fights.
   */
  direction: Direction;

  /**
   * The player who made the move.
   */
  player: PlayerId;

  /**
   * The roll made for this move.
   */
  roll: Roll;
  /**
   * Which dice was used for this GameMove.
   */
  die: 0 | 1;
}

/**
 * Returns if the the move is a valid move, according to the nested type-checkers
 */
export const isGameMove = (move: unknown): move is GameMove =>
  isGameMoveId((move as GameMove).id) &&
  isPlaneId((move as GameMove).plane) &&
  isBoardLocation((move as GameMove).newLocation) &&
  isDirection((move as GameMove).direction) &&
  isPlayerId((move as GameMove).id);

/**
 * Factory function to create a new game-move, providing
 * helper abstractions around the base `GameMove` type.
 * @see GameMove
 */
export const createGameMove = ({
  plane,
  newLocation,
  direction,
  player,
  roll,
  die,
}: {
  /**
   * The plane or plane-id that is being moved.
   */
  plane: Plane | PlaneId;
  /**
   * The new location, will throw an error if an invalid
   * board location is given.
   */
  newLocation:
    | BoardLocation
    | {
        x: number;
        y: number;
      };
  /**
   * The direction the plane will be facing.
   */
  direction: Direction;
  /**
   * Who made the move
   */
  faction: Faction;
  /**
   * The player who made the move
   */
  player: PlayerId;
  /**
   * The roll the user made for this move.
   */
  roll: Roll;
  /**
   * Which dice was used for this move.
   */
  die: 0 | 1;
}): GameMove => ({
  id: createGameMoveId(),
  plane: getId(plane),
  newLocation: (() => {
    if (!isBoardLocation(newLocation))
      // TODO: make specific error
      throw new Error(
        `Invalid Board location x: ${newLocation.x} y: ${newLocation.y}`
      );

    return {
      x: BoardX(newLocation.x),
      y: BoardY(newLocation.y),
    };
  })(),
  direction,
  player,
  roll,
  die,
});
