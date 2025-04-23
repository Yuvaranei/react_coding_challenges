module.exports = {
    testEnvironment: 'jsdom',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    };