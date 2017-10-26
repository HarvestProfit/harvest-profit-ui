/**
 * Formats a number to the American `1,000.00` format
 *
 * @param {number|string} number The value to format
 * @return {string} The formatted number
 */
export default function numberWithCommas(number) {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
