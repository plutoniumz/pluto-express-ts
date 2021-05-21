import HookFactory from '../hooks/HookFactory'
import { DEFAULT_PORT_CONFIGS, HOOK_NAMES } from '../constants'
import { end, start, error, app } from '../utils'

jest.mock('../hooks/HookFactory')

describe('startApplication', () => {
    const startApplication = require('../PlutoExpress')

    it('should process correctly', async () => {
        await startApplication()

        expect(start).toHaveBeenCalled()
        expect(HookFactory.create).toBeCalledTimes(HOOK_NAMES.length)
        expect(app.listen).toHaveBeenCalledWith(DEFAULT_PORT_CONFIGS)
        expect(end).toHaveBeenCalled()
    })

    it('should throw invalid port error when port is not integer', async () => {
        await startApplication({
            port: 'portIsNotInteger'
        })

        expect(error).toHaveBeenCalled()
    })

    it('should throw invalid hookConfigs error when hookConfigs is not object', async () => {
        await startApplication({
            hookConfigs: 'hookConfigsIsNotObject'
        })

        expect(error).toHaveBeenCalled()
    })
})
