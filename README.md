### To run this app

run `yarn` and `yarn dev` to start the app
run `yarn test` to test the app

`.env` values were moved to `constants.ts` for convenience of running the app

### Features:

- Design system - [AntD](https://ant.design/docs/react/introduce)
- Module Bundler - [Vite](https://vitejs.dev/guide/)
- Testing - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Vitests](https://vitest.dev/config/)
- Global State management - [Global Hook](https://www.npmjs.com/package/use-global-hook)
- Content Security Policy [here](https://www.npmjs.com/package/react-csp)
- Date parsing - [Day.js](https://day.js.org/)
- Number parsing - [Numeral.js](http://numeraljs.com/)

#### CX

- White-labeling - via AntD THEME provider
- Usage Tracking - [Matomo](https://www.npmjs.com/package/@datapunt/matomo-tracker-react)
- Error Logger - [RollBar](https://docs.rollbar.com/docs/react)

# Task to be completed

We would like:

- home page to display a list of Cards with the `/launches` data retrieved from the spacex data API.
- Test the solution
- The api is https://api.spacexdata.com/v5/ [docs here](https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs)

Your solution should cover the following tasks:

- [x] - Make API request(s) on page load
- [x] - Display `top 10` data items
- [x] - Provide some test coverage for your project (samples available: view, component and hook testing)
- [x] - The data that we would like you to display is:

- `name`
- `date_utc`
- The first core serial/name from `cores`
- `id` and `type` from payloads
- display the image from `links.patch.small` in links
- use `success` and `failures` to show the user the success/failure of launch and reason of failure
