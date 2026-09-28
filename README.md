# Password module

## About
A JavaScript module for password validation and generation. It helps developers verify that passwords meet security criteria and generate passwords that automatically fulfill those same criteria. The module consists of three classes: `PasswordGenerator`, `PasswordValidator`, and `ValidationResult`.

### The module does NOT:
- Store or encrypt passwords.
- Handle authentication.
- Connect to any external services or APIs.

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

## Usage

### Validate a password
```javascript
import { PasswordValidator } from './path/to/password-module/src/index.js'

const validator = new PasswordValidator()

// Check is a password is valid
console.log(validator.isValidPassword('myPassword123!')) // true

// Get the strength of a password
const result = validator.getStrength('myPassword123!')
console.log(result.getLabel()) // 'strong password'
console.log(result.getScore()) // 5
console.log(result.hasSuggestions()) // false

// Get suggestions for a weak password
const suggestions = validator.getSuggestions('weakpass')
console.log(suggestions) // ['Add at least one uppercase letter', ...]
```

### Generate a password
```javascript
import { PasswordGenerator } from './path/to/password-module/src/index.js'

const generator = new PasswordGenerator()

// Generate a password of length 12
const password = generator.generate(12)
console.log(password) // e.g. 'aB3!xK9#mP2q'
```
