import { nanoid } from 'nanoid';
import { GameTurn } from './game-turn';

/**
 * The length of a game-turn
 */
export const GAME_TURN_ID_LENGTH = 8;

/**
 * Type that represents a GameTurnId.
 */
export type GameTurnId = string & { readonly brand: unique symbol };

/**
 * Function that can be used to create a GameTurnId.
 */
export const GameTurnId = (id: string): GameTurnId => id as GameTurnId;

/**
 * Function that can be used to check if a value is a GameTurnId
 */
export const isGameTurnId = (id: unknown): id is GameTurn =>
  typeof id === 'string' && id.length === GAME_TURN_ID_LENGTH;

/**
 * Creates a valid game-turn-id
 */
export const createGameTurnId = (): GameTurnId =>
  GameTurnId(nanoid(GAME_TURN_ID_LENGTH));
