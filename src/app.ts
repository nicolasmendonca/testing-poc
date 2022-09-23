import express from 'express'
import http from 'http'
import { RequestContext } from './express'
import { userRouter } from './router/userRouter'

export class App {
  public express: express.Application
  public server: http.Server;
  public PORT = 80

  constructor(services: RequestContext['services']) {
    this.express = express()
    this.server = http.createServer(this.express)
    this.injectServices(services)
    this.mountRoutes()
  }

  private mountRoutes() {
    return this.express.use('/', userRouter)
  }

  private injectServices(services: RequestContext['services']) {
    this.express.use((req, _, next) => {
      req.context = { services } 
      return next()
    })
  }

  startApp() {
    return new Promise((resolve) => {
      this.server.listen(this.PORT, () => {
        console.log(`Server is listening on port ${this.PORT}`)
        return resolve(undefined)
      })
    })
  }

  stopApp() {
    this.server.close()
  }
}
