# Test Report

## Summary

*Briefly describe how you tested your module, and why you chose that approach — clearly enough
that someone else could carry out the same tests.*

Answer: The module is tested in the console by an automated test app. The tests are located in test-app/app.js. You can run the tests either by running "npm start" or by running "npm test". This approach was chosen because it runs all tests automatically in one command, without requiring an external testing framework or a user interface. Therefore making it straightforward to verify that all methods work as expected.

## Test Results


**My test results:**

| What was tested | How it was tested | Result |
| ---------------- | ------------------ | ------- |
|PasswordValidator.hasMinLength() - password with exactly 10 characters.                   |Called hasMinLength('mypassword', 10) in the test app and compared the result with the expected value "true".                    |✅ Passed.         |
|PasswordValidator.hasMinLength - password with less than 10 characters.                   | Called hasMinLength('short', 10) in the test app and compared the result with the expected value "false".                    |✅ Passed.        |
|PasswordValidator.hasUpperCase() - password including a uppercase character.                   |Called hasUpperCase('myPassword') in the test app and compared the result with the expected value "true".                    |✅ Passed.         |
|PasswordValidator.hasUpperCase() - password without any uppercase character.                   |called hasUpperCase('mypassword') in test app and compared the result with the expected value "false".                    |✅ Passed.         |
|PasswordValidator.hasLowerCase() - password including a lowercase character.                   |Called hasLowerCase('myPassword') in the test app and compared the result with the expected value "true".                    |✅ Passed.         |
|PasswordValidator.hasLowerCase() - password without any lowercase characters.                   |Called hasLowerCase('MYPASSWORD') in the test app and compared the result with the expected value "false"                    |✅ Passed.          |
|PasswordValidator.hasNumber() - password including a number.                   |Called hasNumber('mypassword123') in the test app and compared the result with the expected value "true".                    |✅ Passed.          |
|PasswordValidator.hasNumber() - password without any number.                   |Called hasNumber('mypassword') in the test app and compared the result with the expected value "false".                    |✅ Passed.         |
|PasswordValidator.hasSpecialChars() - password including an allowed special character.                   |Called hasSpecialChars('mypassword!') in the test app and compared the result with the expected value "true".                   |✅ Passed.         |
|PasswordValidator.hasSpecialChars() - password without any allowed special characters.                                      |Called hasSpecialChars('mypassword') in the test app and compared the result with the expected value "false".                    |✅ Passed.         |
|PasswordValidator.hasNoSpaces() - password without any spaces.                   |Called hasNoSpaces('mypassword') in the test app and compared the result with the expected value "true" .                   |✅ Passed.         |
|PasswordValidator.hasNoSpaces() - password including spaces.                    |Called hasNoSpaces('my password') in the test app and compared the result with the expected value "false".                     |✅ Passed.         |
|PasswordValidator.isValidPassword() - password following all the requirements.                    |Called isValidPassword('myPassword123!') in the test app and compared the result with the expected value "true".                    |✅ Passed .         |
|PasswordValidator.isValidPassword() - password not following all the requirements.                   |Called isValidPassword('mypassword!') in the test app and compared the result with the expected value "false".                    |✅ Passed.         |
|ValidationResult.getLabel() — strong password returns correct label                   |Called getStrength('myPassword123!') and then getLabel() on the result, compared to expected value 'strong password'                     |✅ Passed.         |
| ValidationResult.getLabel() — weak password returns correct label | Called getStrength('weak') and then getLabel() on the result, compared to expected value 'weak password' | ✅ Passed. |
| ValidationResult.getScore() — strong password returns correct score | Called getStrength('myPassword123!') and then getScore() on the result, compared to expected value 5 | ✅ Passed. |
| ValidationResult.getScore() — weak password returns correct score | Called getStrength('weak') and then getScore() on the result, compared to expected value 1 | ✅ Passed. |
| ValidationResult.hasSuggestions() — strong password has no suggestions | Called getStrength('myPassword123!') and then hasSuggestions() on the result, compared to expected value false | ✅ Passed. |
| ValidationResult.hasSuggestions() — weak password has suggestions | Called getStrength('weak') and then hasSuggestions() on the result, compared to expected value true | ✅ Passed. |
| PasswordValidator.getSuggestions() — returns correct suggestion for missing uppercase | Called getSuggestions('mypassword') and checked that result includes 'Add at least one uppercase letter' | ✅ Passed. |
| PasswordGenerator.generate() — generates a valid password | Called generate(10) in the test app, stored the result and passed it to isGeneratedPasswordValid() to verify it meets all requirements | ✅ Passed. |
| PasswordGenerator.isGeneratedPasswordValid() — invalid password fails validation | Called isGeneratedPasswordValid('weak') in the test app and compared the result to expected value false | ✅ Passed.|
| PasswordValidator — throws error when null is passed | Called hasMinLength(null, 10) inside a try/catch in the test app and verified an error was thrown with the correct message | ✅ Passed. |
| PasswordGenerator.generate() — throws error when null is passed as length | Called generate(null) inside a try/catch in the test app and verified an error was thrown with the correct message | ✅ Passed. |

