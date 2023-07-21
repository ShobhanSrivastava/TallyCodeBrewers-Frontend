import { faker } from '@faker-js/faker';

export const generate = (count = 20) => {
    return new Array(count)
      .fill()
      .map(_ => faker.random.word())
      .join(' ');
  };