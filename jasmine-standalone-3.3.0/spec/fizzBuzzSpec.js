describe("Fizzbuzz", function() {

    var fizzbuzz;

    beforeEach(function() {
       fizzbuzz = new Fizzbuzz();
     });

  describe("knows when a number is", function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
  });

  describe("knows when a number is", function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
  });

  describe("knows when a number is", function() {
    it('multiple of 15', function() {
      expect(fizzbuzz.play(15)).toEqual('Fizzbuzz');
    });
  });

  describe("knows when a number is", function() {
    it('not divisible by s nor by 5', function() {
      expect(fizzbuzz.play(4)).toEqual(4);
    });
  });

});
