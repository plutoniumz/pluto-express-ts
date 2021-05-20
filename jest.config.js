const srcDir = './src'

module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['html'],
    collectCoverageFrom: [
        `${srcDir}/**/*.{ts,js}`
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    roots: [
        '<rootDir>/src'
    ],
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
}
