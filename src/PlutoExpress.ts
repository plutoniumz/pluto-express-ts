import HookFactory from './hooks/HookFactory'
import { HOOK_NAMES } from './constants'
import { start, end, error, app } from './utils'
import { UserConfigs, HookConfigs } from './types'

class PlutoExpress {
    public static async startApplication (userConfigs: UserConfigs = {}) {
        start('App is starting...')

        const { port = 3000, hookConfigs = {} } = userConfigs

        PlutoExpress.validateUserConfigs(userConfigs)

        await PlutoExpress.initAllHooks(hookConfigs)
        const server = await app.listen(port)

        end(`App is started at http://localhost:${server.address().port}`)
    }

    private static validateUserConfigs ({ port, hookConfigs }: UserConfigs) {
        if (typeof port !== 'undefined' && !Number.isInteger(port)) {
            error(`"port: ${port}" is invalid`)
        }

        if (typeof hookConfigs !== 'undefined' && typeof hookConfigs !== 'object') {
            error(`"hookConfigs: ${hookConfigs}" is invalid`)
        }
    }

    private static async initAllHooks (hookConfigs: HookConfigs): Promise<void> {
        const names = Object.keys(HOOK_NAMES)

        for await (const name of names) {
            if (hookConfigs[name] === false) return

            const hookUserConfigs = hookConfigs[name]

            const Hook = HookFactory.create(name, hookUserConfigs)

            Hook && await Hook.init()
        }
    }
}

module.exports = PlutoExpress.startApplication
