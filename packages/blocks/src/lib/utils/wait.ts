export const waitInMinutes = async (minutes: number) =>
  await new Promise((accept) => setInterval(accept, 1000 * 60 * minutes));

export const waitInSeconds = async (seconds: number) =>
  await new Promise((accept) => setInterval(accept, 1000 * seconds));
