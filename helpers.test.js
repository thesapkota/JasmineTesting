describe("Test for helpers.js)", function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 15;
      submitPaymentInfo();
    });
  
    it('should add total tip on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(15);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 30;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(45);
    });
  
    it('should do total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(50);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 30;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(150);
    });
  
    it('should do total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(30);
  
      billAmtInput.value = 50;
      tipAmtInput.value = 15;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(60);
    });
  
    it('should sum tip percent on calculateTipPercent()', function () {
      expect(calculateTipPercent(50, 15)).toEqual(30);
      expect(calculateTipPercent(77, 7)).toEqual(9);
    });
  
    it('should generate new td & append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should generate delete td & append to tr on appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });