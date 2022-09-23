import { faker } from '@faker-js/faker';
import type { UserServicesType, User } from '../services/UserServices';

function generateUser(overrides: Partial<User> = {}) {
  return {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    ...overrides,
  };
}

export class UserServicesMock implements UserServicesType {
  public createUser(payload: Omit<User, 'id'>): Promise<{ id: number; name: string; }> {
    return Promise.resolve(generateUser(payload))
  }

  public findUsers() {
      return Promise.resolve([
        generateUser(),
        generateUser(),
      ])
  }
}
