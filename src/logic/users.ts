// import {someMongoConnection} from 'mongodb'

const someMongoConnection: any = {
  findAll: () => {
    return [
      {
        id: 1,
        name: 'Mendo',
      },
      {
        id: 2,
        name: 'Sebas',
      }
    ]
  },
  create: () => {
    return {
      id: 3,
      name: 'chubu'
    }
  }
};

export function findUsers() {
  return someMongoConnection.findAll();
}

export function createUser(userPayload: any) {
  return someMongoConnection.create(userPayload);
}
