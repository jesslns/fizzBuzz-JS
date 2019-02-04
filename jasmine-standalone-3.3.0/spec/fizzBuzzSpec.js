describe("Fizzbuzz", function() {

    var fizzbuzz;

    beforeEach(function() {
       fizzbuzz = new Fizzbuzz();
     });

  describe("knows when a number is", function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe("knows when a number is", function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });
  });

  describe("knows when a number is", function() {
    it('not divisible by s nor by 5', function() {
      expect(fizzbuzz.otherNumber(4)).toBe(4);
      expect(fizzbuzz.otherNumber(6)).toBe(6);
    });
  });

});
