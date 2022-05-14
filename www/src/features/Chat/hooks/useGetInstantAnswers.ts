import { faker } from '@faker-js/faker';

export default function useGetInstantAnswers() {
  const questionsAndAnswers = [
    ...Array(
      +faker.random.numeric(2, {
        allowLeadingZeros: false,
        bannedDigits: ['0']
      })
    ).keys()
  ].map(() => ({
    q: faker.lorem.sentence().replace('.', '?'),
    a: faker.lorem.sentence()
  }));

  return { data: questionsAndAnswers };
}
