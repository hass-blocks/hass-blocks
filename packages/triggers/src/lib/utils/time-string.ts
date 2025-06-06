/**
 * A string representing a time in HHMM format (positive only)
 * @public
 */
export type TimeHHMMWithoutMinus = `${string}:${string}`;

/**
 * A string represnting a time in HHMMSS format (positive only)
 *
 * @public
 */
export type TimeHHMMSSWithoutMinus = `${TimeHHMMWithoutMinus}:${string}`;

/**
 * A string representing a time in HHMMSS format
 * @public
 */
export type TimeHHMMSS = `-${TimeHHMMSSWithoutMinus}` | TimeHHMMSSWithoutMinus;
