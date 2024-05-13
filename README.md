## Express API

### Refactor Genre Route Controllers

> IMPORTANT: 🚫 Do not modify imported request configurations without explicit instructions.

1. Install Dependencies: Ensure all dependencies are installed.

2. Compare with your solution and understand the proposed refactoring.

3. Create a folder controllers to extract the route controllers from the route definitions and import them from another module. The goal is to keep the route definitions cleaner.

- controllers
- genres.js
- movies.js

This is how the route definitions of routes/\* should look after this refactoring:

```javascript
...
const { getAllMovies } = require('../controllers/movies')

router.get('/', getAllMovies)

...
```

Make sure everything is still working.

4. Make the necessary changes in the controllers and validators so that:

- It does not allow creating or updating movies with genres that do not exist.
- It does not allow deleting genres with associated movies.

Refer to the express-validator documentation on how to create a custom validator to integrate these validations with the library.

5. The GET /movies and GET /movies/:id requests should respond with the genre name instead of the id. (without changing how the data is stored)

6. Find a way to integrate a custom validator within the params id validation, allowing you to substitute the 404 validation logic when the resources identified by params do not exist.

```bash
git checkout exercise7
```
