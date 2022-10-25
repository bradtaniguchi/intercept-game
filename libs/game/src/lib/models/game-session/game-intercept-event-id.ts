import { nanoid } from 'nanoid';

/**
 * The length of a game-intercept-id
 */
export const GAME_INTERCEPT_EVENT_ID_LENGTH = 8;

/**
 * Type that represents a GameInterceptEventId.
 */
export type GameInterceptEventId = string & { readonly brand: unique symbol };

/**
 * Function that can be used to create a GameInterceptEventId
 */
export const GameInterceptEventId = (id: string): GameInterceptEventId =>
  id as GameInterceptEventId;

export const isGameInterceptEventId = (
  id: unknown
): id is GameInterceptEventId =>
  typeof id === 'string' && id.length === GAME_INTERCEPT_EVENT_ID_LENGTH;

export const createGameInterceptMoveId = (): GameInterceptEventId =>
  GameInterceptEventId(nanoid(GAME_INTERCEPT_EVENT_ID_LENGTH));
