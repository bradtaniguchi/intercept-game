import { PlaneCard } from '../card';
import { Plane } from '../plane';
import { PlayerId } from '../player';
import { Faction } from './faction';
import { GameMove } from './game-move';

/**
 * The GameSessionState represents the on-going state of the game. This does not
 * include more "static" information, such as the players participating
 * within the game. As such consider everything within this interface as "dynamic"
 * during a game-session.
 *
 * There are multiple of state, ones that are "live" and ones that are
 * "finished". Finished games are ones that no longer can be played, where-as
 * "live" states are games that are currently in-play. "Live" games
 * could be represented by this interface on the client-side and server-side,
 * and act as the single source of truth for the actual game-state.
 *
 * @see GameSession
 */
export type GameSessionState = GameSessionStateLive | GameSessionStateFinished;

/**
 * Represents the common data between a "live" and "finished" GameSessionStates
 *
 * @see GameSessionState
 * @see GameSessionStateLive
 * @see GameSessionStateFinished
 */
export interface GameSessionStateBase {
  /**
   * The list of moves made within the game. Initially starts
   * as an empty array when no player has made a move yet.
   */
  moves: GameMove[];

  /**
   * Which faction will make or has made the first move.
   * IE: "north" or "south".
   *
   * Which ever faction that is specified here **must** be
   * the first move in the array.
   */
  firstMove: Faction;

  /**
   * List of all planes for both factions. Used primarily as a lookup.
   * Use the `currentPlanes` property to get an overview of all planes at once.
   *
   * Otherwise the plane status here should represent their current status.
   */
  planes: {
    north: Array<Plane>;
    south: Array<Plane>;
  };

  /**
   * Object representing the ids of the players within the game.
   * User information might be saved here later.
   */
  players: {
    north: PlayerId;
    south: PlayerId;
  };
}

/**
 * Interface representing a "live" GameSessionState.
 *
 * Most other state is calculated via a reducer which calculates
 * the state after each move.
 *
 * **Note** some of the date within this interface may move/change
 * for security reasons.
 *
 * @see GameSessionState
 */
export interface GameSessionStateLive extends GameSessionStateBase {
  gameSessionStateType: 'live';

  /**
   * The cards each of the users has in their hands. Unlike the original game
   * any "discarded" cards are instantly made available to draw from again.
   * Upon the initialization of the game, this cards must be provided, thus
   * these can't be calculated.
   *
   * As such keeping track of the cards currently in the hands of the
   * user should be enough.
   *
   * **Note** the card type may change, as we don't want to provide data
   * on the opposing player's hands to the other side's computer. With
   * exceptions to local-only play, which must have complete knowledge of the
   * hands.
   */
  cards: {
    north: PlaneCard[] | number;
    south: PlaneCard[] | number;
  };
}

/**
 * Interface representing a "finished" GameSessionState
 */
export interface GameSessionStateFinished extends GameSessionStateBase {
  gameSessionStateType: 'finished';

  /**
   * The cards each user had in their hands at the time of the game ends.
   */
  cards: {
    north: PlaneCard[];
    south: PlaneCard[];
  };
}

/**
 * Type-guard that returns if the given GameSessionState is a "live"
 * game.
 *
 * TODO: could be expanded to make more extensive data checks against
 * the actual calculated game.
 */
export const isGameSessionStateLive = (
  state: GameSessionState
): state is GameSessionStateLive => state.gameSessionStateType === 'live';

/**
 * Type-guard that returns if the given GameSessionState is a "finished"
 * game.
 */
export const isGameSessionStateFinished = (
  state: GameSessionState
): state is GameSessionStateFinished =>
  state.gameSessionStateType === 'finished';
