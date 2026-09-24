/**
 * @author Hanna Mårtensson
 * @version 1.0.0
 */

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

    for (let i = 0; i <= actualLength - 4; i++) {
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
}

export { PasswordGenerator }
