/**
 * The original game has 2 factions, the German air force and the allied air-force.
 *
 * However, for this game we will use cardinal directions to represent the factions.
 * with the "north" and "south".
 *
 * Within the game files, we will use player information for each "faction",
 * but as this can be dynamic, we will use the cardinal directions to represent
 * the factions within the code.
 */
export const FACTIONS = ['north', 'south'] as const;

/**
 * The type of faction
 */
export type Faction = typeof FACTIONS[number];

/**
 * Type-guard to verify if a faction
 */
export const isFaction = (faction: unknown): faction is Faction =>
  FACTIONS.includes(faction as Faction);

/**
 * Utility function that returns if the given faction is the "north"
 * faction. Provided for usability.
 *
 * Will throw an UnknownFactionError if given an unknown faction.
 */
export const isNorth = (faction: Faction): faction is 'north' => {
  if (!isFaction(faction)) throw new UnknownFactionError(faction);
  return faction === 'north';
};

/**
 * Utility function that returns if the given faction is the "south"
 * faction. Provided for usability.
 *
 * Will throw an UnknownFactionError if given an unknown faction.
 */
export const isSouth = (faction: Faction): faction is 'south' => {
  if (!isFaction(faction)) throw new UnknownFactionError(faction);
  return faction === 'south';
};

/**
 * Error thrown when an unknown faction is given
 */
export class UnknownFactionError extends Error {
  /**
   * @param unknownFaction the unknown faction, will be provided in error message
   */
  constructor(unknownFaction: string) {
    super(`Unknown action provided: ${unknownFaction}`);
  }
}

/**
 * Utility function that returns the "other" faction from the given one.
 *
 * Will throw an error if given an unknown faction.
 */
export const getAltFaction = (faction: Faction): Faction => {
  if (!isFaction(faction)) throw new Error('Unknown Faction');
  if (faction === 'north') return 'south';
  return 'north';
};
