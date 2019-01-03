// This is a function just to show a jest unit test example.
export const timeToFraction = (time: string): number => {
  if (time.length !== 4) {
    throw new Error("Time string length should be 4");
  }
  const h = parseInt(time.slice(0, -2), 10);
  const m = parseInt(time.slice(2), 10) / 6;
  return h + m / 10;
};
