# Official Jokes - The app

The Official Jokes app is a Vue 3 SPA with a modern-looking UI for rendering jokes in many different categories.

The app consists currently of 2 pages:

- Home: list of jokes that are loaded via Infinite Loading and can be filtered by type.
- Favorites: jokes that have been favorited. These are paginated in groups of 10 jokes and can also be filtered by type.

## How to install

To execute the app you only need 2 commands:

- `npm install`: to install the necessary list of dependencies
- `npm run dev`: to start the server in dev mode

## Structure

The Official Jokes app is quite a small app and it is reflected in its folder structure.
Instead of being divided into modules we are simply structuring and defining folders by their utility.

Folders:

- `/api`: here we define all the code that intends to communicate with the external api for Official Jokes.
  - The communication mechanism is based on the `Fetch` native api.
  - The logic for caching, fetching and to make data available to the Vue components is done with `@tanstack/vue-query` and its logic is defined in the folder `/composables`.
- `/components`: list of all the components (reusable) that are used throghout the app.
  - If we need a component that's unique to a single view, we can define it in the view itself.
- `/composables`: encapsulated logic for the app. It can be for obtaining the data from the `/api` or just to isolate logic outside of components.
- `/constants`: list of all the constants used in the app.
- `/icons`: vue components that render icons. Useful when you need to add minimal logic to an SVG.
- `/layout`: layouts that can be reused for different views.
- `/router`: all the logic related to the router. We are using `vue-router` under-the-hood.
- `/types`: list of Types and Interfaces used for better DX.
- `/utils`: code that is not particularly tied to any folder. Can also be considered as "common".
- `/views`: pages for the router.
