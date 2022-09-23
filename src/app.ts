import express from 'express'
import { userRouter } from './router/userRouter'

const app = express()

const PORT = 3000

app.use(userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
