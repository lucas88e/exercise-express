## Express API

### Setting Up Morgan and Refactoring Route Definitions

> **IMPORTANT: 🚫 Do not modify imported request configurations without explicit instructions.**

1. **Install Dependencies**: Ensure all dependencies

2. **Import Collections**: Import the environment and collection from the directory `./data/thunder_client`

3. **Configure Morgan**: Set up Morgan with the `'dev'` format in ./app.js.

4. **Start Server and Test Morgan**: Run the server and test Morgan functionality by sending a request to `/health`.

5. **Import Data**: Import movie and genre data from `./data.js` in `./app.js`, and verify the responses of newly impored requests.

6. **Refactor Routes**: Refactor route definitions in `./app.js` by creating separate router modules for each entity:

- Create `./routes/movies.js` for movie-related routes.
- Create `./routes/genres.js` for genre-related routes.
- Create `./routes/testing.js` for the health check route.

7. **Recheck Requests**: After refactoring, reverify that all requests function correctly.

8. **Review Errors**: Carefully examine errors thrown by tests in the `Results` tab in the `RESPONSE` panel of Thunder Client. Modify `./app.js` as needed to pass all tests.

9. **Inspect Scripting**: If necessary, examine the `Test/Scripting` tab in the `REQUEST` panel of Thunder Client for guidance.

10. **Completion**: Once finished, proceed to the next exercise by executing:

```bash
  git checkout exercise3
```
