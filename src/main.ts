import { App } from './app'
import { userServices } from './services/UserServices'

const app = new App({ userServices })
app.startApp()
