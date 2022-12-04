export const randInt: (min: number, max: number) => number = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randFloat: (min: number, max: number) => number = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const randList: <T>(list: T[]) => T[] = (list) => {
  return list.sort(() => Math.random() - 0.5);
}

export const randomOf: <T>(list: T[]) => T = (list) => {
  return list[randInt(0, list.length - 1)];
}