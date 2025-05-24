export const collection_1 = [];
export const collection_2 = [];
export const collection_3 = [];

export const randomCollection1 = Array.from(
  { length: getRandomInt(5, 10) },
  () => getRandomInt(-20, 20)
).sort((a, b) => b - a);
export const randomCollection2 = Array.from(
  { length: getRandomInt(5, 10) },
  () => getRandomInt(0, 20)
).sort((a, b) => a - b);
export const randomCollection3 = Array.from(
  { length: getRandomInt(5, 10) },
  () => getRandomInt(0, 20)
).sort((a, b) => a - b);

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
