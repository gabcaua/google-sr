# google-sr 🔍
[![testing workflow](https://github.com/typicalninja/google-sr/actions/workflows/tests.yml/badge.svg)](https://github.com/typicalninja/google-sr)
[![GitHub issues](https://img.shields.io/github/issues/typicalninja/google-sr)](https://github.com/typicalninja/google-sr/issues)
[![GitHub Repo stars](https://img.shields.io/github/stars/typicalninja/google-sr)](https://github.com/typicalninja/google-sr/stargazers)
[![CodeFactor](https://www.codefactor.io/repository/github/typicalninja/google-sr/badge)](https://www.codefactor.io/repository/github/typicalninja/google-sr)

Simple & Fast Package for scraping Google search results without the need for an API key. 🚀


* Documentation can be found [here](https://g-sr.vercel.app)

## Monorepo

Welcome to the 📦 monorepo of GSR Project.
 
🏠 This is the home to google-sr and its related packages & applications.

> **[google-sr](./packages/google-sr/README.md)**

[![npm downloads for google-sr](https://img.shields.io/npm/dw/google-sr)](https://www.npmjs.com/package/google-sr)
[![NPM license for google-sr](https://img.shields.io/npm/l/google-sr)](https://www.npmjs.com/package/google-sr)
[![npm version for google-sr](https://img.shields.io/npm/v/google-sr)](https://www.npmjs.com/package/google-sr)

> **[google-that](./packages/google-that/README.md)**

[![npm downloads for google-that](https://img.shields.io/npm/dw/google-that)](https://www.npmjs.com/package/google-that)
[![NPM license for google-that](https://img.shields.io/npm/l/google-that)](https://www.npmjs.com/package/google-that)
[![npm version for google-that](https://img.shields.io/npm/v/google-that)](https://www.npmjs.com/package/google-that)

> **[google-sr-selectors](./packages/google-sr-selectors/README.md)**

[![npm downloads for google-sr-selectors](https://img.shields.io/npm/dw/google-sr-selectors)](https://www.npmjs.com/package/google-sr-selectors)
[![NPM license for google-sr-selectors](https://img.shields.io/npm/l/google-sr-selectors)](https://www.npmjs.com/package/google-sr-selectors)
[![npm version for google-sr-selectors](https://img.shields.io/npm/v/google-sr-selectors)](https://www.npmjs.com/package/google-sr-selectors)

This monorepo is managed with [turborepo](https://turbo.build/repo) and uses [pnpm workspaces](https://pnpm.io/workspaces).

## Disclaimer

This is not sponsored, supported, or affiliated with Google Inc.

Unlike the conventional recommendation of using the Google API, this module scrapes the Google search result page (which might potentially infringe upon Google's terms of service).

The source code within this repository is intended solely for educational purposes.

The author (typicalninja) & contributors takes **no** responsibility for any issues that arise from misuse, such as IP blocking by Google. Your discretion in usage is advised.

## Tests

Tests are written using [mocha](https://mochajs.org/) and can be run by using the `test` script.

> Weekly tests are executed using a github action to ensure compatibility

This monorepo uses pnpm as its package manager

```bash
pnpm run test
```

## Support & Bug Reporting 🛠️🐞

> Make sure you are on the latest version before creating bug reports

Support and bug reporting both can be done on  [github issues](https://github.com/typicalninja/google-sr/issues)
## License

This repository and the code inside it is licensed under the Apache-2.0 License. Read [LICENSE](./LICENSE) for more information.