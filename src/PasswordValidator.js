/**
 * @author Hanna Mårtensson
 * @version 1.0.0
 */

import { ValidationResult } from './ValidationResult.js'
import { PasswordGenerator } from './PasswordGenerator.js'

/**
 * Validates passwords based on various rules.
 */
class PasswordValidator {
  /**
   * Checks the password agains the minimum length required.
   *
   * @param {string} password - The password to check.
   * @param {number} minLength - The minimum required password length.
   * @returns {boolean} True if password meets required minimum length. otherwise false.
   */
  hasMinLength (password, minLength) {
    return password.length >= minLength
  }

  /**
   * Checks if the password contains a uppercase character.
   *
   * @param {string} password - The password to check.
   * @returns {boolean} True if the password contains a uppercase character.
   */
  hasUpperCase (password) {
    for (const letter of password) {
      if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
        return true
      }
    }
    return false
  }

  /**
   * Checks if the password contains a lowercase character.
   *
   * @param {string} password - The password to check.
   * @returns {boolean} True if the password contains a lowercase character.
   */
  hasLowerCase (password) {
    for (const letter of password) {
      if (letter === letter.toLowerCase() && letter !== letter.toUpperCase()) {
        return true
      }
    }
    return false
  }

  /**
   * Checks if the password contains a number.
   *
   * @param {string} password - The password to check.
   * @returns {boolean} True if the password contains a number.
   */
  hasNumber (password) {
    for (const character of password) {
      if (character >= '0' && character <= '9') {
        return true
      }
    }
    return false
  }

  /**
   * Checks if the password contains an allowed special character.
   *
   * @param {string} password - The password to check.
   * @returns {boolean} True if the password contains an allowed special character.
   */
  hasSpecialChars (password) {
    const specialChars = '!@#£$%/\\{([)]=}<?+~^*-_.:|>'
    for (const character of password) {
      if (specialChars.includes(character)) {
        return true
      }
    }
    return false
  }

  /**
   * Checks if the password contains spaces.
   *
   * @param {string} password - The password to check.
   * @returns {boolean} False if password contains at least one space, otherwise true.
   */
  hasNoSpaces (password) {
    return !password.includes(' ')
  }

  /**
   * Checks the strength of a password.
   *
   * @param {string} password - The password to check.
   * @returns {ValidationResult} The password strength.
   */
  getStrength (password) {
    const checks = [
      this.hasMinLength(password, 10),
      this.hasUpperCase(password),
      this.hasLowerCase(password),
      this.hasNumber(password),
      this.hasSpecialChars(password)
    ]

    const totalScore = checks.filter(check => check).length
    const suggestions = this.getSuggestions(password)

    return new ValidationResult(totalScore, suggestions)
  }

  /**
   * Returns suggestions for how to improve the password.
   *
   * @param {string} password - The password to check.
   * @returns {string[]} Suggestions for improving the password.
   */
  getSuggestions (password) {
    const suggestions = []
    if (password.length === 0) return ['Password cannot be empty']
    if (!this.hasMinLength(password, 10)) suggestions.push('Use at least 10 characters.')
    if (!this.hasUpperCase(password)) suggestions.push('Add at least one uppercase letter')
    if (!this.hasLowerCase(password)) suggestions.push('Add at least one lowercase letter')
    if (!this.hasNumber(password)) suggestions.push('Add at least one number')
    if (!this.hasSpecialChars(password)) suggestions.push('Add at least one special character')
    if (!this.hasNoSpaces(password)) suggestions.push('Remove spaces from the password')
    return suggestions
  }

  /**
   * Checks if the password meets all validation requirements.
   *
   * @param {string} password - The password to check.
   * @returns {boolean} True if the password meets all requirements.
   */
  isValidPassword (password) {
    return this.hasMinLength(password, 10) &&
      this.hasUpperCase(password) &&
      this.hasLowerCase(password) &&
      this.hasNumber(password) &&
      this.hasSpecialChars(password) &&
      this.hasNoSpaces(password)
  }

  /**
   *
   * @param password
   */
  isGeneratedPasswordValid (password) {
    return this.isValidPassword(new PasswordGenerator(password))
  }
}

export { PasswordValidator }
