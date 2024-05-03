## Express API

### Setting Up Morgan and Refactoring Route Definitions

> **IMPORTANT: 🚫 Do not modify imported request configurations without explicit instructions.**

1. **Install Dependencies**: Ensure all dependencies are installed.

2. **Import the environments and collection**

3. **Test PUT Request for Genre Update**: Test the `PUT /genres/:id` request to update. Ensure that the route is correctly implemented and passes all tests.

4. **Test GET Request to Verify Genre Update**: Execute `GET /genres` to verify that the genre has been updated correctly.

5. **Verify DELETE Request for Genres**: Test the `DELETE /genres/:id` to ensure that it is working correctly. Confirm that the specified genre is removed by testing `GET /genres` requests.

6. Review and understand the logic implemented in the delete and put controllers, and how they utilize input from params and body.
   Implement controllers for `GET /genres/:id` and `POST /genres`.

7. Create the new requests in the corresponding folder in Thunder and test that the entire CRUD functionality works correctly.

8. **Completion**: Once finished, proceed to the next exercise by executing:

```bash
  git checkout exercise4
```
