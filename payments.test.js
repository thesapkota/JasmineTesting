describe("Tests for payments.js", function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 15;
    });
  
    it('should list a new payment when submitted submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('50');
      expect(allPayments['payment1'].tipAmt).toEqual('15');
      expect(allPayments['payment1'].tipPercent).toEqual(30);
    });

    it('should not add anything on empty input on submitPaymentInfo()', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
          billAmt: '50',
          tipAmt: '15',
          tipPercent: 30,
        }
    
        expect(createCurPayment()).toEqual(expectedPayment);
      });
    
      it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();
    
        expect(curPayment).toEqual(undefined);
      });
  
    it('should append #paymentTable on appendPaymentTable()', function () {
      curPayment = createCurPayment();
      allPayments['payment1'] = curPayment;
      appendPaymentTable(curPayment);
  
      let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(curTdList.length).toEqual(4);
      expect(curTdList[0].innerText).toEqual('$50');
      expect(curTdList[1].innerText).toEqual('$15');
      expect(curTdList[2].innerText).toEqual('30%');
      expect(curTdList[3].innerText).toEqual('X');
    });
  

  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });
 