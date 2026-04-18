# github-core

core package to support form8ion plugins that interact with GitHub

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![Try @form8ion/github-core on RunKit][runkit-badge]][runkit-link]
[![license][license-badge]][license-link]
![node][node-badge]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/github-core
```

### Example

```javascript
import {sourceHostedOnGitHub, octokit} from '@form8ion/github-core';

await sourceHostedOnGitHub({projectRoot: process.cwd()});

octokit.getNetrcAuthenticatedInstance({
  logger: {
    info: message => console.error(message),
    warn: message => console.error(message),
    error: message => console.error(message)
  }
});
```

## Contributing

<!--contribution-badges start -->

[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![semantic-release: angular][semantic-release-badge]][semantic-release-link]
[![Renovate][renovate-badge]][renovate-link]
[![PRs Welcome][PRs-badge]][PRs-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[github-actions-ci-link]: https://github.com/form8ion/github-core/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/github-core/node-ci.yml.svg?branch=master&logo=github

[coverage-link]: https://codecov.io/github/form8ion/github-core

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/github-core/master?logo=codecov

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovate

[PRs-link]: https://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[npm-link]: https://www.npmjs.com/package/@form8ion/github-core

[npm-badge]: https://img.shields.io/npm/v/@form8ion/github-core?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/github-core

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/github-core.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/github-core.svg?logo=opensourceinitiative

[node-badge]: https://img.shields.io/node/v/@form8ion/github-core?logo=node.js
