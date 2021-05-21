import Hook from '../Hook'

class HookTest extends Hook {
    init (): Promise<any> {
        return Promise.resolve(undefined)
    }

    validateUserConfigs (): void {
    }
}

describe('Hook', () => {
    describe('init', () => {
        it('should process correctly', async () => {
            const mockValidateUserConfigs = jest.spyOn(HookTest.prototype, 'validateUserConfigs')

            await new HookTest('fakeHookName').init()

            expect(mockValidateUserConfigs).not.toHaveBeenCalled()
        })
    })
})
