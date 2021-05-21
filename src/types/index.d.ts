import {
    HOOK_NAMES,
    CORS_HOOK_NAME,
    HELMET_HOOK_NAME,
    SESSION_HOOK_NAME,
    BODY_PARSER_HOOK_NAME,
    FILE_UPLOAD_HOOK_NAME,
    RESPONSE_HOOK_NAME,
    POLICIES_HOOK_NAME,
    ROUTES_HOOK_NAME,
    SEQUELIZE_HOOK_NAME
} from '../constants'

export type CorsHookConfigs = {
  allowKey?: string | null,
  allowDomains?: string[],
}

export type SessionHookConfigs = {
  secret: string
  expiration: number
  checkExpirationInterval: number
  connection: {
    dialect: string,
    storage: string,
    force: boolean,
    alter: boolean,
    logging: boolean
  }
}

export type HookNames = typeof HOOK_NAMES[number]

export type Hooks = {
  [CORS_HOOK_NAME]: CorsHookConfigs,
  [HELMET_HOOK_NAME]: null,
  [SESSION_HOOK_NAME]: SessionHookConfigs,
  [BODY_PARSER_HOOK_NAME]: null,
  [FILE_UPLOAD_HOOK_NAME]: null,
  [RESPONSE_HOOK_NAME]: null,
  [POLICIES_HOOK_NAME]: null,
  [ROUTES_HOOK_NAME]: null,
  [SEQUELIZE_HOOK_NAME]: null
}

export type HookConfigs = Hooks<HookNames>

export interface IHook {
  name: HookNames
  configs: HookConfigs
  userConfigs: HookConfigs
  defaultConfigs: HookConfigs

  init(): Promise<any>

  validateUserConfigs(): void
}

export type UserConfigs = {
  port?: number,
  hookConfigs?: HookConfigs
}
