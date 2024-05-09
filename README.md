## Express API

### Refactor Genre Route Controllers

> **IMPORTANT: 🚫 Do not modify imported request configurations without explicit instructions.**

1. Install Dependencies: Make sure all dependencies are installed.

2. Set up the request in Postman for GET /genres/:id and ensure it works. Repeat the process for GET /movies/:id.

3. Validation has been added for input parameters and body using express-validator in the PUT /genres/:id controller. Simply install and import what you need for it to work. No need to touch its implementation.

4. Create a folder /middleware and refactor the PUT controller by extracting the logic that checks the middleware result into another middleware. middleware/validate.js

5. Validate the remaining inputs for genres and movies. Make sure to reuse the validation for UUID inputs passed through parameters.

6. Completion: Once finished, proceed to the next exercise by executing:

```bash
  git checkout exercise6
```
