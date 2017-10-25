import StringCalculator from '../src/StringCalculatorKata';

describe('#sum', () => {
  let instance;

  beforeEach(() => {
    instance = new StringCalculator();
  });

  describe('when two numbers are passed', () => {
    [ '5,8', '0,13', '10,3', '13,0'].forEach((tuple) => {
      it('returns the sum', () => {
        expect(instance.sum(tuple)).toBe(13);
      });
    })
  });
});
