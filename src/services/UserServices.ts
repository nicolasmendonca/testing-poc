export type User = {
  id: number;
  name: string;
}

export class UserServices {
  public findUsers(): Promise<User[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'Mendo',
      },
      {
        id: 2,
        name: 'Sebas',
      }
    ])
  }

  public createUser(payload: Omit<User, 'id'>): Promise<User> {
    return Promise.resolve({
      id: 3,
      name: 'chubu'
    })
  }
}

export const userServices = new UserServices()
export type UserServicesType = typeof userServices
