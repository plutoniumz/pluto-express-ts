import HookFactory from './hooks/HookFactory'
import { DEFAULT_HOOK_CONFIGS, DEFAULT_PORT_CONFIGS, HOOK_NAMES } from './constants'
import { start, end, error, app } from './utils'
import { UserConfigs, HookConfigs } from './types'

const startApplication = async (userConfigs: UserConfigs = {}) => {
    start('App is starting...')

    const { port = DEFAULT_PORT_CONFIGS, hookConfigs = DEFAULT_HOOK_CONFIGS } = userConfigs

    validateUserConfigs(userConfigs)

    await initAllHooks(hookConfigs)
    const server = await app.listen(port)

    end(`App is started at http://localhost:${server.address().port}`)
}

const validateUserConfigs = (userConfigs: UserConfigs) => {
    const { port, hookConfigs } = userConfigs

    if (port && !Number.isInteger(port)) {
        error(`"port: ${port}" is invalid`)
    }

    if (hookConfigs && typeof hookConfigs !== 'object') {
        error(`"hookConfigs: ${hookConfigs}" is invalid`)
    }
}

const initAllHooks = async (hookConfigs: HookConfigs): Promise<void> => {
    for await (const name of HOOK_NAMES) {
        if (hookConfigs[name] === false) return

        const hookUserConfigs = hookConfigs[name]

        const Hook = HookFactory.create(name, hookUserConfigs)

        Hook && await Hook.init()
    }
}

module.exports = startApplication
