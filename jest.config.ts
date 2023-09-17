import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  roots: ['<rootDir>'],
};

export default jestConfig;
