import { CorsHookConfigs, HookConfigs, SessionHookConfigs, UserConfigs } from './types'

export const DEFAULT_PORT_CONFIGS = 3000
export const DEFAULT_HOOK_CONFIGS = {}

export const CORS_HOOK_NAME = 'cors'
export const HELMET_HOOK_NAME = 'helmet'
export const SESSION_HOOK_NAME = 'session'
export const BODY_PARSER_HOOK_NAME = 'body-parser'
export const FILE_UPLOAD_HOOK_NAME = 'file-upload'
export const RESPONSE_HOOK_NAME = 'responses'
export const POLICIES_HOOK_NAME = 'policies'
export const ROUTES_HOOK_NAME = 'routes'
export const SEQUELIZE_HOOK_NAME = 'sequelize'
export const HOOK_NAMES = [
    CORS_HOOK_NAME,
    HELMET_HOOK_NAME,
    SESSION_HOOK_NAME,
    BODY_PARSER_HOOK_NAME,
    FILE_UPLOAD_HOOK_NAME,
    RESPONSE_HOOK_NAME,
    POLICIES_HOOK_NAME,
    ROUTES_HOOK_NAME,
    SEQUELIZE_HOOK_NAME
]

export const CORS_HOOK_DEFAULT_CONFIGS: CorsHookConfigs = {
    allowKey: null,
    allowDomains: ['http://localhost:3000']
}

export const SESSION_HOOK_DEFAULT_CONFIGS: SessionHookConfigs = {
    secret: 'secret',
    expiration: 8 * 60 * 60 * 1000,
    checkExpirationInterval: 30 * 1000,
    connection: {
        dialect: 'sqlite',
        storage: 'disk/session',
        force: true,
        alter: true,
        logging: true
    }
}

export const HOOK_DEFAULT_CONFIGS: HookConfigs = {
    [CORS_HOOK_NAME]: CORS_HOOK_DEFAULT_CONFIGS,
    [SEQUELIZE_HOOK_NAME]: SESSION_HOOK_DEFAULT_CONFIGS
}
