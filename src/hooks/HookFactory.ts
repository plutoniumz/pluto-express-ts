import CorsHook from './CorsHook'
import { HookNames, HookConfigs } from '../types'
import { CORS_HOOK_NAME, HOOK_DEFAULT_CONFIGS } from '../constants'

class HookFactory {
    public static create (name: HookNames, userConfigs: HookConfigs = null) {
        switch (name) {
        case CORS_HOOK_NAME:
            return new CorsHook(name, HOOK_DEFAULT_CONFIGS[CORS_HOOK_NAME], userConfigs)
        }
    }
}

export default HookFactory
