import { isPlayerId, PlayerId } from '../player';
import { GameInterceptEvent } from './game-intercept-event';
import { GameMove, isGameMove } from './game-move';
import { createGameTurnId, GameTurnId, isGameTurnId } from './game-turn-id';

/**
 * Represents a group of GameMoves for a given user turn.
 *
 * GameMoves come in different forms for different tasks that can
 * be executed during a given users turn via their different phases.
 *
 * However each user only gets 1 turn, which alternates for each user.
 *
 */
export interface GameTurn {
  /**
   * The id of the turn, should be unique to all turns within the game.
   */
  id: GameTurnId;
  /**
   * The player who made the move.
   */
  player: PlayerId;
  /**
   * The list of moves made for this turn. Should max out at 2 events.
   */
  moves: GameMove[];
  /**
   * The list of intercept-events made for this turn.
   * Should max out at 2 events.
   */
  intercepts: GameInterceptEvent[];
  // TODO: add a ground attack scenario, which triggers an AA chance roll.
}

/**
 * Returns if the GameTurn is a valid GameTurn, according
 * to nested typechecks. Will also verify all moves within the given GameTurn
 * are made by the same player
 */
export const isGameTurn = (gameTurn: unknown): gameTurn is GameTurn =>
  gameTurn &&
  typeof gameTurn === 'object' &&
  isGameTurnId((gameTurn as GameTurn).id) &&
  isPlayerId((gameTurn as GameTurn).id) &&
  Array.isArray((gameTurn as GameTurn).moves) &&
  (gameTurn as GameTurn).moves.every(
    (move) => isGameMove(move) && move.player === (gameTurn as GameTurn).player
  );

/**
 * Factory function to create a new GameTurn.
 *
 * Will create an "empty" GameMove array if no moves are given.
 * @see GameTurn
 */
export const createGameTurn = ({
  player,
  moves,
}: {
  player: PlayerId;
  moves?: GameMove[];
  intercepts?: GameInterceptEvent[];
}): GameTurn => ({
  id: createGameTurnId(),
  moves: moves ?? [],
  intercepts: [],
  player,
});
