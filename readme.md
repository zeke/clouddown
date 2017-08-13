# clouddown 

Download all your [CloudUp](https://cloudup.com/) files.*

CloudUp is a nice filesharing service with a little app that runs 
inconspicuously on your computer, uploading every screenshot you take and putting
shareable URLs to those screenshots on your clipboard. I used it daily for a 
number of years, but since it was
[acquired by Automattic](https://en.blog.wordpress.com/2013/09/25/cloudup-joins-the-automattic-family/)
in 2013, the service has not improved much, has not introduce
a paid plan, and they recently disabled zip downloads entirely to thwart
piracy.

I fear that CloudUp will one day disappear entirely, so I wrote this tool
to download everything I uploaded to it over the last few years.

`*` Note: Clouddown currently **only downloads image files**, as the CloudUp API no 
longer returns direct URLs for files. I'm working with Automattic support to 
see if there's a way around this.

## Usage

This module is a bit scrappy, so it's not published to npm.

```sh
git clone https://github.com/zeke/clouddown
cd clouddown
npm install
```

Create a `.env` file and add your CloudUp email and password to it:

```sh
cp .env.example .env
```

Then:

```sh
npm start
```

This will generate a  `metadata` directory full of JSON data about every file,
and a `files` directory to contain the downloaded files.

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
