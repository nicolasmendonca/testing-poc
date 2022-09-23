import axios from 'axios'
import { App } from '../app'
import { UserServicesMock } from './userServicesMock';

test('get users', async () => {
  // Arrange
  const users = [
    {
      id: 1,
      name: 'Mendo',
    },
    {
      id: 2,
      name: 'Sebas',
    }
  ]
  const userServices = new UserServicesMock()
  userServices.findUsers = jest.fn().mockResolvedValue(users)
  const app = new App({ userServices })
  
  // Act
  await app.startApp()
  const response = await axios.get(`/users`)

  // Assert
  expect(response.data).toEqual(users)

  // Cleanup
  app.stopApp()
})

test('post users', async () => {
  // Arrange
  const chubu = {
    id: 3,
    name: 'chubu'
  }
  const userServices = new UserServicesMock()
  userServices.createUser = jest.fn().mockResolvedValue(chubu)

  // Act
  const app = new App({ userServices })
  await app.startApp()

  // Assert
  const response = await axios.post(`/users`)
  expect(response.data).toEqual(chubu)

  // Cleanup
  app.stopApp()
})
