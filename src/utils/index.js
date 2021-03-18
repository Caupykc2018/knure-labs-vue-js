export const parserBreeds = (data) => Object.entries(data).map(([key, value]) => ({breed: key, subBreeds: value}));

export const getRandomInt = (max = 1) => Math.floor(Math.random() * max);
