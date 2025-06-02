export type TimeHHMMWithoutMinus = `${string}:${string}`;

export type TimeHHMMSSWithoutMinus = `${TimeHHMMWithoutMinus}:${string}`;

export type TimeHHMMSS = `-${TimeHHMMSSWithoutMinus}` | TimeHHMMSSWithoutMinus;
