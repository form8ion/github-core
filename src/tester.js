import {directoryExists} from '@form8ion/core';

export default function sourceHostedOnGitHub({projectRoot}) {
  return directoryExists(`${projectRoot}/.github`);
}
