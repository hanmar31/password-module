/**
 * @author Hanna Mårtensson
 * @version 1.0.0
 */

import { PasswordValidator } from './PasswordValidator.js'

/**
 * Generates passwords that meet requirements.
 */
class PasswordGenerator {
  /**
   * Generates a password.
   *
   * @param {number} length - The desired password length.
   * @returns {string} The generated password.
   */
  generate (length) {
    this.#validateLength(length)
    const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerChar = 'abcdefghijklmnopqrstuvwxyz'
    const numberChar = '1234567890'
    const specialChar = '!@#£$%/\\{([)]=}<?+~^*-_.:|>'

    const password = []
    const actualLength = Math.max(length, 10)

    const requiredPools = [upperChar, lowerChar, numberChar, specialChar]

    for (const pool of requiredPools) {
      password.push(this.getRandomChar(pool))
    }

    const allChar = upperChar + lowerChar + numberChar + specialChar

    for (let i = 0; i < actualLength - 4; i++) {
      password.push(this.getRandomChar(allChar))
    }

    password.sort(() => Math.random() - 0.5)

    return password.join('')
  }

  /**
   * Returns a random character from a character pool.
   *
   * @param {string} charPool - The character pool to pick from.
   * @returns {string} A random character from the pool.
   */
  getRandomChar (charPool) {
    const randomIndex = Math.floor(Math.random() * charPool.length)
    return charPool[randomIndex]
  }

  /**
   * Validates that a generated password meets all requirements.
   *
   * @param {string} password - The password to validate.
   * @returns {boolean} True if the password meets all requirements.
   */
  isGeneratedPasswordValid (password) {
    const validator = new PasswordValidator()
    return validator.isValidPassword(password)
  }

  /**
   * Validates the password length.
   *
   * @param {number} length - The length to validate.
   * @throws {Error} If length is null, undefined, mot a number, or negative.
   */
  #validateLength (length) {
    if (length == null) {
      throw new Error('Length cannot be null or undefined')
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number')
    }
    if (length < 0) {
      throw new Error('Length cannot be negative')
    }
  }
}

export { PasswordGenerator }
