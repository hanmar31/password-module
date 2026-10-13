# Password module

## About
A JavaScript module for password validation and generation. It helps developers verify that passwords meet composition rules and generate passwords that automatically fulfill those same rules. The module consists of three classes: `PasswordGenerator`, `PasswordValidator`, and `ValidationResult`.

### The module does NOT:
- Store or encrypt passwords.
- Handle authentication.
- Connect to any external services or APIs.
- Check real-world security
    - The module only checks structural composition rules, not true security. For example, a password like "Password123!" may pass all checks, but "strong password" is simply the module's own composition label and not a guarantee of high security.
- Provide cryptographically secure generation
    - `generate()` relies on standard `Math.random()`, which is not cryptographically secure and is therefore unsuitable for real accounts or high security systems.


## Installation
- Node.js v18 or higher is required.

- Clone the repository:
```bash
git clone git@github.com:hanmar31/password-module.git
```
- Navigate to the project folder and install dependencies.
```bash
cd password-module
npm install
```

- Then import the module in your project.
```javascript
import { PasswordValidator, PasswordGenerator } from './path/to/password-module/src/index.js'
```

## Password rules & Constraints

### Minimum Length

The password must be at least 10 characters long. You can dynamically query this requirement using `getMinimumPasswordLength()`.
```javascript
console.log(validator.getMinimumPasswordLength()) // 10
```

### Strength Score & Checks (0 to 5)
The strength score represents the total number of validation checks passed, ranging from 0 to 5. The five individual checks are:
1. Minimum length (at least 10 characters)
2. At least one uppercase letter
3. At least one lowercase letter
4. At least one digit
5. At least one special character
- Labels (`getLabel()`): Depending on the final score, `getLabel()` categorizes the password as:
 - 0 to 2: 'weak password'
 - 3 to 4: 'medium password'
 - 5 : 'strong password'
- Note on Spaces: A password containing spaces can still score 5, but `isValidPassword()` always rejects it. Spaces are not counted in the score, because the score measures length and character variety, while the space check is an acceptance rule.

## Usage

### Validate a password
```javascript
import { PasswordValidator } from './path/to/password-module/src/index.js'

const validator = new PasswordValidator()

// Check if a password is valid
console.log(validator.isValidPassword('myPassword123!')) // true

// Get the strength of a password
const result = validator.getStrength('myPassword123!')
console.log(result.getLabel()) // 'strong password'
console.log(result.getScore()) // 5
console.log(result.hasSuggestions()) // false

// Get suggestions for a weak password
const suggestions = validator.getSuggestions('weakpass')
console.log(suggestions) // ['Use at least 10 characters.', ...]
```

### Generate a password
```javascript
import { PasswordGenerator } from './path/to/password-module/src/index.js'

const generator = new PasswordGenerator()

// Generate a password of length 12
const password = generator.generate(12)
console.log(password) // e.g. 'aB3!xK9#mP2q'
```
- Handling Short Lengths:
    - If you request a length shorter than the minimum requirement (e.g., `generator.generate(5)`), the length is automatically raised to the minimum requirement of 10.

- Invalid Input Handling: 
    - `generate()` throws an error if given invalid inputs such as null, non-numbers, negative numbers, NaN, or Infinity.
