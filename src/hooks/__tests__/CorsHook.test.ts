import { error } from '../../utils'
import CorsHook from '../CorsHook'

describe('CorsHook', () => {
    describe('validateUserConfigs', () => {
        it('should process correctly', async () => {
            await new CorsHook('cors').init()

            expect(error).not.toHaveBeenCalled()
        })
    })
})
