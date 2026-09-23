/**
 * @author Hanna Mårtensson
 * @version 1.0.0
 */

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
   * Checks if the passsword contains a uppercase character.
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
   * @returns {boolean} True is the password contains a lowercase character.
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
   * @returns {boolean} True is the password contains a number.
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
   * Checks if the password contains a allowed special character.
   *
   * @param {string} password - The password to check.
   * @returns {boolean} True if the password contains a allowed special character.
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
}

export { PasswordValidator }
