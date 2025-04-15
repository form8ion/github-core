// remark-usage-ignore-next
/* eslint-disable-next-line no-unused-vars */
import {sourceHostedOnGitHub, octokit} from './lib/index.js';

await sourceHostedOnGitHub({projectRoot: process.cwd()});

octokit.getNetrcAuthenticatedInstance({
  logger: {
    info: message => console.error(message),
    warn: message => console.error(message),
    error: message => console.error(message)
  }
});
