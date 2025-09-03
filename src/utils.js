/**
 * Utility functions for the demo project
 */

/**
 * Formats a date string to a readable format
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generates a random ID
 * @returns {string} Random ID string
 */
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = {
  formatDate,
  validateEmail,
  generateId
};
