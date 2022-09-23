import { UsersController } from '../controllers/usersController'
import { router } from './router'

export const userRouter = router
  .get('/users', UsersController.get)
  .post('/users', UsersController.post)
