import type { UserServicesType } from './services/UserServices'

export interface RequestContext {
  services: {
    userServices: UserServicesType
  }
}


declare global {
  namespace Express {
    interface Request {
      context: RequestContext 
    }
  }
}
