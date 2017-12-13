/**
 * Formats numbers
 */
export default class NumbersHelper {
  /**
   * Formats a number to the American `1,000.00` format
   * @param {number|string} number The value to format
   * @return {string} The formatted number
   */
  static numberWithCommas = (number, hideRemainderIfZero) => {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Remove the decimal place if it is empty
    if (hideRemainderIfZero && parts.length > 1 && /^0*$/.test(parts[1])) {
      parts.splice(1, 1);
    }
    return parts.join('.');
  }


  /**
   * Formats a number to a short format with:
   *  K = thousands
   *  M = millions
   *  B = billions
   *  T = trillions
   * It also supports fractional formats.  So a number like 1050 can be turned
   * into 1.05K by providing 2 or more for the decimals param.
   *
   * @param {number} number The value to format
   * @param {integer} decimals The amount of decimal places after the operator
   * @return {string} The formatted number
   */
  static formatToShortNumber = (number, decimals = 1) => {
    let mult = 1.0;
    let sym = '';
    const decimalMult = 10 ** decimals;
    if (number >= 1000 && number < 1000000) {
      sym = 'K';
      mult = 1000.0;
    } else if (number >= 1000000 && number < 1000000000) {
      sym = 'M';
      mult = 1000000.0;
    } else if (number >= 1000000000 && number < 1000000000000) {
      sym = 'B';
      mult = 1000000000.0;
    } else if (number >= 1000000000000 && number < 1000000000000000) {
      sym = 'T';
      mult = 1000000000000.0;
    }

    const total = (Math.floor((number * decimalMult) / mult) / decimalMult);
    return total + sym;
  }
}
