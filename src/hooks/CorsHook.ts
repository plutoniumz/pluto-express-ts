import Hook from './Hook'
import { error } from '../utils'

class CorsHook extends Hook {
    public validateUserConfigs () {
        console.log(this.userConfigs)
        if (this.userConfigs && typeof this.userConfigs.allowKey !== 'string') {
            error(`${this.name}.allowKey is invalid`)
        }

        if (this.userConfigs && !Array.isArray(this.userConfigs.allowDomains)) {
            error(`${this.name}.allowDomains is invalid`)
        }
    }

    public init (): Promise<void> {
        return new Promise(resolve => resolve())
    }
}

export default CorsHook
