// eslint-disable-next-line import/no-unresolved
import * as octokit from '@octokit/rest';
import {createNetrcAuth} from 'octokit-auth-netrc';

import {describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

import getNetrcAuthenticatedInstance from './netrc.js';

vi.mock('@octokit/rest');

describe('github client netrc', () => {
  const instance = any.simpleObject();

  it('should authenticate the client using the token from netrc', () => {
    when(octokit.Octokit).calledWith({authStrategy: createNetrcAuth}).thenReturn(instance);

    expect(getNetrcAuthenticatedInstance()).toBe(instance);
  });

  it('should configure the octokit instance with a provided logger', () => {
    const logger = any.simpleObject();
    when(octokit.Octokit).calledWith({authStrategy: createNetrcAuth, log: logger}).thenReturn(instance);

    expect(getNetrcAuthenticatedInstance({logger})).toBe(instance);
  });

  it('should not return a client if no token is available in the netrc', () => {
    const error = new Error('from test');
    error.code = 'ENONETRCTOKEN';
    octokit.Octokit.mockImplementation(() => {
      throw error;
    });

    expect(getNetrcAuthenticatedInstance()).toBeUndefined();
  });

  it('should rethrow an error that is unrelated to a missing netrc token', () => {
    const error = new Error('from test');
    octokit.Octokit.mockImplementation(() => {
      throw error;
    });

    expect(() => getNetrcAuthenticatedInstance()).toThrowError(error);
  });
});
