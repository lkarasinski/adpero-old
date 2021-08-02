/* eslint-disable */

export default {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/components/**/*.tsx",
        "**/functions/**/*.ts",
        "!**/*.(test|stories).(ts|tsx)",
    ],
    coverageDirectory: "coverage",
    moduleDirectories: [".", "node_modules"],
    moduleNameMapper: {
        "/^.+.(js|jsx|ts|tsx)$/": "/node_modules/babel-jest",
    },
    setupFilesAfterEnv: ["<rootDir>jest.setup.ts"],
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    testPathIgnorePatterns: ["/node_modules/", "./next/", "./.storybook/"],
};
