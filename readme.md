# clouddown 

Download all your CloudUp files

## Installation

This module is a bit scrappy, so it's not published to npm. Install it directly
from GitHub:

```sh
npm i -g zeke/clouddown
```

## Usage

Create a `.env` file and add your CloudUp email and password to it:

```sh
cp .env.example .env
```

Then:

```sh
npm start
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [cloudup-client (fork)](https://github.com/zeke/cloudup-client): cloudup api client
- [dotenv-safe](https://github.com/rolodato/dotenv-safe): Load environment variables from .env and ensure they are defined
- [limiter](https://github.com/jhurliman/node-rate-limiter): A generic rate limiter for node.js. Useful for API clients, web crawling, or other tasks that need to be throttled
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [make-dir](https://github.com/sindresorhus/make-dir): Make a directory and its parents if needed - Think `mkdir -p`
- [parse-link-header](https://github.com/thlorenz/parse-link-header): Parses a link header and returns paging information for each contained link.

## Dev Dependencies

- [standard](https://github.com/standard/standard): JavaScript Standard Style


## License

MIT
