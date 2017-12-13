import NumbersHelper from '../../src/utilities/NumbersHelper';

describe('NumbersHelper', () => {
  describe('numberWithCommas', () => {
    it('should convert an integer into a number with commas', () => {
      const commaNumber = NumbersHelper.numberWithCommas(1000);
      expect(commaNumber).toEqual('1,000');
    });

    it('should convert an integer into a number without commas (number is too small)', () => {
      const commaNumber = NumbersHelper.numberWithCommas(100);
      expect(commaNumber).toEqual('100');
    });

    it('should convert a float into a number with commas and decimal places', () => {
      const commaNumber = NumbersHelper.numberWithCommas(1000.99);
      expect(commaNumber).toEqual('1,000.99');
    });

    it('should convert a float with no remainder into a number with decimal places', () => {
      const commaNumber = NumbersHelper.numberWithCommas(1000.0.toFixed(2));
      expect(commaNumber).toEqual('1,000.00');
    });

    it('should convert a float with no remainder into a number without decimal places', () => {
      const commaNumber = NumbersHelper.numberWithCommas(1000.00.toFixed(2), true);
      expect(commaNumber).toEqual('1,000');
    });
  });

  describe('formatToShortNumber', () => {
    it('should convert a hundreds number into itself', () => {
      const shortNumber = NumbersHelper.formatToShortNumber(100);
      expect(shortNumber).toEqual('100');
    });

    it('should convert a thousands number into <num>K', () => {
      const shortNumber = NumbersHelper.formatToShortNumber(1000.99);
      expect(shortNumber).toEqual('1K');
    });

    it('should convert a hundred thousands number into <num>K', () => {
      const shortNumber = NumbersHelper.formatToShortNumber(100000);
      expect(shortNumber).toEqual('100K');
    });

    it('should convert a millions number into <num>M', () => {
      const shortNumber = NumbersHelper.formatToShortNumber(50000000);
      expect(shortNumber).toEqual('50M');
    });

    it('should convert a billions number into <num>B', () => {
      const shortNumber = NumbersHelper.formatToShortNumber(50000000000);
      expect(shortNumber).toEqual('50B');
    });

    it('should convert a trillions number into <num>T', () => {
      const shortNumber = NumbersHelper.formatToShortNumber(50000000000000);
      expect(shortNumber).toEqual('50T');
    });

    it('should convert a thousands number with a hundred remainder into <num>.<rem>T', () => {
      const shortNumber = NumbersHelper.formatToShortNumber(1050, 2);
      expect(shortNumber).toEqual('1.05K');
    });
  });
});
