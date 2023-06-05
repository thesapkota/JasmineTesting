
it('should calculate the monthly rate correctly', function () {
  // ..
  const valuesUI = {
    amount: 10000,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(valuesUI)).toEqual('132.15');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const valuesUI = {
    amount: 10000.9999,
    years: 10.55,
    rate: 10.3333
  };
  expect(calculateMonthlyPayment(valuesUI)).toEqual('130.38');
});

/// etc
