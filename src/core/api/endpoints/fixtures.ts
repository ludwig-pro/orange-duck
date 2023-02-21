import { Fixture } from '../models';
import { performanceMocks } from './fixtures.mocks';

export const get = (): Promise<Fixture[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(performanceMocks);
    }, 3000);
  });
};
