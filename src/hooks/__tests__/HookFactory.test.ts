import CorsHook from '../CorsHook'
import HookFactory from '../HookFactory'

jest.mock('../CorsHook')

describe('HookFactory', () => {
    describe('create', () => {
        it('should return correct hook instance', () => {
            const hookInstance = HookFactory.create('cors')

            expect(hookInstance).toBeInstanceOf(CorsHook)
        })
    })
})
