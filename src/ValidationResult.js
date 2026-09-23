/**
 * @author Hanna Mårtensson
 * @version 1.0.0
 */

/**
 * Validates the password based on the score.
 */
class ValidationResult {
  /**
   * Creates a new validation result.
   *
   * @param {number} score - The password score.
   * @param {string[]} suggestions - Suggestions for improving the password.
   */
  constructor (score, suggestions) {
    this.score = score
    this.suggestions = suggestions
  }

  /**
   * Returns a label based on the password score.
   *
   * @returns {string} The password strength label.
   */
  getLabel () {
    if (this.score <= 2) return 'weak password'
    if (this.score <= 4) return 'medium password'
    return 'strong password'
  }
}

export { ValidationResult }
