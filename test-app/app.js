/**
 * @author Hanna Mårtensson
 * @version 1.0.0
 */

import { PasswordValidator, PasswordGenerator } from '../src/index.js'

const validator = new PasswordValidator()
const generator = new PasswordGenerator()

console.log('--- Testing hasMinLength ---')

// Test that a password with 10 characters passes.)
const test1 = validator.hasMinLength('mypassword', 10)
console.log(test1 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test1)

// Test that a password shorter than 10 characters fails.
const test2 = validator.hasMinLength('short', 10)
console.log(test2 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test2)

console.log('--- Testing hasUpperCase ---')

// Test that a password with at least one uppercase character passes.
const test3 = validator.hasUpperCase('Mypassword')
console.log(test3 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test3)

// Test that a password without any uppercase characters fails.
const test4 = validator.hasUpperCase('mypassword')
console.log(test4 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test4)

console.log('--- Testing hasLowerCase ---')

// Test that a password with lowercase characters passes.
const test5 = validator.hasLowerCase('myPassword')
console.log(test5 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test5)

// Test that a password without lowercase characters fails.
const test6 = validator.hasLowerCase('MYPASSWORD')
console.log(test6 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test6)

console.log('--- Testing hasNumber ---')

// Test that a password with a number passes.
const test7 = validator.hasNumber('mypassword123')
console.log(test7 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test7)

// Test that a password without a number fails.
const test8 = validator.hasNumber('mypassword')
console.log(test8 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test8)

console.log('--- Testing hasSpecialChars ---')

// Test that a password with the allowed special characters passes.
const test9 = validator.hasSpecialChars('mypassword!')
console.log(test9 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test9)

// Test that a password without the allowed special characters fails.
const test10 = validator.hasSpecialChars('mypassword')
console.log(test10 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test10)

console.log('--- Testing hasNoSpaces ---')

// Test that a password without spaces passes.
const test11 = validator.hasNoSpaces('mypassword')
console.log(test11 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test11)

// Test that a password with spaces fails.
const test12 = validator.hasNoSpaces('my password')
console.log(test12 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test12)

console.log('--- Testing isValidPassword ---')

// Test that a password following the requirements pass.
const test13 = validator.isValidPassword('myPassword123!')
console.log(test13 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test13)

// Test that a password not following all the requirements fails
const test14 = validator.isValidPassword('mypassword!')
console.log(test14 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test14)

console.log('--- Testing getStrength ---')

const result = validator.getStrength('myPassword123!')
const weakResult = validator.getStrength('weak')

// Test that a strong passwords get the correct label.
const test15 = result.getLabel()
console.log(test15 === 'strong password' ? '✅ PASS' : '❌ FAIL', 'Expected: strong password, Got:', test15)

// Test that a weak password get the correct label.
const test16 = weakResult.getLabel()
console.log(test16 === 'weak password' ? '✅ PASS' : '❌ FAIL', 'Expected: weak password, Got:', test16)

// Test that a strong password get the correct score.
const test17 = result.getScore()
console.log(test17 === 5 ? '✅ PASS' : '❌ FAIL', 'Expected: 5, Got:', test17)

// Test that a weak password get the correct score.
const test18 = weakResult.getScore()
console.log(test18 === 1 ? '✅ PASS' : '❌ FAIL', 'Expected: 1, Got:', test18)

// Test that a strong password has no suggestions.
const test19 = result.hasSuggestions()
console.log(test19 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test19)

// Test that a weak password has suggestions.
const test20 = weakResult.hasSuggestions()
console.log(test20 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test20)

console.log('--- Testing getSuggestions ---')

const suggestions = validator.getSuggestions('mypassword')

// Test that a password gets correct suggestions.
const test21 = suggestions.includes('Add at least one uppercase letter')
console.log(test21 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test21)

console.log('--- Testing generate ---')

const generated = generator.generate(10)

// Test that a generated password meets all requirements.
const test22 = generator.isGeneratedPasswordValid(generated)
console.log(test22 === true ? '✅ PASS' : '❌ FAIL', 'Expected: true, Got:', test22)

// Test that an invalid password fails validation.
const test23 = generator.isGeneratedPasswordValid('weak')
console.log(test23 === false ? '✅ PASS' : '❌ FAIL', 'Expected: false, Got:', test23)

console.log('--- Testing error handling ---')

// Test that passing null throws an error
try {
  validator.hasMinLength(null, 10)
  console.log('❌ FAIL Expected an error to be thrown')
} catch (error) {
  console.log('✅ PASS Error thrown correctly:', error.message)
}

// Test that passing null as length throws an error.
try {
  generator.generate(null)
  console.log('❌ FAIL Expected an error to be thrown')
} catch (error) {
  console.log('✅ PASS Error thrown correctly:', error.message)
}
